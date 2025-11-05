import React from "react";
import { Formik, Form } from "formik";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import * as Yup from "yup";
import baseURL from "../../config"; // assuming this is your base URL for API calls

const DeviceSettings = () => {
  const [successMessage, setSuccessMessage] = React.useState("");

  const initialValues = {
    metermake: "",
    interface: "",
    password: "",
    systemtitle: "",
    blockcipherkey: "",
    authenticationkey: "",
  };

  // Dynamic options for select fields
  const selectOptions = {
    interface: ["WRAPPER"],
  };

  // Validation Schema
  const validationSchema = Yup.object({
    metermake: Yup.string().required("Required"),
    interface: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    blockcipherkey: Yup.string().required("Required"),
    authenticationkey: Yup.string().required("Required"),
  });

  // Handle form submission

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new URLSearchParams();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      const response = await fetch(`${baseURL}/data/masterConfig`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.text(); // <-- fix is here
      console.log("API Success:", result);
      setSuccessMessage(result); // Show success text from backend
    } catch (error) {
      console.error("API Error:", error);
      setSuccessMessage("Error saving data.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
  
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} md={8} lg={6}>
        {successMessage && (
          <Box
            mt={2}
            p={2}
            border="1px solid green"
            borderRadius="8px"
            bgcolor="#e8f5e9"
          >
            <Typography component="h3" variant="h6" color="green">
              {successMessage}
            </Typography>
          </Box>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                {Object.entries(initialValues).map(([key, value]) => (
                  <Grid item xs={12} key={key}>
                    {typeof value === "boolean" ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={key}
                            checked={values[key]}
                            onChange={handleChange}
                          />
                        }
                        label={key.replace(/([A-Z])/g, " $1").trim()}
                      />
                    ) : selectOptions[key] ? (
                      // Dynamically populated select dropdowns
                      <FormControl fullWidth>
                        <InputLabel id={`${key}-label`}>
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </InputLabel>
                        <Select
                          name={key}
                          value={values[key]}
                          onChange={(event) =>
                            setFieldValue(key, event.target.value)
                          }
                          labelId={`${key}-label`}
                        >
                          <MenuItem value="">Select</MenuItem>
                          {selectOptions[key].map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        fullWidth
                        label={key.replace(/([A-Z])/g, " $1").trim()}
                        name={key}
                        value={values[key]}
                        onChange={handleChange}
                        error={touched[key] && Boolean(errors[key])}
                        helperText={touched[key] && errors[key]}
                      />
                    )}
                  </Grid>
                ))}
                <Grid item xs={12} display="flex" justifyContent="space-between">
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    OK
                  </Button>
                  <Button type="reset" variant="outlined" color="secondary">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>


      </Grid>
    </Grid>
  );
};

export default DeviceSettings;
