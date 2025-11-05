import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import baseURL from "../../config";

const validationSchema = Yup.object({
  meterNo: Yup.string().required("Meter No is required"),
  consumerName: Yup.string().required("Consumer Name is required"),
  insertedDate: Yup.date().required("Date is required"),
  mobileNo: Yup.string().required("Mobile No is required"),
});

const RegisterEditMeter = () => {
  const [file, setFile] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { meterObject} = location.state || {};

  const formik = useFormik({
    initialValues: {
      meterNo: meterObject?.meterNo || "",
      modemNumber: meterObject?.modemNumber || "",
      consumerNo: meterObject?.consumerNo || "",
      consumerName: meterObject?.consumerName || "",
      address: meterObject?.address || "",
      substationName: meterObject?.substationName || "",
      substationCode: meterObject?.substationCode || "",
      feederCode: meterObject?.feederCode || "",
      feederName: meterObject?.feederName || "",
      modemMdn: meterObject?.modemMdn || "",
      simProviderName: meterObject?.simProviderName || "",
      mobileNo: meterObject?.mobileNo || "",
      portNumber: meterObject?.portNumber || "",
      meterPhonenumber: meterObject?.meterPhonenumber || "",
      metertype: meterObject?.metertype || "",
      insertedDate: meterObject?.insertedDate
        ? new Date(meterObject.insertedDate)
        : null,
      category: meterObject?.category || "",
      subCategory: meterObject?.subCategory || "",
      cdKva: meterObject?.cdKva || "",
      mf: meterObject?.mf || "",
      make: meterObject?.make || "",
      phase: meterObject?.phase || "",
      level1Id: meterObject?.level1Id || "",
      level2Id: meterObject?.level2Id || "",
      level3Id: meterObject?.level3Id || "",
      level4Id: meterObject?.level4Id || "",
      level5Id: meterObject?.level5Id || "",
      level1Code: meterObject?.level1Code || "",
      level2Code: meterObject?.level2Code || "",
      level3Code: meterObject?.level3Code || "",
      level4Code: meterObject?.level4Code || "",
      level5Code: meterObject?.level5Code || "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${baseURL}/SubmitMeter`, values);
        console.log("API Response:", response.data);
        alert("Meter submitted successfully!");
        resetForm();
      } catch (error) {
        console.error("Error submitting meter:", error);
        alert("Failed to submit meter. Please try again.");
      }
    },
  });

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.name.split(".").pop();
      if (fileType === "xls" || fileType === "xlsx") {
        setFile(selectedFile);
      } else {
        alert("Please upload a valid Excel file (.xls, .xlsx)");
        setFile(null);
      }
    }
  };

  // Upload file to the server
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select an Excel file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${baseURL}/UploadMeterExcel`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("File Upload Response:", response.data);
      alert("File uploaded successfully!");
      setFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
    }
  };

  return (
    <>
      <h2 className="m-4">{meterObject ? "Edit Meter" : "Add Meter"}</h2>

      {!meterObject && (
        <div className="form-container items-center ml-2 mr-2">
          <h3 className="text-lg mb-2">Upload File</h3>
          <div className="flex flex-col gap-4 items-center">
            <input
              type="file"
              accept=".xls,.xlsx"
              onChange={handleFileChange}
              className="border p-2 rounded w-100"
            />
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              className="bg-blue-500 rounded shadow-lg text-white hover:bg-blue-700 px-6 py-2"
              variant="contained"
              onClick={handleFileUpload}
              disabled={!file}
              style={{ width: "10%" }}
            >
              Upload
            </Button>
          </div>
        </div>
      )}

      <div className="form-container m-2">
        <h3 className="form-title mb-2">
          {meterObject ? "Edit Form" : "Add Form"}
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div
            className="form-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            {Object.keys(formik.values).map((field) => (
              <div
                key={field}
                className="form-field"
                style={{ flex: "1 1 calc(25% - 10px)", minWidth: "250px" }}
              >
                <label
                  className="form-label"
                  htmlFor={field}
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  {field.replace(/([A-Z])/g, " $1")}
                </label>

                {field.includes("Date") ? (
                  <DatePicker
                    placeholderText="Select Date"
                    selected={formik.values[field]}
                    onChange={(date) => formik.setFieldValue(field, date)}
                    className="form-input"
                    dateFormat="yyyy-MM-dd"
                  />
                ) : field === "category" ||
                  field === "subCategory" ||
                  field === "metertype" ? (
                  <Select
                    options={[
                      { label: "Option 1", value: "option1" },
                      { label: "Option 2", value: "option2" },
                    ]}
                    value={{
                      label: formik.values[field],
                      value: formik.values[field],
                    }}
                    onChange={(option) =>
                      formik.setFieldValue(field, option.value)
                    }
                    className="form-input"
                  />
                ) : (
                  <TextField
                    id={field}
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched[field] && Boolean(formik.errors[field])
                    }
                    helperText={formik.touched[field] && formik.errors[field]}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: {
                        height: "40px",
                        width: "100%",
                        fontSize: "16px",
                      },
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex form-actions justify-center mt-4">
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                {meterObject ? "Update Meter" : "Add Meter"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterEditMeter;
