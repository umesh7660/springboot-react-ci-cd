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
  useMediaQuery
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockResetIcon from "@mui/icons-material/LockReset";
import NotificationPopover from "../components/NotificationPopover";
import LogoutButton from "../auth/handleLogout";
import { MenuOutlined as MenuOutlinedIcon } from "@mui/icons-material";

const Topbar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userData = JSON.parse(sessionStorage.getItem("userObject")) || {};
  const username = userData?.user?.fullName || "Guest";
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  // Real-time Date & Time
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

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      height="64px"
      sx={{
        background: colors.primary[400],
        color: colors.primary[100],
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderBottom: `2px solid ${colors.primary[600]}`, // Bottom border for emphasis
      }}
    >
      {/* Left - Menu and Logo */}
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          color="inherit"
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.1)" }, // Hover effect for icons
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <img src="/images/logo.png" alt="logo" height="40" />
      </Box>

      {/* Center - Title */}
      <Box sx={{ textAlign: "center", flexGrow: 1 }}>
        <Typography variant={isSmallScreen ? "h5" : "h3"} fontWeight="bold">
          SMART METER HEAD END SYSTEM
        </Typography>
      </Box>

      {/* Right - User Info and Notifications */}
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        {/* Real-time Date & Time */}
        <Typography
          variant="body2"
          sx={{ mr: 2, fontWeight: "bold", fontSize: "18px" }}
        >
          {formatDate(currentTime)} {currentTime.toLocaleTimeString()}
        </Typography>

        {/* Theme Toggle Button */}
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Notification Popover */}
        <NotificationPopover />

        {/* User Profile Button */}
        <IconButton onClick={handleClick}>
          <PersonOutlinedIcon />
        </IconButton>

        {/* User Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.mode === "dark" ? "#222" : "#fff",
              borderRadius: "10px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              minWidth: "220px",
              padding: "10px 0",
            },
          }}
        >
          {/* User Info */}
          <Box display="flex" alignItems="center" px={2} py={1.5}>
            <Avatar
              sx={{ width: 32, height: 32, mr: 1.5, backgroundColor: "#007bff" }}
            >
              <PersonOutlinedIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Typography variant="body1" fontWeight="bold" color={colors.primary[100]}>
              {username}
            </Typography>
          </Box>
          <Divider />
          {/* Menu Items */}
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/profile");
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/reset-password", {
                state: {
                  userLoginid: userData?.user?.id?.userLoginid,
                  dashboard: true,
                },
              });
            }}
          >
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
