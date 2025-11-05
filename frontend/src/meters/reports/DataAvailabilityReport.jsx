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

const DataAvailabilityReport = () => {
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
  const [selectedSection, setSelectedSection] = useState({ value: "ALL", label: "ALL" });
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  const formatDate = (date) => date.toISOString().split("T")[0];

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
      const response = await axios.get(`${baseURL}/count/availability`, {
        params: {
          startdate: formatDate(dates[0]),
          enddate: formatDate(dates[1]),
          meterNo: selectedMeter?.value || "",
          section: selectedSection?.value || "",
          level1id:level1id,
        },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("DATA", response.data);

      // Transform the response data
      const { meterConfig, loadCount, dailyCount, billingCount } = response.data;

      // Safely check if required data arrays are present
      if (!meterConfig || !loadCount || !dailyCount || !billingCount) {
        console.error('Missing expected data:', { meterConfig, loadCount, dailyCount, billingCount });
        return;
      }


      // Now continue with your data transformation
      const transformedData = meterConfig.map((config, index) => {
        const loadSurveyExpected = loadCount[index] ? loadCount[index][1] : 0; // Get second value (index 1)
        const loadSurveyReceived = loadCount[index] ? loadCount[index][2] : 0; // Get third value (index 2)
        const loadSurveyPercentage = loadCount[index] ? loadCount[index][3] : 0; // Get third value (index 2)
        const dailyBillingExpected = dailyCount[index] ? dailyCount[index][1] : 0; // Get second value (index 1)
        const dailyBillingReceived = dailyCount[index] ? dailyCount[index][2] : 0; // Get third value (index 2)
        const dailyBillingPercentage = dailyCount[index] ? dailyCount[index][3] : 0; // Get third value (index 2)
        const billingExpected = billingCount[index] ? billingCount[index][1] : 0; // Get second value (index 1)
        const billingReceived = billingCount[index] ? billingCount[index][2] : 0; // Get third value (index 2)
        const billingPercentage = billingCount[index] ? billingCount[index][3] : 0; // Get third value (index 2)


        return {
          date: config[0],
          communication: config[1],
          nonCommunication: config[2],
          loadSurveyExpected,
          loadSurveyReceived,
          loadSurveyPercentage,
          dailyBillingExpected,
          dailyBillingReceived,
          dailyBillingPercentage,
          billingExpected,
          billingReceived,
          billingPercentage,
        };
      });

      console.log(transformedData);




      setMetersData(transformedData);
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
      {
        field: "date",
        headerName: "Date",
        width: 130,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "communication",
        headerName: "Communication",
        width: 130,
        align: "center",
        headerAlign: "center",
      }, {
        field: "nonCommunication",
        headerName: "Non-Communication",
        width: 130,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "loadSurveyExpected",
        headerName: "Expected Load Survey",
        width: 180,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "loadSurveyReceived",
        headerName: "Load Survey Received",
        width: 180,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "loadSurveyPercentage",
        headerName: "Load Survey %",
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "dailyBillingExpected",
        headerName: "Expected Daily Billing",
        width: 180,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "dailyBillingReceived",
        headerName: "Daily Billing Received",
        width: 180,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "dailyBillingPercentage",
        headerName: "Daily Billing %",
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "billingExpected",
        headerName: "Expected  Billing",
        width: 180,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "billingReceived",
        headerName: " Billing Received",
        width: 180,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "billingPercentage",
        headerName: " Billing %",
        width: 150,
        align: "center",
        headerAlign: "center",
      },
    ];
  };

  const columns = generateColumns(metersData);

  const meterOptions = meterNumbers.map((meter) => ({
    value: meter,
    label: meter.toString(),
  }));

  return (
    <Box sx={{ backgroundColor: colors.grey[1000], color: colors.primary[100], p: 4 }}>
      <Typography variant="h3" fontWeight="bold" className="mb-3">
        Data Availability Report Details
      </Typography>
      <div className="mt-3 mb-3">
        <div className="row align-items-center g-3">
          {/* Start Date Picker */}
          <div className="col-md-3 col-12">
            <label className="fw-bold mb-2">Start Date:</label>
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
          <div className="col-md-3 col-12">
            <label className="fw-bold mb-2">End Date:</label>
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
          <div className="col-md-3 col-12">
            <label htmlFor="meterSelect" className="fw-bold mb-1">
              Select Meter Number:
            </label>
            <Select
              id="meterSelect"
              options={[{ value: "", label: "All" }, ...meterOptions]} // Assuming meterOptions are available
              value={selectedMeter}
              onChange={(selectedOption) => {
                setSelectedMeter(selectedOption || { value: "", label: "All" });
              }}
              isSearchable={true}
              placeholder="Select a meter..."
              className="w-100"
            />
          </div>

          {/* Select Section with hardcoded values */}
          <div className="col-md-3 col-12">
            <label htmlFor="sectionSelect" className="fw-bold mb-1">
              Section:
            </label>
            <Select
              id="sectionSelect"
              options={[
                { value: "ALL", label: "ALL" },
                { value: "GPRS", label: "GPRS" },
                { value: "RF", label: "RF" },
              ]}
              value={selectedSection}
              onChange={(selectedOption) => {
                setSelectedSection(selectedOption || { value: "ALL", label: "ALL" });
              }}
              isSearchable={true}
              placeholder="Select a section..."
              className="w-100"
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-3 col-12 d-flex justify-content-center">
              <button onClick={fetchMetersData} className="btn btn-success fs-6">
                Submit
              </button>
            </div>
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
        {loading ? (
          <Grid container justifyContent="center" alignItems="center" sx={{ height: 300 }}>
            <CircularProgress />
          </Grid>
        ) : (
          <DataGrid
            rows={metersData}
            columns={columns}
            autoHeight
            getRowId={(row) => row.date}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 25, 50, 100]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: { csvOptions: { fileName: "DataAvailabilityReport" } },
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

export default DataAvailabilityReport;
