import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import baseURL from "../config";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

const ScrollableBarChart = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [temperData, setTemperData] = useState([]);
  const [tampersCount, setTampersCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      if (isFetched.current) return;
      isFetched.current = true;

      try {
        const response = await axios.get(`${baseURL}/counts/tamperCounts`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        if (!response.data || !Array.isArray(response.data)) {
          console.error("Invalid API Response", response);
          return;
        }

        setTampersCount(
          response.data.map((item, index) => ({
            id: index,
            tamperCode: item[0] || "N/A",
            tamperName: item[1] || "Unknown",
            tamperCount: item[2] || 0,
          }))
        );
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTemperData([]);
  };
  const columns = useMemo(
    () =>
      temperData.length > 0
        ? Object.keys(temperData[0]).map((key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            width: 150,
            align: "center",
            headerAlign: "center",
            renderCell: (params) =>
              key === "meterNo" ? (
                <span
                  onClick={() =>{
                    sessionStorage.setItem("meterNumber", params.value );
                    navigate("/singleMeter", {
                      state: { meterNo: params.value },
                    })
                  }
                  }
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
                params.value || "0"
              ),
          }))
        : [],
    []
  );

  const fetchTemper = async (data) => {
    if (!data || !data.tamperCode) return; // Ensure tamperCode is available
    const code = data.tamperCode;
   // console.log("Clicked Tamper Code:", code);

    setSelectedData(data.tamperName); // Keep tamperName for UI display
    setLoading(true);

    try {
      const response = await axios.get(
        `${baseURL}/data/tamperData?tamperCode=${code}`
      );
      setTemperData(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  const CountDialog = ({ open, onClose, tampersName, loading }) => (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <CustomDialogTitle
        onClose={onClose}
      >{`${tampersName} Details`}</CustomDialogTitle>
      <DialogContent>
        {loading ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "70vh" }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <div style={{ height: "70vh", width: "100%" }}>
            <DataGrid
              rows={temperData}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
              getRowId={(row) => row.meterNo}
              // rowsPerPageOptions={[10, 25, 50, 100]}
              pageSize={pageSize}
              rowsPerPageOptions={[10, 25, 50, 100]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pagination
              checkboxSelection
              componentsProps={{
                toolbar: {
                  csvOptions: { fileName: `${tampersName}Report` },
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  const CustomDialogTitle = ({ children, onClose, ...other }) => (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h5 className="card-title fw-bold">📊 Open Tampers</h5>
      </div>

      {/* Scrollable wrapper applied only to the chart */}
      <div style={{ width: "100%", overflowX: "auto", paddingBottom: "10px" }}>
        <div style={{ minWidth: `${tampersCount.length * 70}px` }}>
          <ResponsiveContainer height={300}>
            <BarChart data={tampersCount}>
              <XAxis dataKey="tamperName" tick={false} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                cursor={{ fill: "#f0f0f0" }}
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const { tamperName, tamperCount } = payload[0].payload;
                    return (
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.8)", // Dark background like Chart.js
                          padding: "12px",
                          borderRadius: "8px",
                          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#fff", // White text
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <div
                          style={{
                            marginBottom: "5px",
                            fontSize: "14px",
                            fontWeight: "bold",
                          }}
                        >
                          {tamperName}
                        </div>
                        <div>Count: {tamperCount}</div>
                      </div>
                    );
                  }
                  return null;
                }}
              />

              <Bar
                dataKey="tamperCount"
                fill="#76B5F2"
                onClick={(data) => fetchTemper(data)}
                cursor="pointer"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dialog for displaying clicked data */}
      <CountDialog
        open={open}
        onClose={handleClose}
        tampersName={selectedData}
        loading={loading}
      />
    </>
  );
};

export default ScrollableBarChart;
