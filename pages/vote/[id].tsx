import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next'

import Button from '@mui/material/Button';
import { GetServerSideProps } from 'next';
import { resetServerContext } from 'react-beautiful-dnd';

import Page from '../../components/Page';
import VotePoll from '../../components/VotePoll';
import { GetPollRequest } from '../../components/api';
import { useFetch } from '../../hooks/useFetch';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const SidebarButton = (props: any) => (
  <Button {...props} style={{ marginBottom: '0.5rem' }}>
    {props.children}
  </Button>
);

type Props = {
  onShareClick: React.MouseEventHandler<HTMLButtonElement>;
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onCloseClick: React.MouseEventHandler<HTMLButtonElement>;
};

const VotePageSidebar = ({ onShareClick, onEditClick, onCloseClick }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '8rem',
        minHeight: '2rem',
        paddingTop: '5rem',
      }}
    >
      <SidebarButton variant="contained" color="primary" onClick={onShareClick}>
        Share
      </SidebarButton>
      <SidebarButton variant="outlined" onClick={onEditClick}>
        Edit Poll
      </SidebarButton>
      <SidebarButton variant="outlined" onClick={onCloseClick}>
        Close Poll
      </SidebarButton>
    </div>
  );
};

function VotePage() {
  const router = useRouter();

  const [pollData, getPollData] = useFetch(GetPollRequest);
  const [_, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { id } = router.query;
    getPollData(String(id));
  }, [router.isReady]);

  const [pageAlert, setPageAlert] = useState<AlertShape | null>(null);

  return (
    <Page
      alert={pageAlert}
      sidebar={
        <VotePageSidebar
          onShareClick={() => {
            copyToClipboard(window?.location?.href || '');
            setPageAlert({
              message: 'Copied the link to your Clipboard',
              severity: 'info',
            });
          }}
          onEditClick={() => {
            router.push(`/updatePoll/${pollData?.data?.pollId}`);
          }}
          onCloseClick={() => {}}
        />
      }
      autoHideAlertMilliSeconds={4000}
    >
      {pollData.data ? <VotePoll pollData={pollData.data} setPageAlert={setPageAlert} /> : 'Loading'}
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1234' } },
      { params: { id: 'ed97cfd1-8f98-483e-88d5-b33ca9916fa5' } },
      { params: { id: 'ed97d0d4183d-78f3-46c9-90bd-45c27223b7d8' } },
      { params: { id: 'e7d55e6b-92dc-4b34-bead-bbc19915daa9' } },
    ],
    fallback: false // true, false or 'blocking'
  };
}

export default VotePage;
