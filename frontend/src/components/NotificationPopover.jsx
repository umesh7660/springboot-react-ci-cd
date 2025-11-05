import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";
import baseURL from "../config";
import axios from "axios";

const NotificationPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const storedUser = JSON.parse(sessionStorage.getItem("userObject")) || {};
  const level1id = storedUser?.user?.level1Id || "";
  const token = storedUser?.token || storedUser?.accessToken || "";

  // Format date function
  const formatDate = (date) => {
    if (!(date instanceof Date)) date = new Date(date);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD format
  };

  // Fetch event logs
  const fetchEventsLogData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/singlemeterView/eventDataLog`,
        {
          params: {
            startDate: formatDate(new Date()),
            endDate: formatDate(new Date()),
            meterNo: "",
            level1id: level1id,
          },
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (Array.isArray(response.data)) {
        setNotifications(response.data);
      } else {
        setNotifications([]);
        console.error("Unexpected response format:", response.data);
      }
      setError(null);
    } catch (error) {
      setNotifications([]);
      console.error("API Error (event logs):", error);
      setError("Error fetching logs. Please try again.");
    }
  };

  useEffect(() => {
    fetchEventsLogData();
    const interval = setInterval(fetchEventsLogData, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleRemove = (index) =>
    setNotifications((prev) => prev.filter((_, i) => i !== index));

  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Badge
          badgeContent={notifications.length > 0 ? notifications.length : 0}
          color="primary"
        >
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          style: {
            maxHeight: 400,
            overflowY: "auto",
            width: "min(90vw, 300px)",
            minWidth: "250px",
          },
        }}
      >
        <div style={{ padding: "10px" }}>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <Divider />

          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <List>
              {error ? (
                <ListItem>
                  <Typography color="error">{error}</Typography>
                </ListItem>
              ) : notifications.length === 0 ? (
                <ListItem>
                  <Typography>No new notifications</Typography>
                </ListItem>
              ) : (
                notifications.map((notification, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      "&:hover": {
                        backgroundColor: colors.grey[800],
                        cursor: "pointer",
                      },
                      padding: "10px",
                    }}
                  >
                    <span>{notification?.event_desc || "No Description"}</span>
                    <IconButton
                      onClick={() => handleRemove(index)}
                      sx={{ fontSize: "18px", color: colors.grey[500] }}
                    >
                      &times;
                    </IconButton>
                  </ListItem>
                ))
              )}
            </List>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default NotificationPopover;
