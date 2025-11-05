import React from "react";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

const StatusCard = ({ title, icon, children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      sx={{
        background: colors.primary[400],
        color: colors.primary[200],
        height: "400px",
        p: 4,
      }}
    >
      <div className="d-flex align-items-center mb-2">
        {icon}
        <h5 className="fw-bold ms-2">{title}</h5>
      </div>
      {children}
    </Card>
  );
};

export default StatusCard;
