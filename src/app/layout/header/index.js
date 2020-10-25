import React from 'react';
import './styles.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar position="static" title="React App">
    <Toolbar>
      <Typography variant="h6">
        React App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;