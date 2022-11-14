import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className="title">
          <a href="/" aria-label='home'>RCV</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
