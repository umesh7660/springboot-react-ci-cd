import React, { useState, useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import baseURL from "../config";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

const EventsChart = ({ sectionType }) => {
  const labels = [
    "HG Fuse Blow",
    "LT Fuse Blow",
    "Current Unbalance",
    "Over Load",
    "Power Failure",
  ];
  const codes = [9, 57, 63, 67, 101];
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [tamperData, setTamperData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const [pageSize, setPageSize] = useState(10);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dataCounts, setDataCounts] = useState([0, 0, 0, 0, 0]);
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
  const token = storedUser.token || storedUser.accessToken;

  useEffect(() => {
    const fetchData = async () => {
      if (isFetched.current) return;
      isFetched.current = true;

      try {
        const response = await axios.get(`${baseURL}/counts/tamperCounts`, {
          params: { section: sectionType, level1id: level1id },
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const data = response.data;

        if (!Array.isArray(data)) {
          console.error("Invalid API Response", response);
          return;
        }

        // Assuming item[1] is the event count
        setDataCounts(data.map(item => item?.[1] ?? 0));
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [sectionType]);

  const handleClose = () => {
    setOpen(false);
    setTamperData([]);
  };

  const fetchTamper = async (tamperCode, tamperName) => {
    if (!tamperCode) return;

    setSelectedData(tamperName);
    setLoading(true);

    try {
      const response = await axios.get(
        `${baseURL}/data/tamperData?eventCode=${tamperCode}&section=${sectionType}&level1id=${level1id}`
      );
      setTamperData(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  // Check if all counts are zero
  const allZero = dataCounts.every((count) => count === 0);

  // Filter out zero counts and corresponding labels
  const filteredLabels = labels.filter((label, index) => dataCounts[index] > 0);
  const filteredDataCounts = dataCounts.filter((count) => count > 0);

  // Update data object for the chart
 


  const data = {
    labels: allZero ? ["No Data"] : labels, // Labels for the chart
    datasets: [
      {
        label: "Event Count",
        data: allZero ? [1] : dataCounts, // Counts for each label
        backgroundColor: allZero
          ? ["#e0e0e0"] // Gray slice for empty chart
          : ["#36a2eb", "#ffce56", "#52eb0b", "#9966ff", "#ff6384"], // Colors for each slice
        hoverOffset: 8,
      },
    ],
  };
  

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: filteredDataCounts.length > 0, // Show only if data is not zero
        font: { size: 14, weight: "bold" },
      },
      legend: {
        display: filteredDataCounts.length > 0,
      },
      tooltip: {
        enabled: filteredDataCounts.length > 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14, weight: "bold", family: "Arial" },
        bodyFont: { size: 14, family: "Arial" },
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (tooltipItem) =>
            `Count: ${tooltipItem.raw}`, // Show count in tooltip
          title: (tooltipItem) => `${tooltipItem[0].label}`,
        },
      },
    },
    onClick: (event, elements) => {
      if (filteredDataCounts.length === 0 || elements.length === 0) return;
    
      const index = elements[0].index;
    
      // Log the clicked event's index and label to the console
      console.log("Clicked element index:", index);
      console.log("Clicked element label:", labels[index]);
      console.log("Clicked element code:", codes[index]);
    
      fetchTamper(codes[index], `${labels[index]} (${codes[index]})`);
    },
    
  };

  const columns =
    tamperData.length > 0
      ? Object.keys(tamperData[0]).map((key) => ({
          field: key,
          headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
          width: 200,
          align: "center",
          headerAlign: "center",
          renderCell: (params) => params.value || "0",
        }))
      : [];

  return (
    <>
      <div style={{ width: "100%", height: "300px" }}>
        <Doughnut data={data} options={options} />
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          {selectedData} Details
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
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
                rows={tamperData}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                getRowId={(row) => row.occDatetime}
                pageSize={pageSize}
                rowsPerPageOptions={[10, 25, 50, 100]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pagination
                checkboxSelection
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EventsChart;
