import React from 'react';
import styles from './VoteLine.module.css';

type Props = {
  voteCount: number;
  candidateStyleProp: string;
} & typeof defaultProps;

const defaultProps = {};

const VoteLine = (props: Props) => {
  return (
    <>
      {Array(props.voteCount)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={`${props.candidateStyleProp} ${styles.voteLine}`} />
        ))}
    </>
  );
};

VoteLine.defaultProps = defaultProps;

export default VoteLine;
