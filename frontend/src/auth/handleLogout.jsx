import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem, ListItemIcon } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear Local Storage & Session Storage
    localStorage.clear();
    sessionStorage.clear();

    // ✅ Remove Cookies
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // ✅ Navigate to Home Page
    navigate("/");

    // ✅ Prevent Going Back to Previous Page
    setTimeout(() => {
      window.history.pushState(null, "", "/");
    }, 100);

    // ✅ Disable Back/Forward Button
    window.onpopstate = function () {
      navigate("/");
    };

    // ✅ Close Menu (if used in a dropdown)
    if (onClose) {
      onClose();
    }
  };

  return (
    <MenuItem onClick={handleLogout} sx={{ py: 1, px: 2 }}>
      <ListItemIcon>
        <LogoutIcon fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  );
};

export default LogoutButton;
