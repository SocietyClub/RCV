import React, { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import CandidateSelectionBox from './CandidateSelectionBox';
import CandidateChoiceBox from './CandidateChoiceBox';
import { CreateVote } from './api';
import { useFetch } from '../hooks/useFetch';
import Router from 'next/router';
import styles from './VotePoll.module.css';

type Props = {
  pollData: Poll;
  setPageAlert: Dispatch<SetStateAction<AlertShape | null>>;
};

function VotePoll({ pollData, setPageAlert }: Props) {
  const [_, createVote] = useFetch(CreateVote);
  const [candidates, setCandidates] = useState<string[]>([]);
  const [chosenCandidates, setChosenCandidates] = useState<string[]>([]);

  useEffect(() => {
    if (pollData.candidateList) {
      setCandidates(pollData.candidateList.map((candidate) => candidate.name));
    }
  }, [pollData.candidateList]);

  type DropId = 'candidatesDropId' | 'chosenCandidatesDropId';

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
      const reOrderedItems = reorder(dropIdMap[sourceId].list, source.index, destination.index);

      dropIdMap[sourceId].setList(reOrderedItems);
    } else {
      // Item is being moved from one list to another
      if (!isValidMove(destId)) {
        return;
      }
      const [newSourceList, newDestList] = move(dropIdMap[sourceId].list, dropIdMap[destId].list, source.index, destination.index);

      dropIdMap[sourceId].setList(newSourceList);
      dropIdMap[destId].setList(newDestList);
    }
  };

  const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const isValidMove = (destId: DropId): boolean => {
    const destList = dropIdMap[destId].list;
    const userChoosesMoreThanAllowedNumberOfCandidates = destId == 'chosenCandidatesDropId' && destList.length >= pollData.maxNumRankedChoiceCount;
    if (userChoosesMoreThanAllowedNumberOfCandidates) {
      setPageAlert({
        severity: 'warning',
        message: `You can only choose a max of ${pollData.maxNumRankedChoiceCount} candidates!`,
      });
    }
    const isValid = !userChoosesMoreThanAllowedNumberOfCandidates;
    return isValid;
  };

  const move = (source: string[], destination: string[], sourceIndex: number, destIndex: number): string[][] => {
    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(sourceIndex, 1);
    destClone.splice(destIndex, 0, removed);
    return [sourceClone, destClone];
  };

  const boxWidth = '22.5rem';

  const handleSubmitVote = () => {
    if (chosenCandidates.length == 0) {
      setPageAlert({
        severity: 'error',
        message: `You must choose at least 1 candidate!`,
      });
      return;
    }
    const createVoteRequest: CreateVoteRequest = {
      choices: chosenCandidates.map((candidateName, index) => ({
        choicePosition: index + 1, // positions are 1-indexed so add 1
        candidate: {
          name: candidateName,
        },
      })),
    };

    createVote(pollData.pollId, createVoteRequest)
      .then(() => {
        setPageAlert({
          severity: 'success',
          message: 'Your vote was submitted!',
        });
        Router.push(`/poll/${pollData.pollId}/results`);
      })
      .catch(() => {
        setPageAlert({
          severity: 'error',
          message: 'Failed to submit your vote.',
        });
      });
  };

  const handleSkipVote = () => {
    Router.push(`/poll/${pollData.pollId}/results`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2">{pollData.pollName}</Typography>
          {/* <Typography variant="subtitle2">{pollData.pollDesc}</Typography> */}
          <div style={{ height: '2rem' }} />
          <Typography variant="h5">Drag your selections to the ranked spots on the right.</Typography>
          <div style={{ height: '4rem' }} />
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <CandidateSelectionBox candidateName={item} width={boxWidth} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div style={{ width: '2rem' }}></div>
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
                      position: 'absolute',
                      zIndex: -1,
                    }}
                  >
                    {Array.from(Array(pollData.maxNumRankedChoiceCount).keys()).map((num) => (
                      <CandidateChoiceBox key={num} width={boxWidth}>
                        Candidate {num + 1}
                      </CandidateChoiceBox>
                    ))}
                  </div>
                  {chosenCandidates.map((item, index) => (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided, _) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <CandidateSelectionBox candidateName={item} width={boxWidth} />
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
      <Button variant="contained" color="primary" onClick={handleSubmitVote}>
        Submit Your Vote!
      </Button>
      <Button className={styles.skipVoteButton} variant="text" color="primary" onClick={handleSkipVote}>
        Skip to Results
      </Button>
    </div>
  );
}

export default VotePoll;
