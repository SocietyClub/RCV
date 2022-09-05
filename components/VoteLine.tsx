import React from 'react';
import { getBgColorStyleObject } from '../utils/utils';
import styles from './VoteLine.module.css';

type Props = {
  voteCount: number;
  candidateStyleProp: string;
  candidateStyleNumber: number | undefined;
} & typeof defaultProps;

const defaultProps = {};

const VoteLine = (props: Props) => {
  return (
    <>
      {Array(props.voteCount)
        .fill(0)
        .map((_, i) => (
          <div key={i} style={getBgColorStyleObject(props.candidateStyleNumber || 0)} className={`${props.candidateStyleProp} ${styles.voteLine}`} />
        ))}
    </>
  );
};

VoteLine.defaultProps = defaultProps;

export default VoteLine;
