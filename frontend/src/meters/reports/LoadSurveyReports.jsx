import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, CircularProgress, Button,FormControl, Paper, Typography,Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";
import Select from "react-select";
import baseURL from "../../config";

const LoadSurveyReport = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const isFetched = useRef(false);
  const isFetchedData = useRef(false);
  const [pageSize, setPageSize] = useState(10);
 
  const [metersData, setMetersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [meterNumbers, setMeterNumbers] = useState([]);
  const [selectedMeter, setSelectedMeter] = useState([{ value: "", label: "All" }]);
  const [dates, setDates] = useState([new Date(), new Date()]);
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  const formatDate = (date) => date.toISOString().split("T")[0];

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    axios
      .get(`${baseURL}/data/fetchMeterList?level1id=${level1id}`)
      .then((response) => setMeterNumbers(response.data || []))
      .catch((error) => {
        console.error("Failed to fetch meter numbers:", error);
      });
  }, []);

  const fetchMetersData = async () => {
    if (!dates[0] || !dates[1]) {
      alert("Please select a valid date range.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/singlemeterView/loadsurveyData`, {
        params: {
          startdate: formatDate(dates[0]),
          enddate: formatDate(dates[1]),
          meterNo: selectedMeter?.value || "",
          level1id: level1id,
        },
        headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`,  // <-- Add this
               },
        withCredentials: true,
      });
      setMetersData(response.data.original || []);
    } catch (error) {
      console.error("API Error (Instant Report):", error);
      setMetersData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFetchedData.current) return;
    isFetchedData.current = true;
    fetchMetersData();
  }, []);

  const generateColumns = (data) => {
    if (!data || data.length === 0) return [];
    return [
      { field: 'meterNo', headerName: 'Meter No'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => {
        // Render a clickable link for meterNo
        const handleClick = () => {
          sessionStorage.setItem("meterNumber", params.value );
          navigate("/singleMeter", { state: { meterNo: params.value ,dates :dates} });
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
      { field: 'lsDatetime', headerName: 'Date Time'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwhImport', headerName: 'Kwh Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwhExport', headerName: 'Kwh Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvahImport', headerName: 'Kvah Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvahExport', headerName: 'Kvah Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvarhImport', headerName: 'Kvarh Import'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvarhExport', headerName: 'Kvarh Export'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwImport', headerName: 'Kw Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwExport', headerName: 'Kw Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvaImport', headerName: 'Kva Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvaExport', headerName: 'Kva Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvarImport', headerName: 'Kvar Import'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvarExport', headerName: 'Kvar Export'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentRPhase', headerName: 'Current-R'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentYPhase', headerName: 'Current-Y'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentBPhase', headerName: 'Current-B'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'neutralCurrent', headerName: 'Neutral Current'.toUpperCase(), width: 180, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'minCurrent', headerName: 'Min Current'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'maxCurrent', headerName: 'Max Current'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'avgCurrent', headerName: 'Avg Current'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageRPhase', headerName: 'Voltage-R'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageYPhase', headerName: 'Voltage-Y'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageBPhase', headerName: 'Voltage-B'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'minVoltage', headerName: 'Min Voltage'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'maxVoltage', headerName: 'Max Voltage'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'avgVoltage', headerName: 'Avg Voltage'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfRPhase', headerName: 'PF-R'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfYPhase', headerName: 'PF-Y'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfBPhase', headerName: 'PF-B'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'avgPf', headerName: 'Avg-Pf'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'avgFrequency', headerName: 'Avg-Freq'.toUpperCase(), width: 120, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'insertedDate', headerName: 'Inserted Date'.toUpperCase(), width: 170, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
  ];
}


  const columns = generateColumns(metersData);
  
  const meterOptions = meterNumbers.map((meter) => ({
    value: meter,
    label: meter.toString(),
  }));

  return (
    <Box
    sx={{
      backgroundColor: colors.grey[1000],
      color: colors.primary[100],
      p: 4,
    }}
  >
     <Typography variant="h3" fontWeight="bold" className='mb-3'>
     Load Survey Report Details
      </Typography>
      <div className="mt-3 mb-3">
        <div className="row align-items-center g-3">
          {/* Start Date Picker */}
          <div className="col-md-3">
            <label className="fw-bold mb-1">Start Date:</label>
            <DatePicker
              selected={dates[0]} // Start Date
              onChange={(date) => setDates([date, dates[1]])} // Update start date
              dateFormat="MM/dd/yyyy"
              placeholderText="Select start date"
              isClearable
              maxDate={new Date()}
              className="form-control w-100"
            />
          </div>

          {/* End Date Picker */}
          <div className="col-md-3">
            <label className="fw-bold mb-1">End Date:</label>
            <DatePicker
              selected={dates[1]} // End Date
              onChange={(date) => setDates([dates[0], date])} // Update end date
              dateFormat="MM/dd/yyyy"
              placeholderText="Select end date"
              isClearable
              maxDate={new Date()}
              className="form-control w-100"
            />
          </div>

          {/* Select Meter Number */}
          <div className="col-md-3">
            <label htmlFor="meterSelect" className="fw-bold mb-1">
              Select Meter Number:
            </label>
            <Select
              id="meterSelect"
              options={[{ value: "", label: "All" },...meterOptions]}
              value={selectedMeter}        
              onChange={(selectedOption) => {
                setSelectedMeter(selectedOption || { value: "", label: "All" });
              }}
              isSearchable={true}
              placeholder="Select a meter..."
              className="w-100"
            />
          </div>

          {/* Submit Button */}
          <div className="col-md-3" >
            <button
              onClick={fetchMetersData}
              className="btn btn-success w-50 mt-4 fs-6"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: colors.primary[400],
        color: colors.primary[100],
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
      Load Survey Data
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
        <DataGrid
          rows={metersData}
          columns={columns}
          autoHeight
          getRowId={(row, index) => row.lsDatetime ? `${row.lsDatetime}-${index ?? Math.random()}` : `unknown-${index ?? Math.random()}`}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 25, 50, 100]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: { csvOptions: { fileName: "LoadSurveyReport" } },
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
      )}
      </Paper>
    </Box>
  );
};

export default LoadSurveyReport;
