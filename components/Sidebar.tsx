import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = (props: React.PropsWithChildren) => {
  return <div className={styles.sidebar}>{props.children}</div>;
};

export default Sidebar;
