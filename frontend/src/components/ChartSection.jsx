import React from "react";
import { Grid } from "@mui/material";

const ChartSection = ({ children }) => (
  <Grid container spacing={2} className="mt-1">
    {React.Children.map(children, (child, idx) => (
      <Grid item xs={12} md={4} key={idx}>
        {child}
      </Grid>
    ))}
  </Grid>
);

export default ChartSection;
