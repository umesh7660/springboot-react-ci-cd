import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, CircularProgress, Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";

const InstantDataTable = ({ data = [] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Ensure this is managed if data fetching is async
  const [pageSize, setPageSize] = useState(10);
  if (!data.length) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
        No data available
      </p>
    );
  }

  const generateColumns = (data) => {
    if (!data || data.length === 0) return [];
    return [
      { field: 'meterNo', headerName: 'Meter Number', width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'instantDate', headerName: 'Instant Date', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'voltageRphase', headerName: 'Voltage R-Phase', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'voltageYphase', headerName: 'Voltage Y-Phase', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'voltageBphase', headerName: 'Voltage B-Phase', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'currentRphase', headerName: 'Current R-Phase', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'currentYphase', headerName: 'Current Y-Phase', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'currentBphase', headerName: 'Current B-Phase', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'neutralCurrent', headerName: 'NeutralCurrent', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          
          { field: 'rphasePf', headerName: 'R-Phase PF', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'yphasePf', headerName: 'Y-Phase PF', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'bphasePf', headerName: 'B-Phase PF', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'averagePf', headerName: 'Average Pf', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'activePower', headerName: 'Active Power(KW)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'apparentPower', headerName: 'Apparent Power(KVA)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'reactivePower', headerName: 'Reactive Power(KVAr)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'activeEnergyimp', headerName: 'Active Energy IMP(KWH)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'activeEnergyexp', headerName: 'Active Energy EXP(KWH)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'apparentEnergyimp', headerName: 'Apparent Energy IMP(KVAH)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'apparentEnergyexp', headerName: 'Apparent Energy EXP(KVAH)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'reactiveEnergylagimp', headerName: 'Reactive Energy Lag IMP(KVArh)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'reactiveEnergylagexp', headerName: 'Reactive Energy Lag EXP(KVArh)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'reactiveEnergyleadimp', headerName: 'Reactive Energy Lead IMP(KVArh)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'reactiveEnergyleadexp', headerName: 'Reactive Energy Lead EXP(KVArh)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'frequency', headerName: 'Frequency(Hz)', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKwImport', headerName: 'Max Demand Kw Import', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKwExport', headerName: 'Max Demand Kw Export', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKwImportDate', headerName: 'Max Demand Kw Import Date', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKwExportDate', headerName: 'Max Demand Kw Export Date', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKvaImport', headerName: 'Max Demand Kva Import', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKvaExport', headerName: 'Max Demand Kva Export', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKvaImportDate', headerName: 'Max Demand Kva Import Date', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxDemandKvaExportDate', headerName: 'Max Demand Kva Export Date', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'insertedDate', headerName: 'Inserted Date', width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
        
      ];
  }
  const columnGroupingModel = [
    {
      groupId: "Voltage",
      children: [
        { field: "voltageRphase" },
        { field: "voltageYphase" },
        { field: "voltageBphase" },
      ],
    },
    {
      groupId: "Current",
      children: [
        { field: "currentRphase" },
        { field: "currentYphase" },
        { field: "currentBphase" },
      ],
    },
    {
      groupId: "Power",
      children: [
        { field: "activePower" },
        { field: "apparentPower" },
        { field: "reactivePower" },
      ],
    },
  ];
  const columns = data.length ? generateColumns(data) : [];

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        color: colors.primary[100],
        p: 4,
      }}
    >
      <Typography variant="h3" fontWeight="bold" className="mb-3">
        Instant Data Details
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: colors.primary[400],
          color: colors.primary[100],
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Instant Data
        </Typography>

        {loading ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: 300 }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <div style={{ width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              columnGroupingModel={columnGroupingModel}
              components={{ Toolbar: GridToolbar }}
              getRowId={(row, index) =>
                row.instantDate
                  ? `${row.instantDate}-${index ?? Math.random()}`
                  : `unknown-${index ?? Math.random()}`
              }
              autoHeight
               density="compact" 
              // rowsPerPageOptions={[10, 25, 50, 100]}
              pageSize={pageSize}
              rowsPerPageOptions={[10, 25, 50, 100]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pagination
              checkboxSelection
              componentsProps={{
                toolbar: {
                  csvOptions: { fileName: "InstantData" },
                },
              }}
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.grey[1200], // Light gray background (optional)
                  color: colors.primary[1000], // Text color
                  fontSize: "14px", // Header font size
                  fontWeight: "bold", // Make headers bold
                  textAlign: "center", // Center text in headers
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold", // Ensure the text is bold
                },
              }}
            />
          </div>
        )}
      </Paper>
    </Box>
  );
};

export default InstantDataTable;
