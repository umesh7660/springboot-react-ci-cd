import { useState, useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Grid,
  MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import axios from "axios";
import baseURL from "../../config";

const ProfilePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userObject = JSON.parse(sessionStorage.getItem("userObject")) || {};
  const user = userObject?.user || {};
  const readOnlyFields = [
    "roleId",
    "userStatus",
    "level1Id",
    "createdBy",
    "creationDate",
  ];
  const [roleOptions, setRoleOptions] = useState([]);
  const [profileImage, setProfileImage] = useState("/images/default.jpeg");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const response = await axios.get(`${baseURL}/role/fetchRoles`);
        const formattedRoles = response.data.reduce((acc, role) => {
          acc[role.roleId] = role.roleType;
          return acc;
        }, {});
        setRoleOptions(formattedRoles);
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };
    fetchRoleData();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.grey[1000],
        color: colors.primary[100],
        p: 4,
      }}
    >
      <Typography variant="h4" mb={3}>
        Profile Details
      </Typography>

      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <Avatar
            src={profileImage}
            alt="user-avatar"
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid item>
          {/* <Button
            variant="contained"
            onClick={() => fileInputRef.current.click()}
          >
            Upload New Photo
          </Button> */}
          <input
            type="file"
            ref={fileInputRef}
            hidden
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          userLoginid: user?.id?.userLoginid || "",
          fullName: user.fullName || "",
          emailAddress: user.emailAddress || "",
          cellPhone: user.cellPhone || "",
          city: user.city || "",
          roleId: user.roleId || "",
          userStatus: user.userStatus || "InActive",
          level1Id: user.level1Id || "N/A",
          createdBy: user.createdBy || "N/A",
          creationDate: user.creationDate
            ? dayjs(user.creationDate).format("DD-MM-YYYY HH:mm:ss")
            : "",
        }}
        enableReinitialize
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const formData = new FormData();

            // Convert user details into JSON string and append as 'userDetails'
            const userDetails = {
              userLoginid: values.userLoginid,
              fullName: values.fullName,
              emailAddress: values.emailAddress,
              cellPhone: values.cellPhone,
              city: values.city,
              roleId: values.roleId,
              userStatus: values.userStatus==="InActive"?"":values.userStatus,
              level1Id: values.level1Id==="N/A"?0:values.level1Id,
              createdBy: values.createdBy==="N/A"?"":values.createdBy,
              creationDate: values.creationDate, // Use formatted date
            };

            //console.log("User Details:", userDetails); // Debugging log

            formData.append("userDetails", JSON.stringify(userDetails));
            // Append image file if selected
            if (selectedFile) {
              formData.append("profileImage", selectedFile);
            }
           // console.log("Submitting form data..."); // Debugging log

            const response = await axios.put(
              `${baseURL}/user/updateUserProfile`,
              formData,
              { headers: { "Content-Type": "multipart/form-data" } }
            );

            //console.log("Response received:", response); // Debugging log

            if (response.status === 200) {
              alert("User updated successfully!");
              
              sessionStorage.setItem(
                "userObject",
                JSON.stringify({
                  ...userObject, // Preserve existing data
                  user: { ...userObject.user, ...values }, // Update only the user object
                })
              );
              
            } else {
              alert(`Failed to update user. Status Code: ${response.status}`);
            }
          } catch (error) {
            console.error("Error updating user:", error);
            alert("An error occurred while updating the user.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Grid container spacing={3} mt={3}>
              {[
                { name: "userLoginid", label: "User Login ID" },
                { name: "fullName", label: "Full Name" },
                { name: "emailAddress", label: "Email ID" },
                { name: "cellPhone", label: "Phone Number" },
                { name: "city", label: "City" },
              ].map((field) => (
                <Grid item xs={12} sm={6} key={field.name}>
                  <TextField
                    label={field.label}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: readOnlyFields.includes(field.name),
                    }}
                  />
                  
                </Grid>
              ))}

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Role Type"
                  name="roleId"
                  value={values.roleId}
                  onChange={(e) => setFieldValue("roleId", e.target.value)}
                  fullWidth
                  InputProps={{ readOnly: readOnlyFields.includes("roleId") }}
                  sx={{ backgroundColor: "#f0f0f0", "& .MuiInputBase-input": { color: "#333" } }}
                >
                  {Object.entries(roleOptions).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                      {value}
                    </MenuItem>
                  ))}
                  
                </TextField>
              </Grid>

              {[
                { name: "userStatus", label: "User Status" },
                { name: "level1Id", label: "Level 1 ID" },
                { name: "createdBy", label: "Created By" },
                { name: "creationDate", label: "Creation Date" },
              ].map((field) => (
                <Grid item xs={12} sm={6} key={field.name}>
                  <TextField
                    label={field.label}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    sx={{ backgroundColor: "#f0f0f0", "& .MuiInputBase-input": { color: "#333" } }}
                  />
                </Grid>
              ))}
            </Grid>

            <Box mt={3}>
              <Button type="submit" variant="contained">
                Save Changes
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProfilePage;
