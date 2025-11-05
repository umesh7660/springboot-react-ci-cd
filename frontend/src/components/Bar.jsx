import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = ({sectionType}) => {
  const [daysCounts, setDaysCounts] = useState([0]);
  const isFetched = useRef(false);
  const [pageSize, setPageSize] = useState(10);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  // Fetch 7 days count once when component mounts
  useEffect(() => {
    const fetchCount = async () => {
      if (isFetched.current) return; // Prevents duplicate calls
      isFetched.current = true;
  
      try {
        const response = await axios.get(
          `${baseURL}/counts/last7DaysCountCommunicationDetails?section=${sectionType}&level1id=${level1id}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
  
        if (response.data && Array.isArray(response.data)) {
          const transformedData = response.data.map((item) => ({
            date: item[0], // First element is the date
            gprscommunicated: item[1], // Second element
            nonCommunicated: item[2], // Third element
            rfcommunicated: item[3], // Fourth element
          }));
  
          setDaysCounts(transformedData);
        } else {
          console.warn("Unexpected API response:", response.data);
          setDaysCounts([]);
        }
      } catch (error) {
        console.error("API Error:", error);
        setDaysCounts([]);
      }
    };
  
    fetchCount();
  }, [sectionType]); // Add sectionType as a dependency if it can change
  

  const data = {
    labels: daysCounts.map((day) => day.date),
    datasets: [
      {
        label: "GPRS-Communicated",
        data: daysCounts.map((day) => day.gprscommunicated),
        backgroundColor: "#58d68d",
        hoverBackgroundColor: "#00C853",
      },
      {
        label: "Non-Communicated",
        data: daysCounts.map((day) => day.nonCommunicated),
        backgroundColor: "#ec7063",
        hoverBackgroundColor: "#D32F2F",
      },
      {
        label: "RF-Communicated",
        data: daysCounts.map((day) => day.rfcommunicated),
        backgroundColor: "#66B2FF",
        hoverBackgroundColor: "#1976D2",
      },
    ],
  };

  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({
    label: "",
    datasetLabel: "",
    value: "",
  });
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (dataUrl, label) => {
    setLoading(true);
    try {
      const response = await axios.get(dataUrl, {
        params: { dayDate: label },
      });
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setTableData([]);
    } finally {
      setLoading(false);
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      tooltip: {
        mode: "nearest",
        intersect: true,
        callbacks: {
          label: function (tooltipItem) {
            let datasetLabel = tooltipItem.dataset.label || "Value";
            let value = tooltipItem.raw;

            // Format number with commas
            let formattedValue = new Intl.NumberFormat().format(value);

            return `${datasetLabel}: ${formattedValue}`;
          },
        },
        titleFont: {
          size: 16, // Increase title font size
        },
        bodyFont: {
          size: 14, // Increase body font size
        },
        footerFont: {
          size: 12, // Increase footer font size
        },
        displayColors: false,
      },
      legend: {
        display: true,
        position: "bottom", // Keep legend at the top
      },
      datalabels: {
        display: true,
        font: {
          size: 13,
          weight: "bold",
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: true,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const firstElement = elements[0];
        const datasetIndex = firstElement.datasetIndex;
        const dataIndex = firstElement.index;

        const datasetLabel = data.datasets[datasetIndex].label;
        const label = data.labels[dataIndex];
        const value = data.datasets[datasetIndex].data[dataIndex];

        setSelectedData({ label, datasetLabel, value });
        setOpen(true);
        switch (datasetLabel) {
          case "GPRS-Communicated":
            fetchData(
              `${baseURL}/data/findLast7DaysCommunicationDetails?level1id=${level1id}`,
              label
            );
            break;
          case "Non-Communicated":
            fetchData(
              `${baseURL}/data/findLast7DaysNonCommunicationDetails?section=${sectionType}&level1id=${level1id}`,
              label
            );
            break;
          case "RF-Communicated":
            fetchData(
              `${baseURL}/data/findLast7DaysInventory?level1id=${level1id}`,
              label
            );
            break;
          default:
            return;
        }
        
      }
    },
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData({ label: "", datasetLabel: "", value: "" });
    setTableData([]);
  };

  const columns =
    tableData.length > 0
      ? Object.keys(tableData[0]).map((key) => ({
          field: key,
          headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
          width: 180,
          align: "center",
          headerAlign: "center",
          renderCell: (params) => {
            if (key === "meterNo") {
              const handleClick = () => {
                sessionStorage.setItem("meterNumber", params.value);
                navigate("/singleMeter", {
                  state: {
                    meterNo: params.value,
                    selectedDate: selectedData?.label,
                  },
                });
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
    tableData,
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
              rows={tableData}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
              getRowId={(row) => row.meterNo}
              // pageSize={10}
              // rowsPerPageOptions={[10, 25, 50, 100]}
              pageSize={pageSize}
              rowsPerPageOptions={[10, 25, 50, 100]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pagination
              checkboxSelection
              componentsProps={{
                toolbar: {
                  csvOptions: { fileName: `${datasetLabel}Report` },
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
      <div style={{ height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
      <CountDialog
        open={open}
        onClose={handleClose}
        label={selectedData?.label}
        datasetLabel={selectedData?.datasetLabel}
        tableData={tableData}
        loading={loading}
      />
    </>
  );
};

export default StackedBarChart;
