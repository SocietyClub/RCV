import type { NextComponentType } from 'next'
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: NextComponentType = props => {
  return (
    <div className={styles.sidebar}>
      {props.children}
    </div>
  )
}

export default Sidebar;
