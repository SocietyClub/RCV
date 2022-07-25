import admin from 'firebase-admin';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Buffer } from 'buffer';
import { getFirestore } from 'firebase-admin/firestore';
import { cert } from 'firebase-admin/app';
import { validate as isValidUUID } from 'uuid';
import { createMessage } from '../../../../../utils/utils';
import { Severity } from '../../../../../models/Enums';

const X_USER_ID = 'x-user-id';

type TransformedVote = string[];

type CandidateCalculationStructure = {
  name: string;
  isEliminated: boolean;
  votes: TransformedVote[];
};

type CalculationStep = {
  [candidateName: string]: CandidateCalculationStructure;
};

type DBPollVotesByUserID = {
  [voterUserId: string]: VoteBallot[];
};

type TransformedPollVotesByUserID = {
  [voterUserId: string]: TransformedVote;
};

const serviceAccount = JSON.parse(Buffer.from(process.env.FIRESTORE_KEY_BASE64 || '', 'base64').toString('utf-8'));

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {
  if (req.method !== 'GET') {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Method Issue', 'Request must be of type GET for this endpoint')],
    });
  }

  const userId = req.headers[X_USER_ID] as string;

  if (!isValidUUID(userId)) {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Param issue', 'Poll could not be created: User ID is not valid')],
    });
  }

  const { pollId } = req.query;
  const pollPromise = db
    .collection('polls')
    .doc(pollId as string)
    .get();
  const pollVotesPromise = db
    .collection('votes')
    .doc(pollId as string)
    .get();

  // Awaiting on the Promise.all here to be able to run those two DB calls in parallel
  const [pollData, pollVotesData] = await Promise.all([pollPromise, pollVotesPromise]);

  const poll = pollData.data() as Poll;
  const pollVotes = pollVotesData.data() as DBPollVotesByUserID;

  // If no poll was found, return a Not Found error
  if (!poll) {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Poll Was Not Found', 'Poll could not be found')],
    });
  }

  // If there are no votes yet, return an empty response
  if (!pollVotes) {
    return res.status(200).json({
      data: {
        pollId,
        pollName: poll.pollName,
        totalEntries: 0,
        totalSteps: 0,
        maxNumRankedChoiceCount: poll.maxNumRankedChoiceCount,
        winner: [],
        steps: [],
        yourEntry: { choices: [] },
      },
    });
  }

  // First lets transform the Votes from the DB into an easier format to work with
  const transformedPollVotes: TransformedPollVotesByUserID = {};
  for (const key in pollVotes) {
    transformedPollVotes[key] = pollVotes[key].map(vote => vote.candidate.name);
  }

  const totalVoteCount = Object.values(pollVotes).length;
  const calculatonSteps: CalculationStep[] = [];
  let winnersArray: string[] = [];

  // Taking all of the votes and building the first CalculationStep, the rest of the steps are based off of this
  const firstCalculationStep = buildFirstStep(poll, transformedPollVotes);
  calculatonSteps.push(firstCalculationStep);

  while (winnersArray.length === 0) {
    // Get a deep copy of the latest step
    const calculationStepCopy = JSON.parse(JSON.stringify(calculatonSteps[calculatonSteps.length - 1])) as CalculationStep;

    // Calculate who is winning and losing
    const { bottomCandidates, bottomVoteCount, topCandidates, topVoteCount } = calculateBottomAndTopCandidates(calculationStepCopy);

    // If someone has half or more of the votes, then there was a winner
    if (topVoteCount >= totalVoteCount / 2.0) {
      // We have a winner!
      winnersArray = topCandidates;
      break;
    }

    // If all non-eliminated candidates have the same number of votes and no one has >= 50% of the votes then we have a tie
    if (bottomVoteCount === topVoteCount) {
      // We have a winner!
      winnersArray = topCandidates;
      break;
    }

    // If we don't have a winner, eliminate the candidate(s) with the fewest votes
    // Mark the losing candidate(s) as Eliminated
    bottomCandidates.forEach(lowestName => (calculationStepCopy[lowestName].isEliminated = true));

    // Re-assign the votes to the next available choice
    bottomCandidates.forEach(lowestName => {
      calculationStepCopy[lowestName].votes.forEach(vote => {
        for (let i = 0; i < vote.length; i++) {
          // Find the first non-eliminated candidate to assign the vote too
          if (!calculationStepCopy[vote[i]].isEliminated) {
            calculationStepCopy[vote[i]].votes.push(vote);
            break;
          }
        }
      });
      // Clear the votes now that they are eliminated
      calculationStepCopy[lowestName].votes = [];
    });

    // Now that the calculationStepCopy is updated to be the next Step, add it to the steps array
    calculatonSteps.push(calculationStepCopy);
  }

  const ResultSteps = convertCalculationStepsToResultStepShape(calculatonSteps);

  return res.status(200).json({
    data: {
      pollId,
      pollName: poll.pollName,
      totalEntries: totalVoteCount,
      totalSteps: ResultSteps.length,
      maxNumRankedChoiceCount: poll.maxNumRankedChoiceCount,
      winner: winnersArray,
      steps: ResultSteps,
      yourEntry: { choices: pollVotes[userId] },
    },
  });
}

const voteCount = (votes: ResultVote[]) => {
  return votes.reduce((acc, val) => acc + val.voteCount, 0) as number;
};

const convertCalculationStepsToResultStepShape = (calculationSteps: CalculationStep[]): ResultStep[] => {
  const steps: ResultStep[] = [];
  calculationSteps.forEach(step => {
    const stepCandidates: ResultCandidate[] = [];
    for (const key in step) {
      const newVotes: ResultVote[] = [];
      for (let i = 0; i < step[key].votes.length; i++) {
        if (i === 0) {
          newVotes.push({
            firstChoiceCandidate: step[key].votes[i][0],
            voteCount: 1,
          });
        } else {
          if (step[key].votes[i][0] === newVotes[newVotes.length - 1].firstChoiceCandidate) {
            newVotes[newVotes.length - 1].voteCount++;
          } else {
            newVotes.push({
              firstChoiceCandidate: step[key].votes[i][0],
              voteCount: 1,
            });
          }
        }
      }

      stepCandidates.push({
        name: step[key].name,
        isEliminated: step[key].isEliminated,
        votes: newVotes,
      });
    }

    steps.push({
      stepId: 0,
      candidateList: stepCandidates.sort(sortByVoteCountDesc), // Maybe want to support a sort alphabetically option too
    });
  });

  return steps;
};

const sortByVoteCountDesc = (a: ResultCandidate, b: ResultCandidate) => voteCount(b.votes) - voteCount(a.votes);

const buildFirstStep = (poll: Poll, transformedPollVotes: TransformedPollVotesByUserID): CalculationStep => {
  const calculationStep: CalculationStep = {};

  poll.candidateList.forEach(candidate => {
    calculationStep[candidate.name] = {
      name: candidate.name,
      isEliminated: false,
      votes: [],
    };
  });
  // Add votes to candidate map
  Object.values(transformedPollVotes).forEach(voteChoices => {
    for (let i = 0; i < voteChoices.length; i++) {
      if (calculationStep[voteChoices[i]]?.isEliminated) {
        continue;
      }

      if (calculationStep[voteChoices[i]]?.votes) {
        calculationStep[voteChoices[i]].votes.push(voteChoices);
      } else {
        calculationStep[voteChoices[i]] = {
          name: voteChoices[i],
          isEliminated: false,
          votes: [voteChoices],
        };
      }
      break;
    }
  });

  return calculationStep;
};

const calculateBottomAndTopCandidates = (calculationStep: CalculationStep) => {
  const defaultAcc: { bottomCandidates: string[]; bottomVoteCount: number; topCandidates: string[]; topVoteCount: number } = {
    bottomCandidates: [],
    bottomVoteCount: Infinity,
    topCandidates: [],
    topVoteCount: 0,
  };
  return Object.values(calculationStep).reduce(({ bottomCandidates, bottomVoteCount, topCandidates, topVoteCount }, candidateCalcObj) => {
    const sumOfVotes = candidateCalcObj.votes.length;

    // We only want to look at people who are not eliminated
    if (candidateCalcObj.isEliminated) {
      return { bottomCandidates, bottomVoteCount, topCandidates, topVoteCount };
    }

    if (sumOfVotes >= topVoteCount) {
      // If two people are tied, keep track of both
      if (sumOfVotes == topVoteCount) {
        topCandidates.push(candidateCalcObj.name);
      } else {
        topCandidates = [candidateCalcObj.name];
        topVoteCount = sumOfVotes;
      }
    }
    if (sumOfVotes <= bottomVoteCount) {
      // If two people are tied, keep track of both
      if (sumOfVotes == bottomVoteCount) {
        bottomCandidates.push(candidateCalcObj.name);
      } else {
        bottomCandidates = [candidateCalcObj.name];
        bottomVoteCount = sumOfVotes;
      }
    }

    return { bottomCandidates, bottomVoteCount, topCandidates, topVoteCount };
  }, defaultAcc);
};
