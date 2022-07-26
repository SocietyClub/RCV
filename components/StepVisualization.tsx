import Typography from '@mui/material/Typography';
import React from 'react';
import { getBgColorStyleObject } from '../utils/utils';
import styles from './StepVisualization.module.css';
import VoteLine from './VoteLine';

type Props = {
  step: ResultStep;
  yourEntry: ResultYourEntry;
} & typeof defaultProps;

const defaultProps = {};

const getYourEntryVoteForCurrentStep = (yourEntry: ResultYourEntry, step: ResultStep) => {
  if (!yourEntry.choices) {
    return '';
  }

  for (const choice of yourEntry.choices) {
    for (const candidate of step.candidateList) {
      if (!candidate.isEliminated && choice.candidate.name === candidate.name) {
        return candidate.name;
      }
    }
  }
};

const StepVisualization = (props: Props) => {
  const candidateMap = new Map<string, number>();
  props.step.candidateList
    .map(candidate => candidate.name)
    .sort()
    .forEach((candidate, index) => candidateMap.set(candidate, index));

  const yourVoteCurrentStep = getYourEntryVoteForCurrentStep(props.yourEntry, props.step);
  const yourVoteFirstChoice = props.yourEntry?.choices?.[0]?.candidate?.name;

  return (
    <div>
      {props.step.candidateList.map(candidate => (
        <div key={candidate.name} className={styles.vote}>
          <div
            style={getBgColorStyleObject(candidateMap.get(candidate.name))}
            className={`${styles.candidateName} ${styles['candidate' + candidateMap.get(candidate.name)]} ${candidate.isEliminated ? styles.isEliminated : ''}`}
          >
            <Typography variant="subtitle2">{candidate.name}</Typography>
          </div>
          {candidate.votes.map(vote => {
            if (yourVoteCurrentStep === candidate.name && yourVoteFirstChoice === vote.firstChoiceCandidate) {
              return (
                <React.Fragment key={vote.firstChoiceCandidate}>
                  <VoteLine
                    voteCount={1}
                    candidateStyleNumber={candidateMap.get(vote.firstChoiceCandidate)}
                    candidateStyleProp={`${styles['candidate' + candidateMap.get(vote.firstChoiceCandidate)]} ${styles.yourVote}`}
                  />
                  <VoteLine
                    voteCount={vote.voteCount - 1}
                    candidateStyleNumber={candidateMap.get(vote.firstChoiceCandidate)}
                    candidateStyleProp={styles['candidate' + candidateMap.get(vote.firstChoiceCandidate)]}
                  />
                </React.Fragment>
              );
            }
            return (
              <VoteLine
                key={vote.firstChoiceCandidate}
                voteCount={vote.voteCount}
                candidateStyleNumber={candidateMap.get(vote.firstChoiceCandidate)}
                candidateStyleProp={styles['candidate' + candidateMap.get(vote.firstChoiceCandidate)]}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

StepVisualization.defaultProps = defaultProps;

export default StepVisualization;
