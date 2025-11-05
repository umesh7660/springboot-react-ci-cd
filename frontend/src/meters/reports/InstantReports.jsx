import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import {
  Grid,
  CircularProgress,
  Button,
  FormControl,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";
import Select from "react-select";
import baseURL from "../../config";

const InstantReports = () => {
  const location = useLocation();

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

  const formatDate = (date) => date.toISOString().split("T")[0];

  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored


  useEffect(() => {
    const navState = location.state;

    let meterNo = navState?.selectedMeter || sessionStorage.getItem("meterNumber");
    let navDates = navState?.dates || null;


    if (meterNo) {
      setSelectedMeter({ value: meterNo, label: meterNo });
    }

    if (navDates && navDates.length === 2) {
      setDates([new Date(navDates[0]), new Date(navDates[1])]);
    }

    // Example meter list fetch or static dummy
  }, [location.state]);

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
      const response = await axios.get(
        `${baseURL}/singlemeterView/instantData`,
        {
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
        }
      );
      console.log("response", response);
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
    { field: 'instantDate', headerName: 'Instant Date'.toUpperCase(), width: 150,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'voltageRphase', headerName: 'Voltage-R'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'voltageYphase', headerName: 'Voltage-Y'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'voltageBphase', headerName: 'Voltage-B'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'currentRphase', headerName: 'Current-R'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'currentYphase', headerName: 'Current-Y'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'currentBphase', headerName: 'Current-B'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'neutralCurrent', headerName: 'Neutral Current'.toUpperCase(), width: 150,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'rphasePf', headerName: 'R-PF'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'yphasePf', headerName: 'Y-PF'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'bphasePf', headerName: 'B-PF'.toUpperCase(), width: 100,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'averagePf', headerName: 'Average Pf'.toUpperCase(), width: 130,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'activePower', headerName: 'Active Power(KW)'.toUpperCase(), width: 180,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'apparentPower', headerName: 'Apparent Power(KVA)'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'reactivePower', headerName: 'Reactive Power(KVAr)'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'activeEnergyimp', headerName: 'Active Energy IMP(KWH)'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'activeEnergyexp', headerName: 'Active Energy EXP(KWH)'.toUpperCase(), width: 220,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'apparentEnergyimp', headerName: 'Apparent Energy IMP(KVAH)'.toUpperCase(), width: 250,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'apparentEnergyexp', headerName: 'Apparent Energy EXP(KVAH)'.toUpperCase(), width: 250,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'reactiveEnergylagimp', headerName: 'Reactive Energy Lag IMP(KVArh)'.toUpperCase(), width: 280,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'reactiveEnergylagexp', headerName: 'Reactive Energy Lag EXP(KVArh)'.toUpperCase(), width: 280,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'reactiveEnergyleadimp', headerName: 'Reactive Energy Lead IMP(KVArh)'.toUpperCase(), width: 280,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'reactiveEnergyleadexp', headerName: 'Reactive Energy Lead EXP(KVArh)'.toUpperCase(), width: 280,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'frequency', headerName: 'Frequency(Hz)'.toUpperCase(), width: 140,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKwImport', headerName: 'MD Kw Import'.toUpperCase(), width: 150,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKwImportDate', headerName: 'MD Kw Import Date'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKwExport', headerName: 'MD Kw Export'.toUpperCase(), width: 150,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKwExportDate', headerName: 'MD Kw Export Date'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKvaImport', headerName: 'MD Kva Import'.toUpperCase(), width: 150,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKvaImportDate', headerName: 'MD Kva Import Date'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKvaExport', headerName: 'MD Kva Export'.toUpperCase(), width: 150,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'maxDemandKvaExportDate', headerName: 'MD Kva Export Date'.toUpperCase(), width: 200,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
    { field: 'insertedDate', headerName: 'Inserted Date'.toUpperCase(), width: 170,  align: 'center', headerAlign: "center", renderCell: (params) => params.value || "0" },
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
      <Typography variant="h3" fontWeight="bold" className="mb-3">
        Instant Report Details
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
          Instant Data
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
            getRowId={(row) => row.instantDate}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 25, 50, 100]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: { csvOptions: { fileName: "RoleManagementReport" } },
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

export default InstantReports;
