import React, { useState, useEffect, useRef } from "react";
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

const OnDemandReport = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const isFetched = useRef(false);
  const isFetchedData = useRef(false);
  const [pageSize, setPageSize] = useState(10);
  const [demandsData, setDemandsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [demandTypes, setDemandTypes] = useState([]);
  const [selectedDemandType, setSelectedDemandType] = useState([
    {
      value: "",
      label: "All",
    },
  ]);

  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  const [dates, setDates] = useState([new Date(), new Date()]);

  const formatDate = (date) => date.toISOString().split("T")[0];
  const fetchDemandTypes = () => {
    const dummyData = {
      billingdata: "#23#",
      dailybillingdata: "#24#",
      loadsurveydata: "#22#",
      ping: "#50#",
    };
    setDemandTypes(
      Object.entries(dummyData).map(([label, value]) => ({
        value,
        label,
      }))
    );
  };
  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;
    fetchDemandTypes();

  }, []);

  const fetchDemandsData = async () => {
    if (!dates[0] || !dates[1]) {
      alert("Please select a valid date range.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/ondemand/getOnDemandData`, {
        params: {
          startdate: formatDate(dates[0]),
          enddate: formatDate(dates[1]),
          demandName: selectedDemandType?.label || "",
          level1id:level1id,
        },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setDemandsData(response.data || []);
    } catch (error) {
      console.error("API Error (ondemand Report):", error);
      setDemandsData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFetchedData.current) return;
    isFetchedData.current = true;
    fetchDemandsData();
  }, []);

  const generateColumns = (data) => {
    if (!data.length) return [];
  
    const keys = [...new Set(data.flatMap((row) => Object.keys(row)))];
  
    const allowedCommands = [
      "instantdata",
      "loadsurveydata",
      "billingdata",
      "dailybillingdata",
      "eventdata",
      "readfulldata",
    ];
  
    const columns = keys.map((key) => {
      // Special case for 'value' column
      if (key === "value") {
        return {
          field: key,
          headerName: "VALUE",
          width: 150,
          align: "center",
          headerAlign: "center",
          renderCell: (params) => {
            const row = params.row;
  
            // Find the correct commandName key (even if typo)
            const commandKey = Object.keys(row).find((k) =>
              k.toLowerCase().includes("commmandname") ||
              k.toLowerCase().includes("commandname")
            );
  
            const commandName = row[commandKey];
  
            if (allowedCommands.includes(commandName)) {
              return (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() =>
                    handleViewClick({
                      requestId: row.requestId,
                      meterNo: row.meterNo,
                      commandName: commandName,
                      startdate: formatDate(dates[0]),
                      enddate: formatDate(dates[1]),
                    })
                  }
                >
                  View
                </Button>
              );
            }
  
            return null;
          },
        };
      }
  
      // Normal columns
      return {
        field: key,
        headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
        width: 200,
        align: "center",
        headerAlign: "center",
        renderCell: (params) =>
          key === "meterNo" ? (
            <span
              onClick={() => {
                sessionStorage.setItem("meterNumber", params.value);
                navigate("/singleMeter", {
                  state: { meterNo: params.value, dates: dates },
                });
              }}
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {String(params.value)}
            </span>
          ) : (
            params.row[key] || "0"
          ),
      };
    });
  
    return columns;
  };
  
  const handleViewClick = async ({ requestId, meterNo, commandName }) => {
    console.log("View clicked for:", { requestId, meterNo, commandName });

    const startdate = formatDate(dates[0]); // Make sure `dates` is defined in scope
    const enddate = formatDate(dates[1]);

    const rowData = { requestId, meterNo, commandName, startdate, enddate };

    switch (commandName) {
      case "instantdata":
        try {
          const response = await axios.get(`${baseURL}/singlemeterView/ondemandIntantData`, {
            params: {
              requestId,
              meterNo,
              commandName,
              startdate,
              enddate,
              level1id,
            }
          });

          sessionStorage.setItem("meterNumber", meterNo);
          navigate("/instant-reports", {
            state: { selectedMeter: meterNo, dates: dates },
          });

          console.log("Fetch Data", response.data);

        } catch (error) {
          console.error("Error fetching instant data:", error);
          alert("Failed to fetch instant data.");
        }
        break;

      case "loadsurveydata":
        try {
          const response = await axios.get(`${baseURL}/singlemeterView/ondemandLoadsurveyData`, {
            params: {
              requestId,
              meterNo,
              commandName,
              startdate,
              enddate,
              level1id,
            }
          });

          sessionStorage.setItem("meterNumber", meterNo);
          navigate("/loadsurvey-reports", {
            state: { selectedMeter: meterNo, dates: dates },
          });

          console.log("Fetch Data", response.data);

        } catch (error) {
          console.error("Error fetching instant data:", error);
          alert("Failed to fetch instant data.");
        } break;

      case "billingdata":
        try {
          const response = await axios.get(`${baseURL}/singlemeterView/ondemandBillingData`, {
            params: {
              requestId,
              meterNo,
              commandName,
              startdate,
              enddate,
              level1id,
            }
          });

          sessionStorage.setItem("meterNumber", meterNo);
          navigate("/monthly-billing-reports", {
            state: { selectedMeter: meterNo, dates: dates },
          });

          console.log("Fetch Data", response.data);

        } catch (error) {
          console.error("Error fetching instant data:", error);
          alert("Failed to fetch instant data.");
        } break;

      case "dailybillingdata":
        try {
          const response = await axios.get(`${baseURL}/singlemeterView/ondemandDailybillingData`, {
            params: {
              requestId,
              meterNo,
              commandName,
              startdate,
              enddate,
              level1id,
            }
          });

          sessionStorage.setItem("meterNumber", meterNo);
          navigate("/daily-billing-reports", {
            state: { selectedMeter: meterNo, dates: dates },
          });

          console.log("Fetch Data", response.data);

        } catch (error) {
          console.error("Error fetching instant data:", error);
          alert("Failed to fetch instant data.");
        } break;

      case "eventdata":
        try {
          const response = await axios.get(`${baseURL}/singlemeterView/OndemandEventData`, {
            params: {
              requestId,
              meterNo,
              commandName,
              startdate,
              enddate,
              level1id,
            }
          });

          sessionStorage.setItem("meterNumber", meterNo);
          navigate("/event-summary-reports", {
            state: { selectedMeter: meterNo, dates: dates },
          });

          console.log("Fetch Data", response.data);

        } catch (error) {
          console.error("Error fetching instant data:", error);
          alert("Failed to fetch instant data.");
        } break;

      default:
        alert("Unknown command type.");
    }
  };




  const columns = generateColumns(demandsData);
  const demandOptions = demandTypes.map((demand) => ({
    value: demand.value,
    label: demand.label,
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
        Ondemand Request Report Details
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
            <label htmlFor="demandSelect" className="fw-bold mb-1">
              Select Demand Type:
            </label>
            <Select
              id="demandSelect"
              options={[{ value: "", label: "All" }, ...demandOptions]}
              value={selectedDemandType}
              onChange={(selectedOption) => {
                setSelectedDemandType(selectedOption || { value: "", label: "All" });
              }}
              isSearchable={true}
              isClearable
              placeholder="Select a demand..."
              className="w-100"
            />
          </div>

          {/* Submit Button */}
          <div className="col-md-3">
            <button
              onClick={fetchDemandsData}
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
          Ondemand Request Data
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
            rows={demandsData}
            columns={columns}
            autoHeight
            getRowId={(row) =>
              row.requestSetDateTime ?? `temp-${Math.random()}`
            }
            pageSize={pageSize}
            rowsPerPageOptions={[10, 25, 50, 100]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: { csvOptions: { fileName: "OnDemandRequestReport" } },
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

export default OnDemandReport;
