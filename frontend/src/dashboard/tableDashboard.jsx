import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../theme";
import axios from "axios";
import MapWithClusters from "../components/mapChart";
import { Grid, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import baseURL from "../config";

const TabulerDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [metersData, setMetersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const navigate = useNavigate();

  const fetchMetersData = async () => {
    if (isFetched.current) return;
    isFetched.current = true;
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/data/fetchMetersData`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setMetersData(response.data || []);
    } catch (error) {
      console.error("API Error (Meter Counts):", error);
      setMetersData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetersData();
    // Uncomment for auto-refresh every 5 seconds
    // const interval = setInterval(fetchMetersData, 5000);
    // return () => clearInterval(interval);
  }, []);

  const generateColumns = (data, navigate) => {
    if (!data.length) return [];
    const keys = [...new Set(data.flatMap((row) => Object.keys(row)))];

    return keys.map((key) => ({
      field: key,
      headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
      width: 200,
      align: "center",
      renderCell: (params) =>
        key === "meterNo" ? (
          <span
            onClick={() => navigate("/singleMeter", { state: { meterNo: params.value } })}
            style={{
              textDecoration: "none",
              color: "blue",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {String(params.value)}
          </span>
        ) : (
          params.row[key] || "N/A"
        ),
    }));
  };

  const columns = generateColumns(metersData, navigate);

  return (
    <div className="container-fluid p-4" style={{ background: colors.grey[1000], color: colors.primary[100] }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Tabular Dashboard</h2>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card shadow-sm p-3" style={{ background: colors.primary[400], color: colors.primary[100] }}>
            <h5 className="card-title fw-bold">Meters Data</h5>
            <div style={{ display: "flex", flexDirection: "column", padding: "4px" }}>
              {loading ? (
                <Grid container justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
                  <CircularProgress />
                </Grid>
              ) : (
                <div style={{ height: "70vh", width: "100%" }}>
                  <DataGrid
                    rows={metersData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    getRowId={(row, index) => row.meterNo || row.id || `temp-${index}`}
                    pageSize={10}
                    checkboxSelection
                  />
                </div>
              ) }
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card shadow-sm p-3" style={{ background: colors.primary[400], color: colors.primary[100] }}>
            <h5 className="card-title fw-bold">📟 Meters Location</h5>
            <MapWithClusters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabulerDashboard;
