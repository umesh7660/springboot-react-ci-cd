import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
import { DataGrid, GridCloseIcon, GridSaveAltIcon, GridToolbar } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../theme";
import Select from "react-select";
import baseURL from "../config";

const MasterData = () => {
  const location = useLocation();
  const [editRowId, setEditRowId] = useState(null);
  const [rowData, setRowData] = useState({}); // Temporary row data

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

  const formatDate = (date) => date.toISOString().split("T")[0];


  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newRowId, setNewRowId] = useState(null);


  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  useEffect(() => {
    const navState = location.state;

    let meterNo = navState?.selectedMeter || sessionStorage.getItem("meterNumber");

    if (meterNo) {
      setSelectedMeter({ value: meterNo, label: meterNo });
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

    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/data/meterDetails`,
        {
          params: {
            meterNo: selectedMeter?.value || "",
            level1id:level1id,
          },
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("response", response);
      setMetersData(response.data || []);
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


  // Base style for your columns
  const baseStyle = {
    width: 150,
    align: 'center',
    headerAlign: 'center'
  };

  // Columns definition
  const columns = [
    {
      field: 'actions',
      headerName: 'ACTIONS',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        const handleEditClick = () => {
          setEditRowId(params.id);
          setRowData({ ...params.row }); // Copy current row data
        };

        const handleSaveClick = async () => {
          console.log("Save", rowData);
          try {
            const response = await axios.post(`${baseURL}/data/meterDataUpdate`, rowData);
            console.log("Response from backend:", response.data);
            setEditRowId(null);
            fetchMetersData(); // refresh list after save

          } catch (error) {
            console.error("Error saving data:", error);
          }
        };

        const handleCancelClick = () => {
          setEditRowId(null);
          setRowData({});
        };

        return isEditing ? (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            <Tooltip title="Save">
              <IconButton onClick={handleSaveClick} size="small" color="success">
                <GridSaveAltIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel">
              <IconButton onClick={handleCancelClick} size="small" color="warning">
                <GridCloseIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            <Tooltip title="Edit">
              <IconButton onClick={handleEditClick} size="small" color="primary">
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={async () => {
                  console.log("Delete", params.row.meterNo);
                  await axios.post(`${baseURL}/data/meterDataDelete`, null, {
                    params: { meterNo: params.row.meterNo },
                  });
                  fetchMetersData();

                }}
                size="small"
                color="error"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>

          </div>
        );
      },
    },

    
    {
      field: 'meterNo',
      headerName: 'METER NO',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;
        return isEditing ? (
          <input
            type="text"
            value={rowData.meterNo || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                meterNo: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'acno',
      headerName: 'ACCOUNT NO',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;
        return isEditing ? (
          <input
            type="text"
            value={rowData.acno || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                acno: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },

    {
      field: 'consumerName',
      headerName: 'CONSUMER NAME',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.consumerName || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                consumerName: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'consumerNo',
      headerName: 'CONSUMER NO',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text" rN
            value={rowData.consumerNo || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                consumeo: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'address',
      headerName: 'ADDRESS',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.address || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'category',
      headerName: 'CATEGORY',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.category || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'subCategory',
      headerName: 'SUB CATEGORY',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.subCategory || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                subCategory: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'cdKva',
      headerName: 'CD KVA',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.cdKva || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                cdKva: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'mf',
      headerName: 'MF',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.mf || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                mf: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'make',
      headerName: 'MAKE',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.make || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                make: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    { field: 'unit', headerName: 'UNIT', ...baseStyle },
    { field: 'phase', headerName: 'PHASE', ...baseStyle },
    { field: 'connectionDate', headerName: 'CONNECTION DATE', ...baseStyle },
    { field: 'flag', headerName: 'FLAG', ...baseStyle },
    { field: 'substationName', headerName: 'SUBSTATION NAME', ...baseStyle },
    { field: 'substationCode', headerName: 'SUBSTATION CODE', ...baseStyle },
    { field: 'feederCode', headerName: 'FEEDER CODE', ...baseStyle },
    { field: 'feederName', headerName: 'FEEDER NAME', ...baseStyle },
    { field: 'dtrCode', headerName: 'DTR CODE', ...baseStyle },
    { field: 'dtrName', headerName: 'DTR NAME', ...baseStyle },
    { field: 'modemNumber', headerName: 'MODEM NUMBER', ...baseStyle },
    { field: 'modemMdn', headerName: 'MODEM MDN', ...baseStyle },
    { field: 'simProviderName', headerName: 'SIM PROVIDER', ...baseStyle },
    { field: 'mobileNo', headerName: 'MOBILE NO', ...baseStyle },
    { field: 'tod', headerName: 'TOD', ...baseStyle },
    { field: 'voltageRating', headerName: 'VOLTAGE RATING', ...baseStyle },
    {
      field: 'modemManufacturername',
      headerName: 'MODEM MANUFACTURER',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.modemManufacturername || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                modemManufacturername: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    { field: 'modemshedulecommunication', headerName: 'MODEM SCHEDULE COMM.', ...baseStyle },
    {
      field: 'ipAddress',
      headerName: 'IP ADDRESS',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.ipAddress || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                ipAddress: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    {
      field: 'portNumber',
      headerName: 'PORT NUMBER',
      width: 150,
      renderCell: (params) => {
        const isEditing = params.id === editRowId;

        return isEditing ? (
          <input
            type="text"
            value={rowData.portNumber || ""}
            onChange={(e) =>
              setRowData((prev) => ({
                ...prev,
                portNumber: e.target.value,
              }))
            }
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        );
      },
    },
    { field: 'meterPhonenumber', headerName: 'METER PHONE NUMBER', ...baseStyle },
    { field: 'latitude', headerName: 'LATITUDE', ...baseStyle },
    { field: 'longitude', headerName: 'LONGITUDE', ...baseStyle },
    { field: 'ledgerno', headerName: 'LEDGER NO', ...baseStyle },
    { field: 'billingcycle', headerName: 'BILLING CYCLE', ...baseStyle },
    { field: 'networkmapping', headerName: 'NETWORK MAPPING', ...baseStyle },
    { field: 'metertype', headerName: 'METER TYPE', ...baseStyle },
    { field: 'locationofmeter', headerName: 'LOCATION OF METER', ...baseStyle },
    { field: 'assetno', headerName: 'ASSET NO', ...baseStyle },
    { field: 'billingparameterType', headerName: 'BILLING PARAMETER TYPE', ...baseStyle },
    { field: 'avgUnits', headerName: 'AVERAGE UNITS', ...baseStyle },
    { field: 'meterconnectionType', headerName: 'METER CONNECTION TYPE', ...baseStyle },
    { field: 'maxdemandPercentage', headerName: 'MAX DEMAND %', ...baseStyle },
    { field: 'billingdate', headerName: 'BILLING DATE', ...baseStyle },
    { field: 'overloadLimit', headerName: 'OVERLOAD LIMIT', ...baseStyle },
    { field: 'overcurrentLimit', headerName: 'OVERCURRENT LIMIT', ...baseStyle },
    { field: 'undervoltage', headerName: 'UNDER VOLTAGE', ...baseStyle },
    { field: 'overvoltage', headerName: 'OVER VOLTAGE', ...baseStyle },
    { field: 'profilecapturedperiod', headerName: 'PROFILE CAPTURE PERIOD', ...baseStyle },
    { field: 'topcovertamper', headerName: 'TOP COVER TAMPER', ...baseStyle },
    { field: 'instailKwhreading', headerName: 'INITIAL KWH READING', ...baseStyle },
    { field: 'demandIntigration', headerName: 'DEMAND INTEGRATION', ...baseStyle },
    { field: 'communicationsetting', headerName: 'COMMUNICATION SETTING', ...baseStyle },
    { field: 'reducedmaxdemand', headerName: 'REDUCED MAX DEMAND', ...baseStyle },
    { field: 'insertedDate', headerName: 'INSERTED DATE', ...baseStyle },
    { field: 'realaystatus', headerName: 'RELAY STATUS', ...baseStyle },
    { field: 'happyhoursStart', headerName: 'HAPPY HOURS START', ...baseStyle },
    { field: 'happyhoursEnd', headerName: 'HAPPY HOURS END', ...baseStyle },
    { field: 'emergencyCredit', headerName: 'EMERGENCY CREDIT', ...baseStyle },
    { field: 'instantFreq', headerName: 'INSTANT FREQ', ...baseStyle },
    { field: 'rawFreq', headerName: 'RAW FREQ', ...baseStyle },
    { field: 'alarmFreq', headerName: 'ALARM FREQ', ...baseStyle },
    { field: 'emergencyDays', headerName: 'EMERGENCY DAYS', ...baseStyle },
    { field: 'brownperiodDays', headerName: 'BROWN PERIOD DAYS', ...baseStyle },
    { field: 'gatewayName', headerName: 'GATEWAY NAME', ...baseStyle },
    { field: 'connectionTime', headerName: 'CONNECTION TIME', ...baseStyle },
  ];





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
        Master Data Report
      </Typography>
      <div className="mt-3 mb-3">
        <div className="row align-items-center g-3">


          {/* Select Meter Number */}
          <div className="col-md-3">
            <label htmlFor="meterSelect" className="fw-bold mb-1">
              Select Meter Number:
            </label>
            <Select
              id="meterSelect"
              options={[{ value: "", label: "All" }, ...meterOptions]}
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

        <div className="col-md-3">
          <button
            onClick={() => {
              const tempId = `temp-${Date.now()}`; // generate ID first

              const emptyRow = {
                id: tempId,
                meterNo: "",        // editable fields
                acno: "",
                consumerName: "",
                // Add other required fields here
              };

              setMetersData((prev) => [emptyRow, ...prev]);
              setEditRowId(tempId);   // Set this row as editable
              setNewRowId(tempId);    // Track this new row
              setRowData(emptyRow);   // Initialize form/input state
            }}
            className="btn btn-primary w-50 mt-4 fs-6"
          >
            Add Row
          </button>
        </div>





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

            getRowId={(row) => row.id || row.meterNo}

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

export default MasterData;
