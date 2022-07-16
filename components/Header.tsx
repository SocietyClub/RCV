import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          RCV
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
