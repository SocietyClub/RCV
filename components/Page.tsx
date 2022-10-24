import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Sidebar from './Sidebar';
import styles from './Page.module.css';

type Props = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  alert?: AlertShape | null;
  autoHideAlertMilliSeconds?: number;
};

const defaultProps: Partial<Props> = {
  alert: null,
};

const Page = (props: Props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // Storing the alert separately here so that we can have a clean animation when the alert prop is changed to null
  // Otherwise when the prop is changed to null there is no fade away animation due to the message being cleared
  const [alert, setAlert] = useState<AlertShape | null>(null);

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (props.alert) {
      setAlert(props.alert);
      setSnackbarOpen(true);
    } else {
      handleClose();
    }
  }, [props.alert]);

  return (
    <div className={styles.page}>
      <div className={styles.contentContainer}>
        <div className={styles.mainContent}>{props.children}</div>
        {props.sidebar}
      </div>
      <Snackbar open={snackbarOpen} onClose={handleClose} autoHideDuration={props.autoHideAlertMilliSeconds}>
        <Alert onClose={handleClose} severity={alert?.severity}>
          {alert?.message}
          {alert?.errorMessages &&
            alert.errorMessages.map((errorMessage: ErrorMessage) => (
                <><br />{errorMessage.messageContent}</>
            ))
          }
        </Alert>
      </Snackbar>
    </div>
  );
};

Page.defaultProps = defaultProps;

export default Page;
