import { Button, TextField, Typography } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './CandidateInputList.module.css';

type Props = {
	textFieldClassName: string,
} & typeof defaultProps;

const defaultProps = {}

const CandidateInputList = (props: Props) => {

  const [numCandidates, setNumCandidates] = useState(1);

  const addCandidate = () => {
    setNumCandidates(numCandidates + 1);
  }

  const setFocusToLastCandidate = useCallback(() => {
    const lastCandidateTextInput = document.querySelectorAll('.' + props.textFieldClassName + ':last-of-type input')[0];
    if (lastCandidateTextInput) {
      lastCandidateTextInput.focus();
    }
  }, [props.textFieldClassName]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      setNumCandidates(numCandidates + 1);
    }
  }

  useEffect(() => {
    setFocusToLastCandidate();
  }, [numCandidates, setFocusToLastCandidate]);

  return (
    <>
      <Typography variant="h4">Candidates</Typography>
      {Array(numCandidates).fill(0).map((_,i) => 
        <TextField key={i} className={props.textFieldClassName} onKeyPress={handleKeyPress} label="Candidate Name" variant="filled" />
      )}
      <Button className={styles.addCandidateButton} variant="contained" onClick={addCandidate}>Add Candidate</Button>
    </>
  )
}

export default CandidateInputList;
