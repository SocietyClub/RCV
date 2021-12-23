import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Page from '../components/Page';
import styles from './createPoll.module.css';
import { CreatePollRequest } from '../components/api';
import PollInputForm from '../components/PollInputForm';
import { useFetch } from '../hooks/useFetch';

const CreatePollPage: NextPage = () => {
  const [pollName, setPollName] = useState('');
  const [maxNumRankedChoiceCount, setMaxNumRankedChoiceCount] = useState(3);
  const [candidateList, setCandidateList] = useState<Array<Candidate>>([{ name: '' }]);
  const [createdPollData, createPollRequest] = useFetch(CreatePollRequest);
  const [alert, setAlert] = useState<AlertShape>(null);

  useEffect(() => {
    // We don't want to spawn any alerts from before the request is sent. This is pretty janky
    if (createdPollData.isInitial) {
      return;
    }
    // If done loading and was a failure then throw an alert message to the user
    if (!createdPollData.isLoading && !createdPollData.isSuccess) {
      setAlert({ severity: 'error', message: 'An error has occured while creating the poll' });
    }

    // Clear the alert when loading or on success
    if (createdPollData.isLoading || createdPollData.isSuccess) {
      setAlert(null);
    }
  }, [createdPollData.isInitial, createdPollData.isLoading, createdPollData.isSuccess]);

  const createPoll = () => {
    const data = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList,
    };

    createPollRequest(data).then(() => {
      // TODO: Need to do some redirect here but the page doesn't exist yet
    });
  };

  return (
    <Page alert={alert}>
      <Typography variant="h3">Create a New Poll</Typography>
      <PollInputForm
        textFieldClassName={styles.candidateTextField}
        pollName={pollName}
        maxNumRankedChoiceCount={maxNumRankedChoiceCount}
        candidateList={candidateList}
        setPollName={setPollName}
        setMaxNumRankedChoiceCount={setMaxNumRankedChoiceCount}
        setCandidateList={setCandidateList}
      />
      <Button className={styles.createPollButton} variant="contained" startIcon={<AddIcon />} color="success" onClick={createPoll}>
        Create Poll
      </Button>
    </Page>
  );
};

export default CreatePollPage;
