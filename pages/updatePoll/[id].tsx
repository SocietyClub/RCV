import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Page from "../../components/Page";
import styles from "./[id].module.css";
import { GetPollRequest, UpdatePollRequest } from "../../components/api";
import PollInputForm from "../../components/PollInputForm";
import { useFetch } from "../../hooks/useFetch";

const UpdatePollPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pollName, setPollName] = useState("");
  const [maxNumRankedChoiceCount, setMaxNumRankedChoiceCount] = useState(3);
  const [candidateList, setCandidateList] = useState<Array<Candidate>>([]);

  const [pollData, getPollData] = useFetch(GetPollRequest);
  const [updatedPollData, updatePollData] = useFetch(UpdatePollRequest);

  useEffect(() => {
    // On the initial Page Load, this ID comes up as undefined
    // but then gets populated with the actual ID from the URL
    if (!id) {
      return;
    }

    getPollData(String(id));
  }, [id]);

  useEffect(() => {
    if (pollData.data) {
      setPollName(pollData.data.pollName);
      setMaxNumRankedChoiceCount(pollData.data.maxNumRankedChoiceCount);
      setCandidateList(pollData.data.candidateList);
    }
  }, [pollData.data]);

  const updatePoll = () => {
    const data: UpdatePollRequest = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList,
    };

    updatePollData(String(id), data)
      .then(() => {
        // TODO: Need to do some redirect here but the page doesn't exist yet
      })
      .catch((err) => {
        console.error("Error!", err);
      });
  };

  return (
    <Page>
      <Typography variant="h3">Edit Poll</Typography>
      <PollInputForm
        textFieldClassName={styles.candidateTextField}
        pollName={pollName}
        maxNumRankedChoiceCount={maxNumRankedChoiceCount}
        candidateList={candidateList}
        setPollName={setPollName}
        setMaxNumRankedChoiceCount={setMaxNumRankedChoiceCount}
        setCandidateList={setCandidateList}
      />
      <Button
        className={styles.updatePollButton}
        variant="contained"
        startIcon={<SaveIcon />}
        color="success"
        onClick={updatePoll}
      >
        Update Poll
      </Button>
    </Page>
  );
};

export default UpdatePollPage;
