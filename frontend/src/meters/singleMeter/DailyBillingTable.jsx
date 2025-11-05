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

const DailyBillingTable = ({ data = [] }) => {
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
    const keys = [...new Set(data.flatMap((row) => Object.keys(row)))];

    return keys.map((key) => ({
      field: key,
      headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => params.row?.[key] ?? "0",
    }));
  };

  const columns = data.length ? generateColumns(data) : [];

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
          color: colors.primary[100],
      }}
    >
      {/* <Typography variant="h3" fontWeight="bold" className="mb-3">
        Daily Billing Details
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
          Daily Billing Data
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
              // getRowId={(row) => row.id || row.meterNo || `${row.instantDate}-${Math.random()}`}
              // getRowId={(row) => row.billingDate}
              getRowId={(row, index) =>
                row.billingDate
                  ? `${row.billingDate}-${index ?? Math.random()}`
                  : `unknown-${index ?? Math.random()}`
              }
              autoHeight
              // rowsPerPageOptions={[10, 25, 50, 100]}
              pageSize={pageSize}
              rowsPerPageOptions={[10, 25, 50, 100]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pagination
              checkboxSelection
              componentsProps={{
                toolbar: {
                  csvOptions: { fileName: "DailyBillingData" },
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

export default DailyBillingTable;
