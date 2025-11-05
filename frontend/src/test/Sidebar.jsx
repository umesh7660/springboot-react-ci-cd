import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/ExitToApp";

const drawerWidth = 240; // Sidebar width
const topbarHeight = 64; // Height of the topbar

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true); // Sidebar open by default

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline /> {/* Ensures proper layout structure */}

      {/* Topbar (Static) */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: "#3f51b5", 
          color: "white", 
          zIndex: 1201,
          height: `${topbarHeight}px`, 
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Smart Meter Management System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Opens Below the Topbar) */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            top: `${topbarHeight}px`, // Ensures it starts below the topbar
            height: `calc(100% - ${topbarHeight}px)`, // Ensures it doesn't overlap the topbar
            transition: "width 0.3s ease-in-out",
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area (Adjusted to Avoid Overlap) */}
      <Box 
  component="main"
  sx={{ 
    flexGrow: 1,
    padding: "20px",
    marginTop: `${topbarHeight}px`, 
    marginLeft: open ? `${drawerWidth}px` : "0px", // Corrected Syntax
    transition: "margin 0.3s ease-in-out",
  }}
>

        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
