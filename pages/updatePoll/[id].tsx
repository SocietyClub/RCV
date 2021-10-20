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

const UpdatePollPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pollName, setPollName] = useState("");
  const [maxNumRankedChoiceCount, setMaxNumRankedChoiceCount] = useState(3);
  const [candidateList, setCandidateList] = useState([]);

  useEffect(() => {
    // On the initial Page Load, this ID comes up as undefined
    // but then gets populated with the actual ID from the URL
    if (!id) {
      return;
    }

    GetPollRequest(String(id))
      .then((data) => {
        console.log(data);

        setPollName(data.pollName);
        setMaxNumRankedChoiceCount(data.maxNumRankedChoiceCount);
        setCandidateList(data.candidateList);
      })
      .catch((err) => {
        // TODO: We should design/ figure out and error state if the poll does not exist
        console.error("Error!", err);
      });
  }, [id]);

  const updatePoll = () => {
    // TODO: I looked into using the OpenAPI generated types but I will follow up with that later so I can just get this PR out now
    const data = {
      pollName,
      maxNumRankedChoiceCount,
      candidateList,
    };

    UpdatePollRequest(String(id), data)
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
