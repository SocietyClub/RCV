import type { NextPage } from "next";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Page from "../components/Page";
import styles from "./createPoll.module.css";
import { CreatePollRequest } from "../components/api";
import PollInputForm from "../components/PollInputForm";

const CreatePollPage: NextPage = () => {
  const [pollName, setPollName] = useState("");
  const [maxNumRankedChoiceCount, setMaxNumRankedChoiceCount] = useState(3);
  const [candidateList, setCandidateList] = useState([{ name: "" }]);

  const createPoll = () => {
    // TODO: I looked into using the OpenAPI generated types but I will follow up with that later so I can just get this PR out now
    const data = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList,
    };

    CreatePollRequest(data)
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
