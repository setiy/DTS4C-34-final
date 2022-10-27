import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

import UserLog from './UserLog';

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/home">
              <img src="./image3.svg" alt="logo" height={60}/>
            </Link>
          </Typography>
          <Box sx={{ display: 'block' }}>
            <UserLog />
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar;
