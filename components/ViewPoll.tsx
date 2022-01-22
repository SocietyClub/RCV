import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import React from "react";
import {
    DragDropContext,
    Draggable,
    DraggableLocation,
    Droppable,
    DroppableId,
    DropResult,
} from "react-beautiful-dnd";
import CandidateSelectionBox from "./CandidateSelectionBox";
import CandidateChoiceBox from "./CandidateChoiceBox";
import { useState } from "react";
import { useEffect } from "react";

// droppableid to set state, state etc.

type Props = {
    pollQuestion: string;
    pollCandidates: string[];
};

function ViewPoll({ pollQuestion, pollCandidates }: Props) {
    const getEmptyCandidateSlots = (
        totalCount: number,
        selectedCandidateLength: number
    ): string[] => {
        return Array.from(
            Array(totalCount - selectedCandidateLength).keys()
        ).map((index) => "candidate " + (selectedCandidateLength + index + 1));
    };

    type DropId = "candidatesDropId" | "chosenCandidatesDropId";

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

    function move(
        source: string[],
        destination: string[],
        sourceIndex: number,
        destIndex: number
    ): string[][] {
        const sourceClone = [...source];
        const destClone = [...destination];
        const [removed] = sourceClone.splice(sourceIndex, 1);
        destClone.splice(destIndex, 0, removed);
        return [sourceClone, destClone];
    }

    const [candidates, setCandidates] = useState<string[]>([]);
    const [chosenCandidates, setChosenCandidates] = useState<string[]>([]);

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

    useEffect(() => {
        setCandidates(pollCandidates);
    }, [pollCandidates]);

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
                                                <CandidateSelectionBox
                                                    candidateName={item}
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
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
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
                                                <CandidateSelectionBox
                                                    candidateName={item}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}

                                {/*TODO: Don't account for selected, and have the divs appear below the candidates*/}
                                {/*{getEmptyCandidateSlots(3, chosenCandidates.length).map((candidateName: string) => (
                  <CandidateChoiceBox key={candidateName}>
                    {candidateName}
                  </CandidateChoiceBox>
                ))*/}
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
