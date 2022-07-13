import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styles from './PollInputForm.module.css';
import CandidateInputList from './CandidateInputList';
import { MenuItem } from '@mui/material';

type Props = {
  textFieldClassName: string;
  pollName: string;
  maxNumRankedChoiceCount: number;
  candidateList: Array<Candidate>;
  setPollName: (pollName: string) => void;
  setMaxNumRankedChoiceCount: (maxNumRankedChoiceCount: number) => void;
  setCandidateList: (candidates: Array<Candidate>) => void;
} & typeof defaultProps;

const defaultProps = {};

const PollInputForm = (props: Props) => {
  const maxNumberOfRankedChoices: Number = Math.max(10, props.candidateList.length);

  return (
    <>
      <Typography variant="h4">Poll Details</Typography>
      <TextField
        className={props.textFieldClassName}
        label="Poll Title"
        id="poll-title"
        variant="filled"
        value={props.pollName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setPollName(event.target.value)}
      />
      <TextField
        className={props.textFieldClassName}
        label="Number of Ranked Choices"
        id="ranked-choice-count"
        select
        variant="filled"
        value={props.maxNumRankedChoiceCount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setMaxNumRankedChoiceCount(Number(event.target.value))}
      >
        {Array(maxNumberOfRankedChoices)
          .fill(0)
          .map((_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
      </TextField>
      <CandidateInputList candidateList={props.candidateList} setCandidateList={props.setCandidateList} textFieldClassName={props.textFieldClassName} />
    </>
  );
};

PollInputForm.defaultProps = defaultProps;

export default PollInputForm;
