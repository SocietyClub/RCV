import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useUserID } from '../hooks/useUserID';
import styles from './FormModal.module.css';

export type FormStatus = 'not_filled' | 'filled';

type Props = {
  open: boolean;
  onClose: () => void;
  endFormStatus: FormStatus
  setEndFormStatus: (formStatus: FormStatus) => void;
};

export function FormModalEndOfResult({ open, onClose, endFormStatus, setEndFormStatus }: Props) {
  const [understandingResponse, setUnderstandingResponse] = useState<number>();
  const [npsResponse, setNpsResponse] = useState<number>();
  const [feedbackResponse, setFeedbackResponse] = useState<string>('');
  const [emailResponse, setEmailResponse] = useState<string>('');
  const userID = useUserID();

  if (endFormStatus === undefined || endFormStatus === 'filled' || open === false) {
    return null;
  }

  async function onSubmit() {
    const noUnderstandingResponse = understandingResponse === undefined || !(0 <= understandingResponse && understandingResponse <= 3)
    const noRecommendationResponse = npsResponse === undefined || !(0 <= npsResponse && npsResponse <= 10)
    if (noUnderstandingResponse || noRecommendationResponse) {
      if (noUnderstandingResponse && noRecommendationResponse) {
          alert(`Understanding response and recommendation response are required`);
      } else if (noUnderstandingResponse) {
          alert(`Understanding response is required`);
      } else if (noRecommendationResponse) {
          alert(`Recommendation response is required`);
      }
      return;
    }
    // TODO: Create different staging and prod forms
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSf_ElYFRkokcozeVod1p6WMOW4-ZroxyQqhNz2M3xnqz8qzkQ/formResponse?usp=pp_url&entry.627021736=${userID}&entry.675560448=${understandingResponse}&entry.1077870871=${npsResponse}&entry.2039317476=${feedbackResponse}&entry.1229452016=${emailResponse}&submit=Submit`;
    setEndFormStatus('filled');
    // We use no-cors here because google form doesn't give a proper response if the form is not being submitted
    // through the site, though the form still submits
    // https://stackoverflow.com/questions/44012261/getting-around-cors-with-embedded-google-forms
    await fetch(formURL, { mode: 'no-cors' });
  }

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={styles.modal}>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            I understand Ranked Choice Voting:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', margin: '1rem' }}>
            <Button onClick={() => setUnderstandingResponse(0)} variant={understandingResponse == 0 ? 'contained' : 'outlined'} sx={{ marginBottom: '0.5rem' }}>
              Strongly Disagree
            </Button>
            <Button onClick={() => setUnderstandingResponse(1)} variant={understandingResponse == 1 ? 'contained' : 'outlined'} sx={{ marginBottom: '0.5rem' }}>
              Disagree
            </Button>
            <Button onClick={() => setUnderstandingResponse(2)} variant={understandingResponse == 2 ? 'contained' : 'outlined'} sx={{ marginBottom: '0.5rem' }}>
              Agree
            </Button>
            <Button onClick={() => setUnderstandingResponse(3)} variant={understandingResponse == 3 ? 'contained' : 'outlined'}>
              Strongly Agree
            </Button>
          </Box>
        </Box>

        {/* Add Tab order */}
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            On a scale from 0 to 10, how likely are you to recommend this product to a friend or colleague?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem', columnGap: '0.5rem' }}>
            {[...Array.from(Array(11).keys())].map((num: number) => (
              <Button onClick={() => setNpsResponse(num)} variant={npsResponse == num ? 'contained' : 'outlined'} className={styles.numberBox} key={num}>
                {num}
              </Button>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you have any other feedback (Optional)?
          </Typography>
          <TextField
            className={styles.textField}
            id="outlined-basic"
            label="Your feedback here."
            variant="outlined"
            multiline
            rows={2}
            onChange={e => setFeedbackResponse(e.target.value)}
          />
        </Box>

        <Box>
          <Typography className={styles.textField} id="modal-modal-title" variant="h6" component="h2">
            Email address (Optional, subscribe to our future projects):
          </Typography>
          <TextField
            className={styles.textField}
            id="outlined-basic"
            label="Email address."
            variant="outlined"
            onChange={e => setEmailResponse(e.target.value)}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant={'contained'}
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
