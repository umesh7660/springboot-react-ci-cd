import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";
import axios from "axios";
import { Grid, CircularProgress, Button, Paper, Typography,Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import baseURL from "../../config";
import AddIcon from "@mui/icons-material/Add";

const RoleManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [roleData, setRoleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(10);
  
  const fetchRolessData = async () => {
    if (isFetched.current) return;
    isFetched.current = true;
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/role/fetchRoles`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setRoleData(response.data || []);
    } catch (error) {
      console.error("API Error fetching Roles:", error);
      setRoleData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRolessData();
  }, []);

  
  const createNewRole = async () => {
    try {
      // Fetch user details
      const response = await axios.get(`${baseURL}/role/createNavbarheaderMapping`);
      const createRoleData = response.data;
     //const createRoleData = mockdata;
      // Navigate to UserForm and pass userId & userData
      navigate("/role-form", { state: {createRoleData } });
    } catch (error) {
      console.error("Error fetching edit role data:", error);
    }
  };
  const editRole = async (roleId,rollName) => {
    try {
      // Fetch user details
      const response = await axios.get(`${baseURL}/role/editNavbarheaderMapping?roleId=${roleId}`);
      const roleData = response.data;
      // Navigate to UserForm and pass userId & userData
      navigate("/role-form", { state: { roleId,rollName, roleData } });
    } catch (error) {
      console.error("Error fetching edit role data:", error);
    }
  };

  const deleteRole = async (roleId) => {
    if (!window.confirm("Are you sure you want to delete this role?")) return;

    try {
      await axios.delete(`${baseURL}/role/deleteRole?roleId=${roleId}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      // Remove deleted user from state
      setRoleData((prevRoles) => prevRoles.filter((role) => role.roleId !== roleId));
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };
  const generateColumns = (data, navigate) => {
    if (!data.length) return [];
    const keys = [...new Set(data.flatMap((row) => Object.keys(row)))];

    // Define the Actions column
    const actionsColumn = {
      field: "actions",
      headerName: "ACTIONS",
      width: 180,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => editRole(params.row.roleId,params.row.roleType)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deleteRole(params.row.roleId)}
          >
            Delete
          </Button>
        </div>
      ),
    };

    // Generate dynamic columns
    const columns = keys.map((key) => ({
      field: key,
      headerName: key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase(),
      width: 200,
      align: "center",
       headerAlign: "center",
      renderCell: (params) =>
       /* key === "roleId" ? (
          <span
            onClick={() =>
              navigate("/role-page", { state: { roleId: params.value } })
            }
            style={{
              textDecoration: "none",
              color: "blue",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {String(params.value)}
          </span>
        ) : */
        (
          params.row[key] || "N/A"
        ),
    }));

    // Add actions column as the first column
    return [actionsColumn, ...columns];
  };

  const columns = generateColumns(roleData, navigate);

  return (
    <Box
      sx={{
        backgroundColor: colors.grey[1000],
        color: colors.primary[100],
        p: 4,
      }}
    >
       <Typography variant="h3" fontWeight="bold" className='mb-3'>
          Role Management
        </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: colors.primary[400],
          color: colors.primary[100],
        }}
      >
         <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Role's Data
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={createNewRole}
        >
          Add Role
        </Button>
        </Box>
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
            rows={roleData}
            columns={columns}
            autoHeight
            getRowId={(row) => row?.roleId ?? `temp-${Math.random()}`}
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

export default RoleManagement;
