import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const UserLog = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const navItems = [
    { text: 'Home', link: '/home' },
    { text: 'Upcoming', link: '/upcoming' },
    { text: 'Now Playing', link: '/now_playing' },
  ];

  return (user ?
    <>
    {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </> :
    <NavLink to={'/'} key={'login'}
      className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
    >
    </NavLink>)
}

export default UserLog
