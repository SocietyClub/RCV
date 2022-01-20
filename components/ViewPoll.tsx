import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import React from "react";
import { DragDropContext, Draggable, DraggableLocation, Droppable, DroppableId, DropResult } from "react-beautiful-dnd";
import CandidateSelectionBox from "./CandidateSelectionBox";
import CandidateChoiceBox from "./CandidateChoiceBox";
import { useState } from "react";
import { useEffect } from "react";

type Props = {
  pollQuestion: string;
  pollCandidates: string[];
};

function ViewPoll({ pollQuestion, pollCandidates }: Props) {
  const getEmptyCandidateSlots = (totalCount: number, selectedCandidateLength: number): string[] => {
    return Array.from(Array(totalCount-selectedCandidateLength).keys()).map(index => ('candidate ' + (selectedCandidateLength + index + 1)));
  }

  const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**Unable to find drag handle
   *
   * Moves an item from one list to another list.
   */
  type MoveResultKey = "candidatesDropId" | "chosenCandidatesDropId"
  type MoveResult = {
    // TODO: Fix type errors when this is marked as not optional
    [key in MoveResultKey]?: string[]
  }

  function move(
     source: string[],
     destination: string[],
     sourceString: MoveResultKey,
     destString: MoveResultKey,
     droppableSource: DraggableLocation,
     droppableDestination: DraggableLocation
  ): MoveResult {
    // assumes sourceString and destString are different

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result : MoveResult = {
        [sourceString]: sourceClone,
        [destString]: destClone,
    }

    return result;
  };

  const [candidates, setCandidates] = useState<string[]>([]);
  const [chosenCandidates, setChosenCandidates] = useState<string[]>([]);

  useEffect(() => {
    setCandidates(pollCandidates);
  }, [pollCandidates]);


  const getList = (id: string) => {
    if (id === "candidatesDropId") {
      return candidates;
    } else { //if (id === "chosenCandidatesDropId") {
      return chosenCandidates;
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const reOrderedItems = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === "candidatesDropId") {
        setCandidates(reOrderedItems);
      }
      if (source.droppableId === "chosenCandidatesDropId") {
        setChosenCandidates(reOrderedItems);
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source.droppableId,
        destination.droppableId,
        source,
        destination
      );
      console.log("RESULT")
      console.log(result)

      setCandidates(result.candidatesDropId);
      setChosenCandidates(result.chosenCandidatesDropId);
    }
  };


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
          <Typography variant="h3">{pollQuestion}</Typography>
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
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {candidates.map((item, index) => (
                  <Draggable
                    key={item}
                    draggableId={item}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CandidateSelectionBox candidateName={item} />
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
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
              >
                {chosenCandidates.map((item, index) => (
                  <Draggable
                    key={item}
                    draggableId={item}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CandidateSelectionBox candidateName={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {/*TODO: Don't account for selected, and have the divs appear below the candidates*/} 
                {getEmptyCandidateSlots(3, chosenCandidates.length).map((candidateName: string) => (
                  <CandidateChoiceBox key={candidateName}>
                    {candidateName}
                  </CandidateChoiceBox>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default ViewPoll;
