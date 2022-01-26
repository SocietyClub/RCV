import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ViewPoll from "../../components/ViewPoll";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";

function VotePage() {
  const router = useRouter();
  const question = "What Movie Should We Watch?";

  const [pollCandidates, setPollCandidates] = useState([]);

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
      console.log("Poll Response JSON");
      console.log(pollResponseJson);
      setPollCandidates(
        pollResponseJson.data.candidateList.map((x: { name: string }) => x.name)
      );
      //maxNumRankedChoiceCount
      //pollDesc
      //pollName
    };

    populatePollCandidates();
  }, [router.isReady]);

  const result = pollCandidates && (
    <ViewPoll pollQuestion={question} pollCandidates={pollCandidates} />
  );
  return result;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("GET SERVER SIDE PROPS CALLED");
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
  return { props: { data: [] } };
};

export default VotePage;
