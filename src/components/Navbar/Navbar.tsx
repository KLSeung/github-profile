import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { ReactComponent as GitHubIcon } from '../../assets/github-logo.svg';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#2d333b' }}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <GitHubIcon />
      </IconButton>
      <Stack className='navbar-items' direction='row' sx={{ flexGrow: 1}}>
        <Button color="inherit" sx={{ mr: 1 }}>Pull Requests</Button>
        <Button color="inherit" sx={{ mr: 1 }}>Issues</Button>
        <Button color="inherit" sx={{ mr: 1 }}>Codespaces</Button>
        <Button color="inherit" sx={{ mr: 1 }}>Marketplace</Button>
        <Button color="inherit" sx={{ mr: 1 }}>Explore</Button>
      </Stack>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  )
}