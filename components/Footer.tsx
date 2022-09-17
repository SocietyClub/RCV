import React from 'react';

import { AppBar, Typography } from '@mui/material';

import styles from './Footer.module.css';

const Footer = () => (

      <footer className={styles.footer}>
        <AppBar position="static" color="secondary">
            <div className={styles.footerContent}>Copyright 2022 Society Club</div>
        </AppBar>
      </footer>
);

export default Footer;
