import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { useUserID } from '../hooks/useUserID';
import styles from './InitialFormModal.module.css';

export function InitialFormModal() {
  const [firstFormStatus, setFirstFormStatus] = useState<string>();
  const userID = useUserID();

  useEffect(() => {
    setFirstFormStatus(localStorage.getItem('firstFormStatus') || 'not_filled');
  }, [setFirstFormStatus]);

  if (firstFormStatus === undefined || firstFormStatus === 'filled') {
      return null;
  }

  async function onSubmit(understandingResponse: number) {
    if (understandingResponse === undefined || !(0 <= understandingResponse && understandingResponse <= 3)) {
      alert(`Response is required`);
      return;
    }
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSebLC3w9orn8keIR69CqgBtaR7i-fSLAaMZnUKyhcxZfn16IQ/formResponse?usp=pp_url&entry.627021736=${userID}&entry.675560448=${understandingResponse}&submit=Submit`
    localStorage.setItem('firstFormStatus', 'filled');
    setFirstFormStatus('filled');
    // We use no-cors here because google form doesn't give a proper response if the form is not being submitted
    // through the site, though the form still submits
    // https://stackoverflow.com/questions/44012261/getting-around-cors-with-embedded-google-forms
    await fetch(formURL, {    mode: 'no-cors' })
  }

  return (
    <Modal open={true} onClose={onSubmit} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={styles.modal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          I understand Ranked Choice Voting:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', margin: '1rem' }}>
          <Button onClick={()=>{onSubmit(0)}} variant="contained" sx={{ marginBottom: '0.5rem' }}>
            Strongly Disagree
          </Button>
          <Button onClick={()=>{onSubmit(1)}} variant="contained" sx={{ marginBottom: '0.5rem' }}>
            Disagree
          </Button>
          <Button onClick={()=>{onSubmit(2)}} variant="contained" sx={{ marginBottom: '0.5rem' }}>
            Agree
          </Button>
          <Button onClick={()=>{onSubmit(3)}} variant="contained">Strongly Agree</Button>
        </Box>
      </Box>
    </Modal>
  );
}
