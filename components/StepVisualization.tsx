import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import styles from './StepVisualization.module.css';
import VoteLine from './VoteLine';

type Props = {
  step: ResultStep;
  yourEntry: ResultYourEntry;
} & typeof defaultProps;

const defaultProps = {};

const getYourEntryVoteForCurrentStep = (yourEntry: ResultYourEntry, step: ResultStep) => {
  if (!yourEntry.choices) {
    return '';
  }

  for (const choice of yourEntry.choices) {
    for (const candidate of step.candidateList) {
      if (!candidate.isEliminated && choice.candidate.name === candidate.name) {
        return candidate.name;
      }
    }
  }
};

const StepVisualization = (props: Props) => {
  const candidateMap = new Map<string, number>();
  props.step.candidateList.forEach((candidate, index) => candidateMap.set(candidate.name, index));

  const yourVoteCurrentStep = getYourEntryVoteForCurrentStep(props.yourEntry, props.step);
  const yourVoteFirstChoice = props.yourEntry?.choices?.[0]?.candidate?.name;

  return (
    <div>
      {props.step.candidateList.map(candidate => (
        <div key={candidate.name} className={styles.vote}>
          <div className={`${styles.candidateName} ${styles['candidate' + candidateMap.get(candidate.name)]}`}>
            <Typography variant="body1">{candidate.name}</Typography>
          </div>
          {candidate.votes
            .filter(() => !candidate.isEliminated)
            .map(vote => {
              if (yourVoteCurrentStep === candidate.name && yourVoteFirstChoice === vote.firstChoiceCandidate) {
                return (
                  <React.Fragment key={vote.firstChoiceCandidate}>
                    <VoteLine voteCount={1} candidateStyleProp={`${styles['candidate' + candidateMap.get(vote.firstChoiceCandidate)]} ${styles['yourVote']}`} />
                    <VoteLine voteCount={vote.voteCount - 1} candidateStyleProp={styles['candidate' + candidateMap.get(vote.firstChoiceCandidate)]} />
                  </React.Fragment>
                );
              }
              return (
                <VoteLine
                  key={vote.firstChoiceCandidate}
                  voteCount={vote.voteCount}
                  candidateStyleProp={styles['candidate' + candidateMap.get(vote.firstChoiceCandidate)]}
                />
              );
            })}
        </div>
      ))}
    </div>
  );
};

StepVisualization.defaultProps = defaultProps;

export default StepVisualization;
