import React, { useRef, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
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
import axios from "axios";
import { CircularProgress } from "@mui/material";
import baseURL from "../config";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartComponent = () => {
  const chartRef = useRef();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // State management
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [connetionData, setConnetionData] = useState([]);
  const [labelName, setLabelName] = useState(null);
  const [connectionCount, setConnectionCount] = useState([0, 0]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
 
  // Fetch communication data once when component mounts
  useEffect(() => {
    const fetchData = async () => {
      if (isFetched.current) return; // Prevents duplicate calls
      isFetched.current = true;
      try {
        const response = await axios.get(
          `${baseURL}/counts/connectionDetails`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (response.data && response.data[0]) {
          setConnectionCount(response.data[0]);
        } else {
          console.warn("Unexpected API response:", response.data);
          setConnectionCount([43, 57]);
        }
      } catch (error) {
        setConnectionCount([43, 57]);
        console.error("API Error:", error);
      }
    };

    fetchData();
    //  const interval = setInterval(fetchData, 5000); // Auto-update every 5 seconds

    //  return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const data = {
    labels: ["Connected", "Disconnected"],
    datasets: [
      {
        data: connectionCount,
        backgroundColor: ["#2e7d35", "#c62838"],
        hoverBackgroundColor: ["#00e676", "#ff1744"],
      },
    ],
  };
  // Handle chart click event
  const onClick = async (event, elements) => {
    if (elements.length === 0) return;
    const chart = chartRef.current;
    const index = elements[0].index;
    const label = chart.data.labels[index];
    setLabelName(label);
    let apiUrl = "";
    switch (label) {
      case "Connected":
        apiUrl = `${baseURL}/data/findConnectedMeters`;
        break;
      case "Disconnected":
        apiUrl = `${baseURL}/data/findDisconnectedMeters`;
        break;
      default:
        return;
    }
    setLoading(true);
    try {
      setIsDialogOpen(true);
      const response = await axios.get(apiUrl);
      setConnetionData(response.data || []);
      //console.log(response.data);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: { display: false },
      legend: { position: "top" },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14, weight: "bold", family: "Arial" },
        bodyFont: { size: 14, family: "Arial" },
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return ` Count: ${value}`;
          },
          title: function (tooltipItem) {
            return `${tooltipItem[0].label}`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    onClick,
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setConnetionData([]);
    setLabelName(null);
  };
  const columns =
    connetionData.length > 0
      ? Object.keys(connetionData[0]).map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: 150,
          align: "center",
          renderCell: (params) => {
            if (key === "meterNo") {
              const handleClick = () => {
                sessionStorage.setItem("meterNumber", params.value );
                navigate("/singleMeter", { state: { meterNo: params.value } });
              };

              return (
                <span
                  onClick={handleClick}
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {String(params.value)}
                </span>
              );
            }
            return params.value || "0";
          },
        }))
      : [];

  const CountDialog = ({
    open,
    onClose,
    label,
    datasetLabel,
    connetionData,
    loading,
  }) => (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <CustomDialogTitle
        onClose={onClose}
        style={{ fontWeight: "bold", fontSize: "20px" }}
      >
        {`${datasetLabel} Details for ${label}`}
      </CustomDialogTitle>
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
              rows={connetionData}
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
                  csvOptions: { fileName: `${datasetLabel}Report`}, 
                },}}
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
      <div
        className="flex justify-center"
        style={{ width: "100%", height: "310px" }}
      >
        <Pie data={data} options={options} height={300} />
      </div>
      <CountDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        labelName={labelName}
        connetionData={connetionData}
        columns={columns}
        loading={loading}
      />
    </>
  );
};

export default PieChartComponent;
