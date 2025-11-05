import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";
import axios from "axios";
import { Grid, CircularProgress, Button ,Dialog, DialogTitle, DialogContent, DialogActions,IconButton} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import baseURL from "../../config";
import AddIcon from "@mui/icons-material/Add";
import UserForm from "./UserForm";
import CloseIcon from "@mui/icons-material/Close";

const UserManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);  // State to control modal visibility
  const [editUserData, setEditUserData] = useState(null);
  const [userId, setUserId] = useState(null);

  const fetchUsersData = async () => {
    if (isFetched.current) return;
    isFetched.current = true;
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/user/fetchUsers`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setUsersData(response.data || []);
    } catch (error) {
      console.error("API Error (Meter Counts):", error);
      setUsersData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);
  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`${baseURL}/user/deleteUser?userId=${userId}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      // Remove deleted user from state
      setUsersData((prevUsers) =>
        prevUsers.filter((user) => user.userId !== userId)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const editUser = async (id) => {
    try {
      const response = await axios.get(`/api/editUser/${id}`);
      setUserId(id);
      setEditUserData(response.data);
      setOpen(true); // Open modal
    } catch (error) {
      setUserId(id);
      setEditUserData({});
      setOpen(true); 
      console.error("Error fetching user data:", error);
    }
  };
  const handleClose = () => setOpen(false);
  const generateColumns = (data, navigate) => {
    if (!data.length) return [];
    const keys = [...new Set(data.flatMap((row) => Object.keys(row)))];

    // Define the Actions column
    const actionsColumn = {
      field: "actions",
      headerName: "Actions",
      width: 180,
      align: "center",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => editUser(params.row.userId)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => deleteUser(params.row.userId)}
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
      renderCell: (params) =>
        key === "userId" ? (
          <span
            onClick={() =>
              navigate("/userProfile", { state: { userId: params.value } })
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
        ) : (
          params.row[key] || "N/A"
        ),
    }));

    // Add actions column as the first column
    return [actionsColumn, ...columns];
  };

  const columns = generateColumns(userData, navigate);

  return (
    <>
    <div
      className="container-fluid p-4"
      style={{ background: colors.grey[1000], color: colors.primary[100] }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">User Management</h2>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 mb-4">
          <div
            className="card shadow-sm p-3"
            style={{
              background: colors.primary[400],
              color: colors.primary[100],
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title fw-bold">Users Data</h5>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => navigate("/user-form")}
              >
                Create User
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "4px",
              }}
            >
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
                    rows={userData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    getRowId={(row, index) =>
                      row.userId || row.id || `temp-${index}`
                    }
                    pageSize={10}
                    checkboxSelection
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Dialog Component */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth 
        maxWidth="lg" 
        sx={{ "& .MuiDialog-paper": { height: "80vh", overflowY: "visible" } }} // Allow background scrolling
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Edit User
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Scrollable Form */}
        <DialogContent dividers sx={{ maxHeight: "65vh", overflowY: "auto" }}>
          {editUserData && <UserForm userId={userId} initialData={editUserData} />}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserManagement;
