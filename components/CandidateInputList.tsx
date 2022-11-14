import { Button, IconButton, TextField, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './CandidateInputList.module.css';

type Props = {
  textFieldClassName: string;
  candidateList: Array<Candidate>;
  setCandidateList: (candidates: Array<Candidate>) => void;
} & typeof defaultProps;

const defaultProps = {};

const CandidateInputList = (props: Props) => {
  // Using this state to cause the focus to move to the new candidate input field
  // When the Enter Key or Add Candidate button is pressed, I didn't want to listen to
  // props.candidateList changes since those can happen from API calls
  // and we don't always want to change focus when that happens
  const [focusChange, setNumFocusChange] = useState(true);

  const addCandidate = () => {
    setNumFocusChange(!focusChange);
    props.setCandidateList([...props.candidateList, { name: '' }]);
  };

  const deleteCandidate = (i: number) => {
    // HACK: Currently modifies candidateList directly.
    // I'm being lazy but we should probably make this not mutate the prop
    props.candidateList.splice(i, 1);
    props.setCandidateList([...props.candidateList]);
  };

  const setFocusToLastCandidate = useCallback(() => {
    const lastCandidateTextInput = document.querySelectorAll('.' + styles.candidateInputRow + ':last-of-type input')[0] as HTMLInputElement;
    if (lastCandidateTextInput && lastCandidateTextInput.focus) {
      lastCandidateTextInput.focus();
    }
  }, [styles.candidateInputRow]);

  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setNumFocusChange(!focusChange);
      props.setCandidateList([...props.candidateList, { name: '' }]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index: number = Number(event.target.name);
    const candidateListCopy = [...props.candidateList];
    candidateListCopy[index] = { name: event.target.value };
    props.setCandidateList(candidateListCopy);
  };

  useEffect(() => {
    setFocusToLastCandidate();
  }, [focusChange, setFocusToLastCandidate]);

  return (
    <>
      <Typography variant="h4">Candidates</Typography>
      {props.candidateList.map((candidate, i) => (
        <div key={i} className={styles.candidateInputRow}>
          <TextField
            style={{flexGrow: 1}}
            key={i}
            name={String(i)}
            className={props.textFieldClassName}
            onKeyPress={handleEnterKey}
            label="Candidate Name"
            variant="filled"
            value={candidate.name}
            onChange={handleChange}
          />
          <IconButton key={i} aria-label="delete" onClick={() => deleteCandidate(i)}>
            <Delete />
          </IconButton>
        </div>
      ))}

      <Button className={styles.addCandidateButton} variant="contained" onClick={addCandidate}>
        Add Candidate
      </Button>
    </>
  );
};

CandidateInputList.defaultProps = defaultProps;

export default CandidateInputList;
