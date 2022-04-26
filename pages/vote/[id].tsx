import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";

import Page from "../../components/Page";
import VotePoll from "../../components/VotePoll";
import { GetPollRequest } from "../../components/api";
import { useFetch } from "../../hooks/useFetch";

const SidebarButton = (props: any) => (
  <Button {...props} style={{ marginBottom: "0.5rem" }}>
    {props.children}
  </Button>
);

const VotePageSidebar = (
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

function VotePage() {
  const router = useRouter();

  const [pollData, getPollData] = useFetch(GetPollRequest);

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
      sidebar={VotePageSidebar}
      autoHideAlertMilliSeconds={4000}
    >
      {pollData.data ? (
        <VotePoll pollData={pollData.data} setPageAlert={setPageAlert} />
      ) : (
        "Loading"
      )}
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Required for react-beautiful-dnd to work
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
  return { props: { data: [] } };
};

export default VotePage;
