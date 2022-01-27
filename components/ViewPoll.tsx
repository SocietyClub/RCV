import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import CandidateSelectionBox from "./CandidateSelectionBox";
import CandidateChoiceBox from "./CandidateChoiceBox";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

export type PollData = {
  candidateList: { name: string }[];
  maxNumRankedChoiceCount: number;
  pollDesc: string;
  pollId: string;
  pollName: string;
  pollOpen: boolean;
  startDate: string;
  endDate: string;
  userIsCreator: boolean;
};

type Props = {
  pollData: PollData;
};

function ViewPoll({ pollData }: Props) {
  const [alertMessage, setAlertMessage] = useState<string>();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<string[]>([]);
  const [chosenCandidates, setChosenCandidates] = useState<string[]>([]);

  useEffect(() => {
    if (pollData.candidateList) {
      setCandidates(pollData.candidateList.map((candidate) => candidate.name));
    }
  }, [pollData.candidateList]);

  type DropId = "candidatesDropId" | "chosenCandidatesDropId";

  const dropIdMap = {
    candidatesDropId: {
      list: candidates,
      setList: setCandidates,
    },
    chosenCandidatesDropId: {
      list: chosenCandidates,
      setList: setChosenCandidates,
    },
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceId = source.droppableId as DropId;
    const destId = destination.droppableId as DropId;

    if (sourceId === destId) {
      const reOrderedItems = reorder(
        dropIdMap[sourceId].list,
        source.index,
        destination.index
      );

      dropIdMap[sourceId].setList(reOrderedItems);
    } else {
      // Item is being moved from one list to another
      if (!isValidMove(destId)) {
        // Create a Toast
        return;
      }
      const [newSourceList, newDestList] = move(
        dropIdMap[sourceId].list,
        dropIdMap[destId].list,
        source.index,
        destination.index
      );

      dropIdMap[sourceId].setList(newSourceList);
      dropIdMap[destId].setList(newDestList);
    }
  };

  const reorder = (
    list: string[],
    startIndex: number,
    endIndex: number
  ): string[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const isValidMove = (destId: DropId): boolean => {
    const destList = dropIdMap[destId].list;
    const userChoosesMoreThanAllowedNumberOfCandidates =
      destId == "chosenCandidatesDropId" &&
      destList.length >= pollData.maxNumRankedChoiceCount;
    if (userChoosesMoreThanAllowedNumberOfCandidates) {
      console.log("Should Alert");
      setAlertMessage(
        `You can only choose a max of ${pollData.maxNumRankedChoiceCount} candidates!`
      );
      setAlertOpen(true);
    }
    const isValid = !userChoosesMoreThanAllowedNumberOfCandidates;
    return isValid;
  };

  const move = (
    source: string[],
    destination: string[],
    sourceIndex: number,
    destIndex: number
  ): string[][] => {
    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(sourceIndex, 1);
    destClone.splice(destIndex, 0, removed);
    return [sourceClone, destClone];
  };

  const boxWidth = "22.5rem";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h3">{pollData.pollName}</Typography>
          <div style={{ height: "4rem" }} />
          <Typography variant="h5">
            Drag your selections to the ranked spots on the right.
          </Typography>
          <div style={{ height: "4rem" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button variant="contained" color="primary">
            Share
          </Button>
          <Button variant="contained">Edit Poll</Button>
          <Button variant="contained">Close Poll</Button>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Droppable droppableId="candidatesDropId">
            {(provided, _) => (
              <div
                {...provided.droppableProps}
                style={{
                  minWidth: boxWidth,
                }}
                ref={provided.innerRef}
              >
                {candidates.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, _) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CandidateSelectionBox
                          candidateName={item}
                          width={boxWidth}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div style={{ width: "2rem" }}></div>
          <Droppable droppableId="chosenCandidatesDropId">
            {(provided, _) => (
              <>
                <div
                  {...provided.droppableProps}
                  style={{
                    minWidth: boxWidth, // Width of the Boxes
                  }}
                  ref={provided.innerRef}
                >
                  <div
                    style={{
                      position: "absolute",
                      zIndex: -1,
                    }}
                  >
                    {Array.from(
                      Array(pollData.maxNumRankedChoiceCount).keys()
                    ).map((num) => (
                      <CandidateChoiceBox key={num} width={boxWidth}>
                        Candidate {num + 1}
                      </CandidateChoiceBox>
                    ))}
                  </div>
                  {chosenCandidates.map((item, index) => (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided, _) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CandidateSelectionBox
                            candidateName={item}
                            width={boxWidth}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert variant="filled" severity="warning">
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ViewPoll;
