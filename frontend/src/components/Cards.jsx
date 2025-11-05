import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardHeader, CardContent,  Typography, Grid, Dialog, IconButton, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { tokens } from "../theme";
import { CircularProgress } from "@mui/material";

const MediaCard = ({ title, meters, total, percentage, totalUrl, commuUrl }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const [pageSize, setPageSize] = useState(10);
  const handleClick = async (url) => {
    setLoading(true);
    try {
       setDialogOpen(true);
      const response = await axios.get(url);
      setDialogData(Array.isArray(response.data) ? response.data : []);
     
    } catch (error) {
      console.error("Error fetching data:", error);
      setDialogData([]);
    }finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
    setDialogData([]);
  };

  const generateColumns = (data, navigate) => {
    if (!data.length) return [];
  
    const keys = [...new Set(data.flatMap(Object.keys))];
  
    return keys.map((key) => ({
      field: key,
      headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        if (key === "meterNo") {
          return (
            <span
              onClick={() =>{
                 sessionStorage.setItem("meterNumber", params.value );
                navigate("/singleMeter", { state: { meterNo: params.value } })}}
              style={{ textDecoration: "none", color: "blue", fontWeight: "bold", cursor: "pointer" }}
            >
              {String(params.value)}
            </span>
          );
        }
        return params.row[key] || "0";
      },
    }));
  };
  const CountDialog = ({ open, onClose, labelName, dialogData, columns, loading }) => (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
    <CustomDialogTitle onClose={onClose} sx={{ fontWeight: 'bold', fontSize: '20px' }}>
    {`${labelName} Details`}
  </CustomDialogTitle>
  
      <DialogContent>
        {loading ? ( 
          <Grid container justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
            <CircularProgress />
          </Grid>
        ) : (
          <div style={{ height: "70vh", width: "100%" }}>
          <DataGrid 
          rows={dialogData} 
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
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
  const CustomDialogTitle = ({ children, onClose, sx }) => (
    <DialogTitle sx={{ m: 0, p: 2, fontWeight: "bold", fontSize: "20px", ...sx }}>
      {children}
      <IconButton 
        aria-label="close" 
        onClick={onClose} 
        sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
  
  return (
    <>
      <Card
  sx={{
    margin: "5px",
    textAlign: "center",
    padding: "5px",
    background: colors.primary[400],
    color: colors.primary[100],
    border: "0.01px solid white",
    borderRadius: "8px",
    minHeight: "50px", // ✅ Prevents unexpected height increase
    maxHeight: "120px", // ✅ Limits max height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // ✅ Ensures proper spacing
  }}
>
  <CardHeader
    title={
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: "10px" }}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    }
    sx={{ padding: "8px" }} // ✅ Reduced padding
  />
  <CardContent sx={{ padding: "10px" }}>
    <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick(commuUrl);
        }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {meters}
      </Link>
      {" / "}
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick(totalUrl);
        }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {total}
      </Link>
    </Typography>
    <Typography sx={{ marginTop: "5px", fontSize: "0.85rem" }} variant="body2" color="text.secondary">
      {percentage}% of meters
    </Typography>
  </CardContent>
</Card>

      <CountDialog open={dialogOpen} onClose={handleClose} 
      labelName={title} dialogData={dialogData} columns={generateColumns(dialogData,navigate)}
      loading={loading}
       />
    </>
  );
};

export default MediaCard;
