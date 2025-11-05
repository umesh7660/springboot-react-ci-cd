import React, { useRef, useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,Grid
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

const DoughnutChart = ({ sectionType }) => {
  const chartRef = useRef();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // State management
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState([]);
  const [labelName, setLabelName] = useState(null);
  const [communicationData, setCommunicationData] = useState([0, 0, 0]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate(); 

  
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  // Fetch communication data once when component mounts
  useEffect(() => {
    if (!sectionType) return;
  
    const fetchData = async () => {
      try {
        console.log("sectionType:", sectionType);
  
        const response = await axios.get(
          `${baseURL}/counts/communicationsDetails`,
          {
            params: { 
              section: sectionType,
              level1id: level1id,
             },
             headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,  // <-- Add this
            },
            withCredentials: true,
          }
        );
  
        
        if (response.data && response.data[0]) {
          setCommunicationData(response.data[0]);
        } else {
          setCommunicationData([0, 0, 0]);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };
  
    fetchData();
  }, [sectionType]);
  
  // Chart data
  const data = {
    labels: ["GPRS-Communicated", "Non-Communicated", "RF-Communicated"],
    datasets: [
      {
        data: communicationData,
        backgroundColor: ["#8ceb34", "#ec7063", "#66B2FF"], // Light colors
        hoverBackgroundColor: ["#64DD17", "#D32F2F", "#1976D2"], // Brighter colors
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
      case "GPRS-Communicated":
        apiUrl = `${baseURL}/data/findCommunicationMeters?level1id=${level1id}`;
        break;
      case "Non-Communicated":
        apiUrl = `${baseURL}/data/findNonCommunicationMeters?section=${sectionType}&level1id=${level1id}`;
        break;
      case "RF-Communicated":
        apiUrl = `${baseURL}/data/findRFCommunicationMeters?level1id=${level1id}`;
        //apiUrl = `${baseURL}/data/findAllInventoryMeters?section=${sectionType}`;
        break;
      default:
        return;
    }
    setLoading(true);
    try {
      setIsDialogOpen(true);
      const response = await axios.get(apiUrl);
      setDialogData(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally {
      setLoading(false);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: { display: true , font: {
        size: 14, 
        weight: "bold", 
      },}, // Hide labels inside chart
      legend: {
        display: true,
        position: "bottom", // Keep legend at the top
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background
        titleFont: { size: 14, weight: "bold", family: "Arial" },
        bodyFont: { size: 14, family: "Arial" },
        bodyColor: "#fff", // White text
        padding: 12,
        cornerRadius: 8,
        displayColors: false, // Hide the color box
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw; // Get the data value
            return ` Count: ${value}`;
          },
          title: function (tooltipItem) {
            return `${tooltipItem[0].label}`; // Show label as title
          },
        },
      },
    },
    onClick, 
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setDialogData([]);
    setLabelName(null);
  };

  const CountDialog = ({ open, onClose, labelName, dialogData, columns ,loading}) => (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <CustomDialogTitle onClose={onClose} style={{fontWeight:'bold',fontSize:'20px'}}>{`${labelName} Details`}</CustomDialogTitle>
      <DialogContent>
      {loading ? ( 
          <Grid container justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
            <CircularProgress />
          </Grid>
        ) : (
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={dialogData || []}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        // getRowId={(labelName==="Communicated")?(row) => row.id.meterNo:(row) => row.meterNo}
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
              csvOptions: { fileName: `${labelName}Report`}, 
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
      {onClose && (
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
      )}
    </DialogTitle>
  );
  const nonCommunicated=[
    { field: 'meterNo', headerName: 'Meter No'.toUpperCase(), width: 100,    align: 'center', headerAlign: "center", renderCell: (params) => {
      // Render a clickable link for meterNo
      const handleClick = () => {
        sessionStorage.setItem("meterNumber", params.value );
        navigate("/singleMeter", { state: { meterNo: params.value } });
      };
      return  params.value  ? (
        <span 
        onClick={handleClick} 
        style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}
      >
        {String(params.value)}
      </span>
  
      ) : (
        '0' 
      );
    }},
    { field: 'modemNumber', headerName: 'Modem Number'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'consumerNo', headerName: 'Consumer No'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'consumerName', headerName: 'Consumer Name'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'address', headerName: 'Address'.toUpperCase(), width: 100,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'category', headerName: 'Category'.toUpperCase(), width: 100,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'subCategory', headerName: 'Sub Category'.toUpperCase(), width: 160,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'cdKva', headerName: 'CD KVA'.toUpperCase(), width: 70,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'mf', headerName: 'MF'.toUpperCase(), width: 50,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'make', headerName: 'Make'.toUpperCase(), width: 70,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'phase', headerName: 'Phase'.toUpperCase(), width: 70,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'connectionDate', headerName: 'Connection Date'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'substationName', headerName: 'Substation Name'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'substationCode', headerName: 'Substation Code'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'feederCode', headerName: 'Feeder Code'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'feederName', headerName: 'Feeder Name'.toUpperCase(), width: 150,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'dtrCode', headerName: 'DTR Code'.toUpperCase(), width: 100,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'dtrName', headerName: 'DTR Name'.toUpperCase(), width: 100,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'modemMdn', headerName: 'Modem MDN'.toUpperCase(), width: 130,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'simProviderName', headerName: 'SIM Provider Name'.toUpperCase(), width: 170,    align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
  ]
  const InventoryCols=[
    { field: 'meterNo', headerName: 'Meter No'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => {
      const handleClick = () => {
        sessionStorage.setItem("meterNumber", params.value );
        navigate("/singleMeter", { state: { meterNo: params.value } });
      };
      return  params.value  ? (
        <span 
        onClick={handleClick} 
        style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}
      >
        {String(params.value)}
      </span>
      ) : (
        '0'
      );
    }
    },
    { field: 'category', headerName: 'Category'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.category || "0" },
    { field: 'cdKva', headerName: 'CD KVA'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.cdKva || "0" },
    { field: 'unit', headerName: 'Unit'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.unit || "0" },
    { field: 'name', headerName: 'Name'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.name || "0" },
    { field: 'addr', headerName: 'Address'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.addr || "0" },
    { field: 'mf', headerName: 'MF'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.mf || "0" },
    { field: 'make', headerName: 'Make'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.make || "0" },
    { field: 'phase', headerName: 'Phase'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.phase || "0" },
    { field: 'dssLocation', headerName: 'DSS Location'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.dssLocation || "0" },
    { field: 'hid', headerName: 'HID'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.hid || "0" },
    { field: 'connectiondate', headerName: 'Connection Date'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.connectiondate || "0" },
    { field: 'permanentpolenumber', headerName: 'Permanent Pole Number'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.permanentpolenumber || "0" },
    { field: 'phonenumber', headerName: 'Phone Number'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.phonenumber || "0" },
    { field: 'modemDcu', headerName: 'Modem DCU'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.modemDcu || "0" },
    { field: 'meterChnageFlag', headerName: 'Meter Change Flag'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.meterChnageFlag || "0" },
    { field: 'flag', headerName: 'Flag'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.flag || "0" },
    { field: 'subCategory', headerName: 'Sub Category'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.subCategory || "0" },
    { field: 'consumerid', headerName: 'Consumer ID'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.consumerid || "0" },
    { field: 'consumerNo', headerName: 'Consumer No'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.consumerNo || "0" },
    { field: 'substation', headerName: 'Substation'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.substation || "0" },
    { field: 'feeder', headerName: 'Feeder'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.feeder || "0" },
    { field: 'modemnumber', headerName: 'Modem Number'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.modemnumber || "0" },
    { field: 'modemmdn', headerName: 'Modem MDN'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.modemmdn || "0" },
    { field: 'simProviderName', headerName: 'SIM Provider Name'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.simProviderName || "0" },
    { field: 'mobileNo', headerName: 'Mobile No'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.mobileNo || "0" },
    { field: 'tod', headerName: 'TOD'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.tod || "0" },
    { field: 'voltageRating', headerName: 'Voltage Rating'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.voltageRating || "0" },
    { field: 'modemmanufacturername', headerName: 'Modem Manufacturer'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.modemmanufacturername || "0" },
    { field: 'billingparameterType', headerName: 'Billing Parameter Type'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.billingparameterType || "0" },
    { field: 'avgUnits', headerName: 'Avg Units'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.avgUnits || "0" },
    { field: 'relaystatus', headerName: 'Relay Status'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.relaystatus || "0" },
    { field: 'happyhoursStart', headerName: 'Happy Hours Start'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.happyhoursStart || "0" },
    { field: 'happyhoursEnd', headerName: 'Happy Hours End'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.happyhoursEnd || "0" },
    { field: 'emergencyCredit', headerName: 'Emergency Credit'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.emergencyCredit || "0" },
    { field: 'instantFreq', headerName: 'Instant Frequency'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.instantFreq || "0" },
    { field: 'rawFreq', headerName: 'Raw Frequency'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.rawFreq || "0" },
    { field: 'alarmFreq', headerName: 'Alarm Frequency'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.alarmFreq || "0" },
    { field: 'meterconnectionType', headerName: 'Meter Connection Type'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.meterconnectionType || "0" },
    { field: 'emergencyDays', headerName: 'Emergency Days'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.emergencyDays || "0" },
    { field: 'brownperiodDays', headerName: 'Brown Period Days'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.brownperiodDays || "0" },
    { field: 'maxdemandPercentage', headerName: 'Max Demand %'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.maxdemandPercentage || "0" },
    { field: 'billingdate', headerName: 'Billing Date'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.billingdate || "0" },
    { field: 'overloadLimit', headerName: 'Overload Limit'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.overloadLimit || "0" },
    { field: 'overcurrentLimit', headerName: 'Overcurrent Limit'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.overcurrentLimit || "0" },
    { field: 'undervoltage', headerName: 'Undervoltage'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.undervoltage || "0" },
    { field: 'overvoltage', headerName: 'Overvoltage'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.overvoltage || "0" },
    { field: 'profilecapturedperiod', headerName: 'Profile Captured Period'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.profilecapturedperiod || "0" },
    { field: 'topcovertamper', headerName: 'Top Cover Tamper'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.topcovertamper || "0" },
    { field: 'instailKwhreading', headerName: 'Install KWh Reading'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.instailKwhreading || "0" },
    { field: 'demandIntigration', headerName: 'Demand Integration'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.demandIntigration || "0" },
    { field: 'communicationsetting', headerName: 'Communication Setting'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.communicationsetting || "0" },
    { field: 'reducedmaxdemand', headerName: 'Reduced Max Demand'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.reducedmaxdemand || "0" },
    { field: 'feederCode', headerName: 'Feeder Code'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.feederCode || "0" },
    { field: 'feederName', headerName: 'Feeder Name'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.feederName || "0" },
    { field: 'dtrStructurecode', headerName: 'DTR Structure Code'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.dtrStructurecode || "0" },
    { field: 'dtrStructurename', headerName: 'DTR Structure Name'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.dtrStructurename || "0" },
    { field: 'consumerCategory', headerName: 'Consumer Category'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.consumerCategory || "0" },
    { field: 'subCategoryName', headerName: 'Sub Category Name'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.subCategoryName || "0" },
    { field: 'sector', headerName: 'Sector'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => params.row.sector || "0" },
  ]
  
  // Generate columns dynamically based on API data
const generateColumns = (data, labelName) => {
    if (!data || data.length === 0) return [];
    // Define columns for each label
    const columnsByLabel = {
      'GPRS-Communicated': [
        { field: 'meterNo', headerName: 'Meter No'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center", renderCell: (params) => {
          const handleClick = () => {
            sessionStorage.setItem("meterNumber", params.value );
            navigate("/singleMeter", { state: { meterNo: params.value } });
          };
          return  params.value  ? (
            <span 
            onClick={handleClick} 
            style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {String(params.value)}
          </span>
          ) : (
            '0'
          );
        }
        },
        { field: 'meterDate', headerName: 'Meter Date'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center",renderCell: (params) => params.row.meterDate || "0" },
        { field: 'instantAvailable', headerName: 'Instant Available', width: 200 ,align: 'center',
          renderCell: (params) => params.row.instantAvailable || "0"
        },
        { field: 'billingAvailable', headerName: 'Billing Available'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center",
          renderCell: (params) => params.row.billingAvailable || "0"
         },
        { field: 'lsAvailable', headerName: 'Is Available'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center",
          renderCell: (params) => params.row.lsAvailable || "0"
         },
        { field: 'eventsAvailable', headerName: 'Events Available'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center",
          renderCell: (params) => params.row.eventsAvailable || "0"
         },
        { field: 'insertedDate', headerName: 'Inserted Date'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center",
          renderCell: (params) => params.row.insertedDate || "0"
         },
        { field: 'dailybillingData', headerName: 'Daily Billing Data'.toUpperCase(), width: 200,    align: 'center', headerAlign: "center",
          renderCell: (params) => params.row.dailybillingData || "0"
         },
      ],
      'Non-Communicated': nonCommunicated,
      'RF-Communicated':InventoryCols,
    };
    return columnsByLabel[labelName] || [];
  };
const columns = dialogData.length > 0 ? generateColumns(dialogData, labelName) : [];
 return (
    <div>
      <div style={{ width: "100%", height: "300px" }}>
        <Pie ref={chartRef} data={data} options={options} />
      </div>

      <CountDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        labelName={labelName}
        dialogData={dialogData}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};



export default DoughnutChart;
