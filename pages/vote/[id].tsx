import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ViewPoll from "../../components/ViewPoll";

function VotePage() {
  const router = useRouter();
  const question = "What Movie Should We Watch?";
  type Hello = {
    foo: string;
    bar: string;
  };
  const aVar: Hello = {
    foo: "foo",
    bar: "bar",
  };

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
      setPollCandidates(
        pollResponseJson.candidateList.map((x: { name: string }) => x.name)
      );
    };

    populatePollCandidates();
  }, [router.isReady]);

  return <ViewPoll pollQuestion={question} pollCandidates={pollCandidates} />;
}

export default VotePage;
