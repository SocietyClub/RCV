import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import Page from '../../../components/Page';
import StepVisualization from '../../../components/StepVisualization';
import VoteLine from '../../../components/VoteLine';
import YourVote from '../../../components/YourVote';
import styles from './results.module.css';
import { FormModalEndOfResultButton  } from '../../../components/FormModalEndOfResultButton';
import { GetPollResultsRequest } from '../../../components/api';
import { useFetch } from '../../../hooks/useFetch';

const PollResultsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pollResultsData, getPollResultsData] = useFetch(GetPollResultsRequest);
  const [alert, setAlert] = useState<AlertShape | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    getPollResultsData(String(id));
  }, [id]);

  useEffect(() => {
    // We don't want to spawn any alerts from before the request is sent. This is pretty janky
    if (pollResultsData.isInitial) {
      return;
    }
    // If fetching the Poll is done loading and was a failure then throw an alert message to the user
    if (!pollResultsData.isLoading && !pollResultsData.isSuccess) {
      setAlert({ severity: 'error', message: 'An error has occured while loading the poll results' });
    }

    // Clear the alert when loading or on success
    if (pollResultsData.isLoading || pollResultsData.isSuccess) {
      setAlert(null);
    }
  }, [pollResultsData.isInitial, pollResultsData.isLoading, pollResultsData.isSuccess]);

  const goBackStep = () => {
    const nextStep = Math.max(1, currentStep - 1);
    setCurrentStep(nextStep);
  };

  const goForwardStep = () => {
    const nextStep = Math.min(pollResultsData?.data?.steps?.length || 0, currentStep + 1);
    setCurrentStep(nextStep);
  };

  const onFirstStep = currentStep <= 1;
  const onLastStep = currentStep >= (pollResultsData?.data?.steps?.length || 0);

  return (
    <Page alert={alert}>
      {pollResultsData.isLoading && (
        <div>
          <Typography variant="h3">Loading Poll</Typography>
          <CircularProgress />
        </div>
      )}
      {!pollResultsData.isLoading && pollResultsData.data && (
        <>
          <h2>Poll Question: {pollResultsData.data.pollName}</h2>
          {pollResultsData.data.steps.length > 0 ? (
            <>
              <h3>Winner: {pollResultsData.data.winner}</h3>
              <div className={styles.stepCounter}>
                <Typography variant="subtitle2">
                  Step: {currentStep} out of {pollResultsData.data.steps.length}
                </Typography>
              </div>
              <div className={styles.stepContainer}>
                <div className={styles.stepArrowWrapper}>
                  <div className={`${styles.stepArrow} ${onFirstStep && styles.hidden}`} onClick={goBackStep}>
                    <ArrowCircleLeftIcon fontSize="large" />
                  </div>
                </div>
                <div className={styles.currentStepVisualization}>
                  <StepVisualization step={pollResultsData.data.steps[currentStep - 1]} yourEntry={pollResultsData.data.yourEntry} />
                </div>
                <div className={styles.stepArrowWrapper}>
                  <div className={`${styles.stepArrow} ${onLastStep && styles.hidden}`} onClick={goForwardStep}>
                    <ArrowCircleRightIcon fontSize="large" />
                  </div>
                </div>
              </div>
              <div className={styles.yourVoteExampleContainer}>
                <Typography variant="subtitle2">Your vote is seen with border:</Typography>

                <VoteLine candidateStyleNumber={0} voteCount={1} candidateStyleProp={styles.yourVoteExample} />
              </div>

              <FormModalEndOfResultButton />

              <div className={styles.yourVote}>
                <YourVote pollId={String(id)} />
              </div>
              {/* Hack padding otherwise the footer covers the YourVote compoennt */}
              <div style={{marginBottom: '3rem'}} />
            </>
          ) : (
            <Typography variant="h4">There are currently no votes placed for this poll</Typography>
          )}
        </>
      )}
    </Page>
  );
};

export default PollResultsPage;
