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
  Card,
  CardContent,
  Typography,
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

const EventsChart1 = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [tamperData, setTamperData] = useState([]);
  const [tampersCount, setTampersCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
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
          }))
        );
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);
console.log(tampersCount);
  const handleClose = () => {
    setOpen(false);
    setTamperData([]);
  };

  const fetchTemper = async (tamperCode, tamperName) => {
    if (!tamperCode) return;

    setSelectedData(tamperName);
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

  const columns =
    tamperData.length > 0
      ? Object.keys(tamperData[0]).map((key) => ({
          field: key,
          headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
          width: 200,
          align: "center",
          headerAlign: "center",
          renderCell: (params) => {
            return params.value || "0";
          },
        }))
      : [];

  const labels = [
    "Power Fail",
    "HG Fuse Blow",
    "LT Fuse Blow",
    "Current Unbalance ",
    "Over Load",
  ];
const codes=[101,9,57,63,7]
  return (
    <>
      <div style={{ height: "300px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",height:"300px", gap: "10px"}}>
      {labels.map((label, index)=> (
        <Card
          key={index}
          sx={{ textAlign: "center", cursor: "pointer", transition: "0.3s", '&:hover': { boxShadow: 6 } }}
          onClick={() => fetchTemper(codes?.[index], tampersCount?.[index]?.tamperName)}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <Typography variant="h6" fontWeight="bold">
              {label} ({tampersCount?.[index]?.tamperCount ?? "0"})
            </Typography>
            </Typography>
            
          </CardContent>
        </Card>
      ))}
    </div>
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

export default EventsChart1;
