import React from "react";
import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";

const MeterCard = ({ title, metersCount, totalCount, percentage }) => {
  return (
    <Card sx={{ minHeight: 120, backgroundColor: "#1e1e2f", color: "#fff" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          Communicated: {metersCount} / {totalCount}
        </Typography>
        <Box mt={1}>
          <LinearProgress variant="determinate" value={parseFloat(percentage)} />
          <Typography variant="caption" sx={{ float: "right" }}>
            {percentage}% 
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MeterCard;
