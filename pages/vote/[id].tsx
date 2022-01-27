import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";

import Page from "../../components/Page";
import VotePoll from "../../components/VotePoll";
import { PollData } from "../../components/VotePoll";

function VotePage() {
  const router = useRouter();

  const [pollData, setPollData] = useState<PollData>();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const populatePollCandidates = async () => {
      const { id } = router.query;
      // TODO: Replace with Cory's function to also pass in the user UUID
      const getPollUrl =
        "https://societyclub-rcv-backend.uc.r.appspot.com/ranked-choice-vote/v1/poll/" +
        id;
      const pollResponse: any = await fetch(getPollUrl);
      const pollResponseJson: any = await pollResponse.json();
      setPollData(pollResponseJson.data);
    };

    populatePollCandidates();
  }, [router.isReady]);

  const SidebarButton = (props: any) => (
    <Button {...props} style={{ marginBottom: "0.5rem" }}>
      {props.children}
    </Button>
  );

  const Sidebar = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "8rem",
        minHeight: "2rem",
        paddingTop: "5rem",
      }}
    >
      <SidebarButton variant="contained" color="primary">
        Share
      </SidebarButton>
      <SidebarButton variant="outlined">Edit Poll</SidebarButton>
      <SidebarButton variant="outlined">Close Poll</SidebarButton>
    </div>
  );

  const [pageAlert, setPageAlert] = useState<AlertShape | null>(null);

  const result = pollData ? (
    <VotePoll pollData={pollData} setPageAlert={setPageAlert} />
  ) : (
    "Loading"
  );
  return (
    <Page alert={pageAlert} sidebar={Sidebar} autoHideAlertMilliSeconds={4000}>
      {result}
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Required for react-beautiful-dnd to work
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
  return { props: { data: [] } };
};

export default VotePage;
