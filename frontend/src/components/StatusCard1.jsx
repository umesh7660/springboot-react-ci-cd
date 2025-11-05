import React from "react";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme"; // Your custom theme tokens

const StatusCard1 = ({ title, icon, children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      className="mx-auto" // Bootstrap: center horizontally
      sx={{
        background: colors.primary[400],
        color: colors.primary[200],
        height: "auto",
        width: { xs: "100%", md: "800px" }, // Responsive width
        p: 4,
      }}
    >
      <div className="d-flex align-items-center mb-3">
        {icon}
        <h5 className="fw-bold ms-2 mb-0">{title}</h5>
      </div>
      {children}
    </Card>
  );
};

export default StatusCard1;
