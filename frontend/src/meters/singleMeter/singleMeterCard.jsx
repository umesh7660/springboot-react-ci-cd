import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const MeterCardData = ({ meterData = {} }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Default data
  const defaultData = {
    meterNumber: "98255343",
    consumerName: "John Doe",
    location: "New York",
    status: "Active",
    lastReading: "1250 kWh",
    lastUpdated: "2024-07-21",
    connectionType: "Residential",
    voltage: "230V",
    phase: "Single Phase",
    installationDate: "2022-05-15",
  };

  // Merge meterData with defaultData
  const mergedData = { ...defaultData, ...meterData };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className="card shadow-sm" sx={{ background: colors.primary[400], color: colors.primary[100] }}>
          <CardContent>
            <Grid container spacing={2} sx={{paddingTop:'10px'}}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <Typography fontSize="14px">
                  <strong>Meter Number:</strong> {mergedData.meterNumber}
                </Typography>
                <Typography fontSize="14px">
                  <strong>Consumer Name:</strong> {mergedData.consumerName}
                </Typography>
                <Typography fontSize="14px">
                  <strong>Location:</strong> LV Side Smart Meter DTR Hanumakonda Division Gopalpur Section
                </Typography>
                <Typography fontSize="14px">
                  <strong>Status:</strong> Active
                </Typography>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={6}>
                <Typography fontSize="14px">
                  <strong>Connection Type:</strong> {mergedData.connectionType}
                </Typography>
                <Typography fontSize="14px">
                  <strong>Voltage:</strong> {mergedData.voltage}
                </Typography>
                <Typography fontSize="14px">
                  <strong>Phase:</strong> {mergedData.phase}
                </Typography>
                <Typography fontSize="14px">
                  <strong>Installation Date:</strong> {mergedData.installationDate}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MeterCardData;
