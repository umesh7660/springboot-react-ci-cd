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

const OnDemandData = () => {
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
        /* axios
          .get(`${baseURL}/ondemand/fetchDemandType`)
          .then((res) => {
            if (res.data && typeof res.data === "object") {
              const demandTypesArray = Object.entries(res.data).map(
                ([key, value]) => ({
                  label: key, // Command Name
                  value: value, // Command Code
                })
              );
              setDemandTypes(demandTypesArray);
            } else {
              console.error("Invalid demandTypes response:", res.data);
              setDemandTypes([]);
            }
          })
          .catch((err) => {
            console.error("Error fetching demand types:", err);
            setDemandTypes([]);
          });*/
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

        return keys.map((key) => ({
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
        }));
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
              
            }}
        >
            <Paper
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

export default OnDemandData;
