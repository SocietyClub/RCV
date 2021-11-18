import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CandidateSelectionBox from "./CandidateSelectionBox";
import CandidateChoiceBox from "./CandidateChoiceBox";
import { useState } from "react";

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type Props = {
  pollQuestion: string;
  pollCandidates: string[];
};

function ViewPoll({ pollQuestion, pollCandidates }: Props) {
  // fake data generator
  const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k + offset}`,
      content: `item ${k + offset}`,
    }));

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**Unable to find drag handle
   *
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });

  const [items, setItems] = useState(getItems(10));
  const [selected, setSelected] = useState(getItems(5));

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  // const id2List = {
  //   droppable: "items",
  //   droppable2: "selected",
  // };

  const getList = (id) => {
    if (id === "droppable") {
      return items;
    }
    if (id === "droppable2") {
      return selected;
    }
  };

  const onDragEnd = (result) => {
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

      if (source.droppableID === "droppable") {
        setItems(reOrderedItems);
      }
      if (source.droppableId === "droppable2") {
        setSelected(reOrderedItems);
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setItems(result.droppable);
      setSelected(result.droppable);
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

      {/* <DragDropContext>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Droppable droppableId="droppableOne">
              {(provided: any, snapshot: any) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {pollCandidates.map((candidate) => (
                    <div key={candidate}>
                      <Draggable draggableId={candidate}>
                        {(provided: any, snapshot: any) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <CandidateSelectionBox candidateName={candidate} />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
          <div>
            <Droppable droppableId="droppableTwo">
              {(provided: any, snapshot: any) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <CandidateChoiceBox>First Choice</CandidateChoiceBox>
                  <CandidateChoiceBox>Second Choice</CandidateChoiceBox>
                  <CandidateChoiceBox>Third Choice</CandidateChoiceBox>
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext> */}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable
                  key={"item" + item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {selected.map((item, index) => (
                <Draggable
                  key={"selected" + item.id}
                  draggableId={"selected-" + item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ViewPoll;
