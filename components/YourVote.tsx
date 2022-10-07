import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { GetVote } from './api';
import Typography from '@mui/material/Typography';
import styles from './YourVote.module.css';

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
      <Typography variant="h5">Your Choices were:</Typography>
      <div className={styles.spacer}></div>
      {!voteData.isInitial && !voteData.isSuccess && <>You have not voted yet</>}
      {voteData.data &&
        voteData?.data?.map((ballot: VoteBallot, i: number) => (
          <div className={styles.choiceWrapper}>
            <Typography variant="h5">{i + 1}:</Typography>
            <div className={styles.candidateName}>
              <Typography variant="subtitle2">{ballot.candidate.name}</Typography>
            </div>
          </div>
        ))}
    </>
  );
}

export default YourVote;
