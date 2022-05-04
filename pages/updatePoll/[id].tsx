import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Page from '../../components/Page';
import styles from './[id].module.css';
import { GetPollRequest, UpdatePollRequest } from '../../components/api';
import PollInputForm from '../../components/PollInputForm';
import { useFetch } from '../../hooks/useFetch';

const UpdatePollPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pollName, setPollName] = useState('');
  const [maxNumRankedChoiceCount, setMaxNumRankedChoiceCount] = useState(3);
  const [candidateList, setCandidateList] = useState<Array<Candidate>>([]);

  const [pollData, getPollData] = useFetch(GetPollRequest);
  const [updatedPollData, updatePollData] = useFetch(UpdatePollRequest);
  const [alert, setAlert] = useState<AlertShape | null>(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    getPollData(String(id));
  }, [router.isReady, id]);

  useEffect(() => {
    if (pollData.data) {
      setPollName(pollData.data.pollName);
      setMaxNumRankedChoiceCount(pollData.data.maxNumRankedChoiceCount);
      setCandidateList(pollData.data.candidateList);
    }
  }, [pollData.data]);

  useEffect(() => {
    // We don't want to spawn any alerts from before the request is sent. This is pretty janky
    if (pollData.isInitial) {
      return;
    }
    // If fetching the Poll is done loading and was a failure then throw an alert message to the user
    if (!pollData.isLoading && !pollData.isSuccess) {
      setAlert({ severity: 'error', message: 'An error has occured while loading the poll' });
    }

    // Clear the alert when loading or on success
    if (pollData.isLoading || pollData.isSuccess) {
      setAlert(null);
    }
  }, [pollData.isInitial, pollData.isLoading, pollData.isSuccess]);

  useEffect(() => {
    // We don't want to spawn any alerts from before the request is sent. This is pretty janky
    if (updatedPollData.isInitial) {
      return;
    }
    // If fetching the Poll is done loading and was a failure then throw an alert message to the user
    if (!updatedPollData.isLoading && !updatedPollData.isSuccess) {
      setAlert({ severity: 'error', message: 'An error has occured while updating the poll' });
    }

    // Clear the alert when loading or on success
    if (updatedPollData.isLoading || updatedPollData.isSuccess) {
      setAlert(null);
    }
  }, [updatedPollData.isInitial, updatedPollData.isLoading, updatedPollData.isSuccess]);

  const updatePoll = () => {
    const data: UpdatePollRequest = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList,
    };

    updatePollData(String(id), data)
      .then(() => {
        router.push(`/vote/${pollData?.data?.pollId}`);
      })
      .catch(() => {
        throw new Error('Failed to Update the Poll');
      });
  };

  return (
    <Page alert={alert}>
      <Typography variant="h3">Edit Poll</Typography>
      <PollInputForm
        textFieldClassName={styles.candidateTextField}
        pollName={pollName}
        maxNumRankedChoiceCount={maxNumRankedChoiceCount}
        candidateList={candidateList}
        setPollName={setPollName}
        setMaxNumRankedChoiceCount={setMaxNumRankedChoiceCount}
        setCandidateList={setCandidateList}
      />
      <Button className={styles.updatePollButton} variant="contained" startIcon={<SaveIcon />} color="success" onClick={updatePoll}>
        Update Poll
      </Button>
    </Page>
  );
};

export default UpdatePollPage;
