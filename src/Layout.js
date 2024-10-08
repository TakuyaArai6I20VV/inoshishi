// src/Layout.js
import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemText, CssBaseline, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

const theme = createTheme({
  typography: {
    // fontSize: 19,
    h4: {
      fontSize: 28,
      fontWeight: 700
    },
    h6: {
      fontWeight: 1000,
    }
  }
});

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="ホーム" />
          </ListItem>
          <ListItem button component={Link} to="/login">
            <ListItemText primary="ログイン" />
          </ListItem>
          <ListItem button component={Link} to="/weightfluctuation">
            <ListItemText primary="体重変動" />
          </ListItem>
          <ListItem button component={Link} to="/mealmanage">
            <ListItemText primary="食事管理" />
          </ListItem>
          <ListItem button component={Link} to="/exercise">
            <ListItemText primary="運動入力" />
          </ListItem>
          <ListItem button component={Link} to="/setting">
            <ListItemText primary="設定画面" />
          </ListItem>
        </List>
      </Drawer>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Be your Supaman
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Layout;
