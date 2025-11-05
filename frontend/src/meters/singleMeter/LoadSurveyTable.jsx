import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  CircularProgress,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";

const LoadSurveyTable = ({ data = [] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
      { field: 'meterNo', headerName: 'Meter No'.toUpperCase(), width: 120, align: 'center', headerAlign: "center",renderCell: (params) => params.value || "0" },
          { field: 'lsDatetime', headerName: 'Date Time'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kwhImport', headerName: 'Kwh Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kwhExport', headerName: 'Kwh Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvahImport', headerName: 'Kvah Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvahExport', headerName: 'Kvah Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvarhImport', headerName: 'Kvarh Import'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvarhExport', headerName: 'Kvarh Export'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kwImport', headerName: 'Kw Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kwExport', headerName: 'Kw Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvaImport', headerName: 'Kva Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvaExport', headerName: 'Kva Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvarImport', headerName: 'Kvar Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'kvarExport', headerName: 'Kvar Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'currentRPhase', headerName: 'Current-R'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'currentYPhase', headerName: 'Current-Y'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'currentBPhase', headerName: 'Current-B'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'neutralCurrent', headerName: 'Neutral Current'.toUpperCase(), width: 180, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'minCurrent', headerName: 'Min Current'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxCurrent', headerName: 'Max Current'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'avgCurrent', headerName: 'Avg Current'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'voltageRPhase', headerName: 'Voltage-R'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'voltageYPhase', headerName: 'Voltage-Y'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'voltageBPhase', headerName: 'Voltage-B'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'minVoltage', headerName: 'Min Voltage'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'maxVoltage', headerName: 'Max Voltage'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'avgVoltage', headerName: 'Avg Voltage'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'pfRPhase', headerName: 'PF-R'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'pfYPhase', headerName: 'PF-Y'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'pfBPhase', headerName: 'PF-B'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'avgPf', headerName: 'Avg-Pf'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'avgFrequency', headerName: 'Avg-Freq'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
          { field: 'insertedDate', headerName: 'Inserted Date'.toUpperCase(), width: 170, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      ];
  }
  const columns = data.length ? generateColumns(data) : [];

  return (
    <Box
    sx={{
      backgroundColor: colors.primary[400],
        color: colors.primary[100],
    }}
  >
    {/* <Typography variant="h3" fontWeight="bold" className="mb-3">
    Load Survey Details
    </Typography> */}
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: colors.primary[400],
        color: colors.primary[100],
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Load Survey Data
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
            components={{ Toolbar: GridToolbar }}
            getRowId={(row, index) =>
              row.billingDate
                ? `${row.billingDate}-${index ?? Math.random()}`
                : `unknown-${index ?? Math.random()}`
            }
            autoHeight
            pageSize={pageSize}
            rowsPerPageOptions={[10, 25, 50, 100]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            checkboxSelection
            componentsProps={{
              toolbar: {
                csvOptions: { fileName: "LoadSurveyData" },
                disableExportMenu: ["pdf"],
              },
            }}
            density="compact" 
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

export default LoadSurveyTable;
