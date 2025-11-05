import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  useTheme,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Avatar,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationPopover from "../components/NotificationPopover";
import LogoutButton from "../auth/handleLogout";
import LockResetIcon from "@mui/icons-material/LockReset";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Topbar = ({ toggleSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userData = JSON.parse(sessionStorage.getItem("userObject")) || {};
  const username = userData?.user?.fullName || "Guest";
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{
        background: colors.primary[400],
        color: colors.primary[100],
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Menu Icon and Logo */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
          Smart Meter
        </Typography>
      </Box>

      {/* Title */}
      <Box textAlign="center" flexGrow={1}>
        <Typography variant={isSmallScreen ? "h6" : "h4"} fontWeight="bold">
          Smart Meter Management System
        </Typography>
      </Box>

      {/* Icons */}
      <Box display="flex" alignItems="center">
        <Typography variant="body2" sx={{ mr: 2, fontWeight: "bold" }}>
          {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </Typography>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <NotificationPopover />

        <IconButton onClick={handleClick}>
          <Avatar>{username.charAt(0)}</Avatar>
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            {username}
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => navigate("/profile")}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={() => navigate("/reset-password")}> 
            <ListItemIcon>
              <LockResetIcon fontSize="small" />
            </ListItemIcon>
            Reset Password
          </MenuItem>
          <LogoutButton onClose={handleClose} />
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
