import React, { useEffect, useState, useRef, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";
import axios from "axios";
import { useLocation } from "react-router-dom";

import {
  Grid,
  CircularProgress,
  Button,
  FormControl,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import Select from "react-select";
import baseURL from "../../config";

const EventSummaryData = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [metersData, setMetersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const isFetchedData = useRef(false);
  const navigate = useNavigate();
  const [meterNumbers, setMeterNumbers] = useState(() => []);
  const location = useLocation();
  const initialMeterNo = location.state?.meterNo;
  const [pageSize, setPageSize] = useState(10);
  const initialDates = location.state?.dates;
  const [dates, setDates] = useState(initialDates || [new Date(), new Date()]);
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

const [selectedMeter, setSelectedMeter] = useState(
    initialMeterNo
      ? { value: `${initialMeterNo}`, label: `${initialMeterNo}` }
      : { value: "", label: "All" }
  );

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    // Set dummy meter numbers first to avoid delay in rendering
    setMeterNumbers(["Loading..."]); // Placeholder before actual data loads

    axios
      .get(`${baseURL}/data/fetchMeterList?level1id=${level1id}`)
      .then((response) => {
        setMeterNumbers(response.data);
      })
      .catch((err) => {
        console.error("Error fetching meter numbers:", err);
      });
  }, []);

  const meterOptions = useMemo(
    () => meterNumbers.map((meter) => ({ value: meter, label: meter })),
    [meterNumbers] // Only recalculate when meterNumbers changes
  );
  const fetchMetersData = async () => {
    setLoading(true);

    try {
      // Extract selected meter and date range
      //const meterNo = selectedMeter || "";
      const meterNo = selectedMeter?.value || ""; // If selectedMeter is null, set it to an empty string

      const startDate = dates[0] ? dates[0].toISOString().split("T")[0] : ""; // Convert to YYYY-MM-DD
      const endDate = dates[1] ? dates[1].toISOString().split("T")[0] : ""; // Convert to YYYY-MM-DD

      const response = await axios.get(`${baseURL}/singlemeterView/eventData`, {
        params: { meterNo, startDate, endDate,level1id }, // Pass parameters in query string
        headers: { 
          "Content-Type": "application/json" ,
          "Authorization": `Bearer ${token}`,  // <-- Add this

        },
        
        withCredentials: true,
      });

      setMetersData(response.data.original || []);
      //console.log(metersData);
    } catch (error) {
      console.error("API Error (Meter Counts):", error);
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

  const generateColumns = (data,navigate) => {
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
      { field: 'eventDescription', headerName: 'Event Desc'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'eventOccdatetime', headerName: 'Event Occ DateTime'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'eventResdatetime', headerName: 'Event Res DateTime'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'duration', headerName: 'Duration (Hour)'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageRPhaseOcc', headerName: 'Voltage-R Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageYPhaseOcc', headerName: 'Voltage-Y Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageBPhaseOcc', headerName: 'Voltage-B Occ'.toUpperCase(), width: 170, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentRPhaseOcc', headerName: 'Current-R Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentYPhaseOcc', headerName: 'Current-Y Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentBPhaseOcc', headerName: 'Current-B Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'neutralCurrentOcc', headerName: 'Neutral Current Occ'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfRPhaseOcc', headerName: 'pf-R Occ'.toUpperCase(), width: 100, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfYPhaseOcc', headerName: 'pf-Y Occ'.toUpperCase(), width: 100, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfBPhaseOcc', headerName: 'pf-B Occ'.toUpperCase(), width: 100, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'activecurrentRPhaseOcc', headerName: 'Active Current-R Occ'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'activecurrentYPhaseOcc', headerName: 'Active Current-Y Occ'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'activecurrentBPhaseOcc', headerName: 'Active Current-B Occ'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwhImportOcc', headerName: 'kwh Import Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwhExportOcc', headerName: 'kwh Export Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvahImportOcc', headerName: 'kvah Import Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvahExportOcc', headerName: 'kvah Export Occ'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageRPhaseRes', headerName: 'Voltage-R Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageYPhaseRes', headerName: 'Voltage-Y Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'voltageBPhaseRes', headerName: 'Voltage-B Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentRPhaseRes', headerName: 'Current-R Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentYPhaseRes', headerName: 'Current-Y Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'currentBPhaseRes', headerName: 'Current-B Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
     	{ field: 'neutralCurrentRes', headerName: 'Neutral Current Res'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfRPhaseRes', headerName: 'pf-R Res'.toUpperCase(), width: 100, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfYPhaseRes', headerName: 'pf-Y Res'.toUpperCase(), width: 100, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'pfBPhaseRes', headerName: 'pf-B Res'.toUpperCase(), width: 100, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'activecurrentRPhaseRes', headerName: 'Active Current-R Res'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'activecurrentYPhaseRes', headerName: 'Active Current-Y Res'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'activecurrentBPhaseRes', headerName: 'Active Current-B Res'.toUpperCase(), width: 200, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwhImportRes', headerName: 'kwh Import Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kwhExportRes', headerName: 'kwh Export Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvahImportRes', headerName: 'kvah Import Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'kvahExportRes', headerName: 'kvah Export Res'.toUpperCase(), width: 150, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
      { field: 'insertedDate', headerName: 'Inserted Date'.toUpperCase(), width: 170, align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
  ];
}
  const columns = generateColumns(metersData, navigate);

  return (
    <Box
      sx={{
        backgroundColor: colors.grey[1000],
        color: colors.primary[100],
        p: 4,
      }}
    >
      <Typography variant="h3" fontWeight="bold" className="mb-3">
        Event Data Summary Report
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
          Event Data Summary
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
            getRowId={(row) => `temp-${Math.random()}`}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 25, 50, 100]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: { csvOptions: { fileName: "EventDataSummaryReport" } },
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

export default EventSummaryData;
