import React, { useState, useRef, useEffect, useMemo } from "react";
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
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
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

const OpenTampers = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [eventCode, setEventCode] = useState(null);
  const [tamperData, setTamperData] = useState([]);
  const [tampersCount, setTampersCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
 const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            tamperName: `${item[0] || "N/A"} (${item[1]  || "N/A" })`,
            tamperCode: item[1] || "0",
            tamperCount: item[2] || 0,
            tamperLabel:item[0] ||"",
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
    setTamperData([]);
  };

  const fetchTemper = async (tamperCode, tamperName) => {
    if (!tamperCode) return;

    setSelectedData(tamperName);
    setEventCode(tamperCode);
    setLoading(true);

    try {
      const response = await axios.get(
        `${baseURL}/data/tamperData?eventCode=${tamperCode}`
      );
      setTamperData(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  const columns = tamperData.length > 0 
    ? Object.keys(tamperData[0]).map(key => ({
      field: key,
      headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
      width: 200,
      align: 'center', 
      headerAlign: "center",
      renderCell: (params) => {
        return params.value || "0";
      },}
    )) 
    : [];
    const colorsList = {
      "R Phase - Voltage missing Occurrence": "#FFD966", // Light Yellow
      "Y Phase - Voltage missing Occurrence": "#FF9999", // Soft Red
      "B Phase - Voltage missing Occurrence": "#99B3FF", // Soft Blue
      "Power failure Occurrence": "#FFB266", // Light Orange
      "Voltage unbalance Occurrence": "#99FF99", // Light Green
      "Current unbalance Occurrence": "#66CCCC", // Light Teal
      "LT fuse Occurrence": "#85C1E9", // Light Sky Blue
      "11 KV HG fuse Occurrence": "#D7BDE2", // Soft Purple
      "Y Phase current reverse Occurrence": "#FFDD99", // Pale Yellow
      "R Phase current reverse Occurrence": "#FF9999", // Soft Red
      "B Phase current reverse Occurrence": "#99B3FF", // Soft Blue
      "Over voltage in any phase Occurrence": "#A2D9CE", // Light Aqua Green
      "Current bypass/short Occurrence": "#FFB3E6", // Light Pink
      "Very low PF Occurrence": "#D2B4DE", // Soft Lavender
      "No.of DTR's with OverLoad Occurrence": "#F8C471", // Light Orange-Yellow
      "Earth Loading Occurrence": "#AAB7B8", // Soft Gray-Blue
    };
    
  // **Bar Chart Data (Mapped Correctly)**
  const chartData = {
    labels: tampersCount.map((item) => item.tamperName),
    datasets: [
      {
        label: "Tamper Count",
        data: tampersCount.map((item) => item.tamperCount),
        backgroundColor: tampersCount.map((item) => colorsList[item.tamperLabel]),
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      datalabels: { display: false },
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { beginAtZero: true },
      y: { title: { display: false }, ticks: { display: false } },
    },
  };

  // **Handle Click Event on Bar Chart**
  const chartRef = useRef(null);

  const handleBarClick = (event) => {
    if (!chartRef.current) return;
    const chart = chartRef.current;
    const activeElements = chart.getElementsAtEventForMode(
      event,
      "nearest",
      { intersect: true },
      false
    );

    if (activeElements.length > 0) {
      const index = activeElements[0].index;
      const tamper = tampersCount[index];
      fetchTemper(tamper.tamperCode, tamper.tamperName);
    }
  };

  return (
    <>
      <div style={{height: "300px" }}>
        <Bar
          ref={chartRef}
          data={chartData}
          options={options}
          onClick={handleBarClick}
        />
      </div>

      {/* Dialog for displaying clicked data */}
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
                // rowsPerPageOptions={[10, 25, 50, 100]}
                pageSize={pageSize}
                rowsPerPageOptions={[10, 25, 50, 100]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pagination
                checkboxSelection
                componentsProps={{
                  toolbar: {
                    csvOptions: { fileName: `${selectedData}Report` },
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
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OpenTampers;
