import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  useMaterialReactTable,
  MaterialReactTable,
  MRT_EditActionButtons,
} from "material-react-table";
import useCreateUser from "../../UserRoleManagement/user/useCreateUser";
import useUpdateUser from "../../UserRoleManagement/user/useUpdateUser";
import useDeleteUser from "../../UserRoleManagement/user/useDeleteUser";
import useGetUsers from "../../UserRoleManagement/user/useGetUsers";
import SmsMailEdit from "../../UserRoleManagement/user/SmsMailEdit";

const Example1 = () => {
  const [validationErrors, setValidationErrors] = useState({});
  // Get the logged-in user from session storage
  const loggedInUser = sessionStorage.getItem("username") || "Unknown User";
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "userId",
        header: "User ID",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "fullName",
        header: "Full Name",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors.fullName,
          helperText: validationErrors.fullName,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, fullName: undefined }),
        },
      },
      {
        accessorKey: "userLoginid",
        header: "Login ID",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors.userLoginid,
          helperText: validationErrors.userLoginid,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              userLoginid: undefined,
            }),
        },
      },
      {
        accessorKey: "password",
        header: "Password",
        muiEditTextFieldProps: {
          type: "password",
          required: true,
          error: !!validationErrors.password,
          helperText: validationErrors.password,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, password: undefined }),
        },
      },
      {
        accessorKey: "emailAddress",
        header: "Email",
        muiEditTextFieldProps: {
          type: "email",
          required: true,
          error: !!validationErrors.emailAddress,
          helperText: validationErrors.emailAddress,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              emailAddress: undefined,
            }),
        },
      },
      {
        accessorKey: "cellPhone",
        header: "Cell Phone",
        muiEditTextFieldProps: {
          type: "tel",
          required: true,
          error: !!validationErrors.cellPhone,
          helperText: validationErrors.cellPhone,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, cellPhone: undefined }),
        },
      },
      {
        accessorKey: "officeLandline",
        header: "Office Landline",
        muiEditTextFieldProps: {
          type: "tel",
          error: !!validationErrors.officeLandline,
          helperText: validationErrors.officeLandline,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              officeLandline: undefined,
            }),
        },
      },
      {
        accessorKey: "officeAddress",
        header: "Office Address",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors.officeAddress,
          helperText: validationErrors.officeAddress,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              officeAddress: undefined,
            }),
        },
      },
      {
        accessorKey: "department",
        header: "Department",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors.department,
          helperText: validationErrors.department,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, department: undefined }),
        },
      },
      {
        accessorKey: "city",
        header: "City",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors.city,
          helperText: validationErrors.city,
          onFocus: () =>
            setValidationErrors({ ...validationErrors, city: undefined }),
        },
      },
      {
        accessorKey: "roleId",
        header: "Role ID",
        enableEditing: true,
        size: 80,
      },
      {
        accessorKey: "roleType",
        header: "Role Type",
        editVariant: "select",
        editSelectOptions: ["Admin", "User", "Manager"],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors.roleType,
          helperText: validationErrors.roleType,
        },
      },
     
      {
        accessorKey: "sms",
        header: "SMS Notifications",
        Cell: ({ row }) => (row.original.sms ? "Enabled" : "Disabled"),
        EditComponent: ({ row, table }) => (
          <SmsMailEdit
            value={row.getValue("sms")} // Use getValue to ensure proper data retrieval
            onChange={(newValue) =>
              table.setEditingRowValue(row.id, { sms: newValue })
            }
            field="sms"
          />
        ),
        editVariant: "select",
        editSelectOptions: ["true", "false"],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors.userStatus,
          helperText: validationErrors.userStatus,
        },
      },
      {
        accessorKey: "mail",
        header: "Mail Notifications",
        Cell: ({ row }) => (row.original.mail ? "Enabled" : "Disabled"),
        EditComponent: ({ row, table }) => (
          <SmsMailEdit
            value={row.getValue("mail")}
            onChange={(newValue) =>
              table.setEditingRowValue(row.id, { mail: newValue })
            }
            field="mail"
          />
        ),
        editVariant: "select",
        editSelectOptions: ["true", "false"],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors.userStatus,
          helperText: validationErrors.userStatus,
        },
      },

      {
        accessorKey: "userStatus",
        header: "Status",
        editVariant: "select",
        editSelectOptions: ["Active", "Inactive"],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors.userStatus,
          helperText: validationErrors.userStatus,
        },
      },
      {
        accessorKey: "createdBy",
        header: "Created By",
        enableEditing: false,
        size: 150,
        Cell: ({ row }) => {
          return row.original.createdBy;
        },
      },
      {
        accessorKey: "creationDate",
        header: "Creation Date",
        enableEditing: false, // Disable editing
        size: 150,
        muiEditTextFieldProps: ({ row }) => {
          const formatDateToLocal = (date) => {
            if (!date) return "";
            const localDate = new Date(date);
            const offset = localDate.getTimezoneOffset() * 60000; // Convert offset to milliseconds
            return new Date(localDate - offset).toISOString().slice(0, 19); // Format: YYYY-MM-DDTHH:mm:ss
          };

          return {
            type: "datetime-local",
            required: true,
            value:
              formatDateToLocal(row?.original?.creationDate) ||
              formatDateToLocal(new Date()),
            inputProps: {
              step: 1, // Allows selecting seconds
            },
          };
        },
      },
    ],
    [validationErrors]
  );

  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

    const handleCreateUser = async ({ values, table }) => {
      const newValidationErrors = validateUser(values);
    
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      setValidationErrors({});
     
      await createUser(values);
      table.setCreatingRow(false);
    };
    
  const handleSaveUser = async ({ values, table }) => {
    debugger
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null);
  };

  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? { color: "error", children: "Error loading data" }
      : undefined,
    muiTableContainerProps: { sx: { minHeight: "500px" } },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
  
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => {
      row.original.createdBy = loggedInUser
     return ( <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
     );
    },
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => {
     
      return(
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    )},
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant="contained" onClick={() => table.setCreatingRow(true)}>
        Create New User
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example1;
const validateRequired = (value) =>
  value !== undefined && value !== null && value.toString().trim().length > 0;

const validateEmail = (email) =>
  validateRequired(email) &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

function validateUser(user) {
  
  return {
    fullName: !validateRequired(user.fullName) ? "Full Name is Required" : "",
    password: !validateRequired(user.password) ? "Password is Required" : "",
    emailAddress: !validateEmail(user.emailAddress)
      ? "Incorrect Email Format"
      : "",
    cellPhone: !validateRequired(user.cellPhone)
      ? "Cell Phone is Required"
      : "",
    officeAddress: !validateRequired(user.officeAddress)
      ? "Office Address is Required"
      : "",
    department: !validateRequired(user.department)
      ? "Department is Required"
      : "",
    city: !validateRequired(user.city) ? "City is Required" : "",
    roleType: !validateRequired(user.roleType) ? "Role Type is Required" : "",
    userStatus: !validateRequired(user.userStatus)
      ? "User Status is Required"
      : "",
  };
}
