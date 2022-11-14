import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className="title">
          <Link href="/" aria-label="home">
            RCV
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
