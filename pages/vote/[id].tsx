import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ViewPoll from "../../components/ViewPoll";
import { PollData } from "../../components/ViewPoll";

import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";

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

  const result = pollData ? <ViewPoll pollData={pollData} /> : "Loading";
  return result;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Required for react-beautiful-dnd to work
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
  return { props: { data: [] } };
};

export default VotePage;
