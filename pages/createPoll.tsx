import type { NextPage } from "next";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Page from "../components/Page";
import styles from "./createPoll.module.css";
import { CreatePollRequest } from "../components/api";
import PollInputForm from "../components/PollInputForm";
import { useFetch } from "../hooks/useFetch";

const CreatePollPage: NextPage = () => {
  const [pollName, setPollName] = useState("");
  const [maxNumRankedChoiceCount, setMaxNumRankedChoiceCount] = useState(3);
  const [candidateList, setCandidateList] = useState<Array<Candidate>>([{ name: "" }]);
  const [createdPollData, createPollRequest] = useFetch(CreatePollRequest);

  const createPoll = () => {
    const data = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList,
    };

    createPollRequest(data)
      .then(() => {
        // TODO: Need to do some redirect here but the page doesn't exist yet
      })
      .catch((err) => {
        console.error("Error!", err);
      });
  };

  return (
    <Page>
      <Typography variant="h3">Create a New Poll</Typography>
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
        className={styles.createPollButton}
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        onClick={createPoll}
      >
        Create Poll
      </Button>
    </Page>
  );
};

export default CreatePollPage;
