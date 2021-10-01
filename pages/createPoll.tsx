import type { NextPage } from 'next'
import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Page from '../components/Page';
import styles from './createPoll.module.css';
import CandidateInputList from '../components/CandidateInputList';
import { MenuItem } from '@mui/material';
import { CreatePollRequest } from '../components/api';


const CreatePollPage: NextPage = () => {
  // TODO: Probably want to have this be dynamic equal to the number of candidates 
  // but we don't have the current number of candidates exposed here so leaving it at this for now
  const maxNumberOfRankedChoices: Number = 10;

  const createPoll = () => {
    // Honestly not a big fan of all of this, I will probably come back and refactor to use 
    // react state and controlled inputs here since it will be easier for validation anyways
    const pollName: string = document.querySelector('#poll-title')?.value;
    const maxNumRankedChoiceCount: Number = Number(document.querySelector('#ranked-choice-count')?.innerText);

    let candidateList: Object[] = Array();
    document.querySelectorAll('.' + styles.candidateTextField + ' input').forEach(input => {
      if (input.value) {
        candidateList.push({ name: input.value });
      }
    });

    // TODO: I looked into using the OpenAPI generated types but I will follow up with that later so I can just get this PR out now
    const data = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList
    }
    
    CreatePollRequest(data)
      .then(() => {
        // TODO: Need to do some redirect here but the page doesn't exist yet
      })
      .catch(err => {
        console.error('Error!', err)
      })
  }

  return (
    <Page>
        <Typography variant="h3">Create a New Poll</Typography>
        <Typography variant="h4">Poll Details</Typography>
        <TextField className={styles.textField} label="Poll Title" id="poll-title" variant="filled" />
        <TextField className={styles.textField} label="Number of Ranked Choices" id="ranked-choice-count" select variant="filled" defaultValue="3">
          {Array(maxNumberOfRankedChoices).fill(0).map((_, i) => 
            <MenuItem key={i+1} value={i+1}>
              {i+1}
            </MenuItem>
          )}
        </TextField>
        <CandidateInputList textFieldClassName={styles.candidateTextField} />
        <Button className={styles.createPollButton} variant="contained" startIcon={<AddIcon />} color="success" onClick={createPoll}>Create Poll</Button>
    </Page>
  )
}

export default CreatePollPage;
