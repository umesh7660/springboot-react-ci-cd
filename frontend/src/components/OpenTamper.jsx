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
    
    
    const chartData = {
      labels: [
        "Power failure Occurrence",
        "Voltage unbalance Occurrence",
        "Current unbalance Occurrence",
        "LT fuse Occurrence",
        "Over voltage in any phase Occurrence",
      ],
      datasets: [
        {
          label: "Tamper Count",
          data: [10, 15, 8, 12, 9], // Replace with actual tamper counts
          backgroundColor: [
            "#FFB266", // Light Orange (Power failure Occurrence)
            "#99FF99", // Light Green (Voltage unbalance Occurrence)
            "#66CCCC", // Light Teal (Current unbalance Occurrence)
            "#85C1E9", // Light Sky Blue (LT fuse Occurrence)
            "#A2D9CE", // Light Aqua Green (Over voltage in any phase Occurrence)
          ],
        },
      ],
    };
    

  const options = {
    responsive: true,
    plugins: {
      datalabels: { display: true },
      legend: { display: true },
      title: { display: false },
    },
    scales: {
      x: { beginAtZero: true },
      y: { title: { display: true }, ticks: { display: true } },
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
