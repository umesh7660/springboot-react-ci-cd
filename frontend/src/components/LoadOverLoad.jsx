import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Dialog, IconButton, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from "@mui/material";
import baseURL from "../config";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const LoadOverloadChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loadOverload, setLoadOverload] = useState([0,0]);
  const isFetched = useRef(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const [open, setOpen] = useState(false);
  const [lableName,setLabelName]=useState("");
  const [pageSize, setPageSize] = useState(10);
 
  useEffect(() => {
    const fetchData = async () => {
      if (isFetched.current) return;
      isFetched.current = true;
      try {
        const response = await axios.get(
          `${baseURL}/counts/communicationsDetails`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (response.data && response.data[0]) {
            setLoadOverload(response.data[0]);
          } else {
            console.warn("Unexpected API response:", response.data);
            setLoadOverload([0, 0]); 
          }
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle click event on Pie chart segments
  const handleChartClick = async (event, elements) => {
    if (elements.length === 0) return;

    const clickedIndex = elements[0].index;
    const labelName = clickedIndex === 0 ? "Load" : "OverLoad";
    setLabelName(labelName);
    setOpen(true);
    // Call API based on clicked label
    const apiUrl =
      labelName === "Load"
        ? `${baseURL}/data/findCommunicationMeters`
        : `${baseURL}/data/findNonCommunicationMeters`;

    try {
      setLoading(true);
      const response = await axios.get(apiUrl, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setTableData([]);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    setLabelName("");
    setTableData([]);
  };
  const data = {
    labels: ["Load", "Overload"],
    datasets: [
      {
        data: [loadOverload[0],loadOverload[1]],
        backgroundColor: ["#007bff", "#f04949"], // Blue for Load, Yellow for Unload
        hoverBackgroundColor: ["#0056b3", "#ee1a1a"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: { display: true, font: {
        size: 14, 
        weight: "bold", 
      }, },
      legend: {
        display: true,
        position: "bottom", // Keep legend at the top
      },
    },
    //onClick: (event, elements) => handleChartClick(event, elements),
  };

  const columns = tableData.length > 0 
    ? Object.keys(tableData[0]).map(key => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      width: 150,
      align: 'center', 
      headerAlign: "center",
      renderCell: (params) => {
        if (key === "meterNo") {
            const handleClick = () => {
            sessionStorage.setItem("meterNumber", params.value );
            navigate("/singleMeter", { state: { meterNo: params.value } });
          };

          return (
            <span 
              onClick={handleClick} 
              style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {String(params.value)}
            </span>
          );
        }
        return params.value || "0";
      },}
    )) 
    : [];

    const CountDialog = ({ open, onClose, datasetLabel, tableData, loading }) => (
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <CustomDialogTitle onClose={onClose} style={{fontWeight:'bold',fontSize:'20px'}}>
          {`${datasetLabel} Details`}
        </CustomDialogTitle>
        <DialogContent>
          {loading ? ( 
            <Grid container justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
              <CircularProgress />
            </Grid>
          ) : (
            <div style={{ height: '70vh', width: '100%' }}>
              <DataGrid
                rows={tableData} 
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
              position: 'absolute',
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
    <div style={{  height: "310px" }}>
      <Pie data={data} options={options}  />
    </div>
    <CountDialog
        open={open}
        onClose={handleClose}
        datasetLabel={lableName}
        tableData={tableData}
        loading={loading}
      />
      </>
  );
};

export default LoadOverloadChart;
