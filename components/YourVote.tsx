import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { GetVote } from './api';
import CandidateChoiceBox from './CandidateChoiceBox';

type Props = {
  pollId: string;
};

function YourVote({ pollId }: Props) {
  const [voteData, getVoteData] = useFetch(GetVote);

  useEffect(() => {
    if (!pollId) return;
    getVoteData(pollId);
  }, [pollId]);

  return (
    <>
      <div style={{margin: '1rem'}}>Your Choices:</div>
      {!voteData.isInitial && !voteData.isSuccess && <>You haven't voted yet</>}
      {voteData.data && voteData?.data?.map((ballot: VoteBallot, i: number) => (
        <CandidateChoiceBox key={i} width="100%">{ballot.candidate.name}</CandidateChoiceBox>
      ))}
    </>
  );
}

export default YourVote;
