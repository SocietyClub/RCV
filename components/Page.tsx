import React from 'react';
import styles from './Page.module.css';
import Sidebar from './Sidebar';

type Props = {
	children: React.ReactNode,
	sidebar?: React.ReactNode
} & typeof defaultProps;

const defaultProps = {
  sidebar: <Sidebar />,
}

const Page = (props: Props) => {
  return (
    <div className={styles.page}>
      <div className={styles.contentContainer}>
        <div className={styles.mainContent}>
          {props.children}
        </div>
        {props.sidebar}
      </div>
    </div>
  )
}

Page.defaultProps = defaultProps;

export default Page;
