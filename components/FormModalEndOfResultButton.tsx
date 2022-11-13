import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import { FormModalEndOfResult, FormStatus } from './FormModalEndOfResults';

export function FormModalEndOfResultButton() {
  const [endFormStatus, setEndFormStatus] = useState<FormStatus>();
  const [surveyModalState, setSurveyModalState] = useState(false);
  const localStorageKey = 'endFormStatus';

  function handleClose() {
    setSurveyModalState(false);
  }

  function handleSetEndFormStatus(formStatus: FormStatus) {
      if(formStatus != 'filled') {
        return;
      }
      localStorage.setItem(localStorageKey, 'filled');
      setEndFormStatus('filled')
  }

  useEffect(() => {
    setEndFormStatus((localStorage.getItem(localStorageKey) as FormStatus) || 'not_filled');
  }, [setEndFormStatus]);

  if (endFormStatus === undefined || endFormStatus === 'filled') {
    return null;
  }

  return (
    <>
      <Button variant="contained" onClick={() => setSurveyModalState(true)}>
        Please take our survey!
      </Button>
      <FormModalEndOfResult open={surveyModalState} onClose={handleClose} endFormStatus={endFormStatus} setEndFormStatus={handleSetEndFormStatus}/>
    </>
  );
}
