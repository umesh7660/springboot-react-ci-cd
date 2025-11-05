import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./userForm.css"; // Import CSS for styling
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from "../../config";
import moment from "moment";

const UserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userObject = JSON.parse(sessionStorage.getItem("userObject")) || {};
  const username = userObject?.user?.id?.userLoginid || "Guest";
  const { userLoginid, userData } = location.state || {};
  // Initialize state with user data
  const [user, setUser] = useState(userData || {});
  const [roleOptions, setRoleOptions] = useState([]);

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];
  // Function to fetch role data
  const fetchRoleData = async () => {
    try {
      const response = await axios.get(`${baseURL}/role/fetchRoles`); // Replace with your actual API endpoint
      const formattedRoles = response.data.map((role) => ({
        label: role.roleType,
        value: role.roleId,
      }));
      setRoleOptions(formattedRoles);
    } catch (error) {
      console.error("Error fetching role data:", error);
    }
  };

  // Fetch user data if editing
  useEffect(() => {
    if (userLoginid) {
      setUser(userData);
    }
    fetchRoleData();
  }, [userLoginid, userData]);

  const submitUser = async (formData) => {
    try {
      await axios.post(`${baseURL}/user/submitUserDetails`, formData, {
        withCredentials: true,
      });
      toast.success("User saved successfully!"); // Optional notification
      navigate("/user-management"); // Redirect after success
    } catch (error) {
      console.error("Error submitting user:", error);
      toast.error("Failed to save user!"); // Optional error message
    }
  };
  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    userLoginid: Yup.string().required("User Login ID is required"),
    fullName: Yup.string().required("Full Name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    emailAddress: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    cellPhone: Yup.string()
      .matches(/^\d{10}$/, "Must be a 10-digit number")
      .required("Cell Phone is required"),
    officeLandline: Yup.string().matches(
      /^\d{8,10}$/,
      "Must be a valid number"
    ),
    city: Yup.string().required("City is required"),
    roleId: Yup.object().nullable().required("Role is required"),
    userStatus: Yup.object().nullable().required("User Status is required"),
  });

  return (
    <Formik
      initialValues={{
        userLoginid: user.userLoginid || "",
        fullName: user.fullName || "",
        password: user.password || "",
        emailAddress: user.emailAddress || "",
        cellPhone: user.cellPhone || "",
        city: user.city || "",
        roleId: roleOptions.find((r) => r.value === user.roleId) || null,
        userStatus:
          statusOptions.find((u) => u.value === user.userStatus) || null,
        createdBy: user.createdBy || username,
        creationDate: user.creationDate
          ? new Date(user.creationDate)
          : new Date(),
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Submitted", values);
        const formattedData = {
          ...values,
          roleId: values.roleId?.value,
          sms: values.sms?.value,
          mail: values.mail?.value,
          userStatus: values.userStatus?.value,
          creationDate: values.creationDate
            ? moment(values.creationDate).format("YYYY-MM-DD HH:mm:ss")
            : null,
        };
        submitUser(formattedData).finally(() => setSubmitting(false));
      }}
      enableReinitialize
    >
      {({ setFieldValue, values, isSubmitting }) => (
        <Form className="user-form">
          <h1 className="text-2xl text-center font-bold mb-6">User Form</h1>
          <div className="form-grid">
            {/* First Column */}
            <div className="form-group">
              <label>User Login ID:</label>
              <Field type="text" name="userLoginid" />
              <ErrorMessage
                name="userLoginid"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>

            <div className="form-group" style={{ position: "relative" }}>
              <label>Password:</label>
              <div style={{ position: "relative" }}>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Second Column */}
            <div className="form-group">
              <label>Email Address:</label>
              <Field type="email" name="emailAddress" />
              <ErrorMessage
                name="emailAddress"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label> Phone Number:</label>
              <Field type="text" name="cellPhone" />
              <ErrorMessage
                name="cellPhone"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <Field type="text" name="city" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Role:</label>
              <Select
                options={roleOptions}
                value={values.roleId || null}
                onChange={(selected) => setFieldValue("roleId", selected)}
              />
              <ErrorMessage name="roleId" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>User Status:</label>
              <Select
                options={statusOptions}
                value={values.userStatus}
                onChange={(selected) => setFieldValue("userStatus", selected)}
              />
              <ErrorMessage
                name="userStatus"
                component="div"
                className="error"
              />
            </div>

            {/* Third Column */}

            <div className="form-group">
              <label>Created By:</label>
              <Field
                type="text"
                name="createdBy"
                readOnly
                style={{
                  backgroundColor: "#f0f0f0",
                  "& .MuiInputBase-input": { color: "#333" },
                }}
              />
            </div>

            <div className="form-group">
              <label>Creation Date:</label>
              <DatePicker
                selected={values.creationDate}
                onChange={(date) => setFieldValue("creationDate", date)}
                showTimeSelect
                dateFormat="yyyy-MM-dd HH:mm:ss"
                readOnly
                customInput={
                  <input
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                    readOnly
                  />
                }
              />
            </div>
          </div>
          <div className="form-footer">
            <button
              type="button"
              style={{
                backgroundColor: " #dc3545",
                color: "white",
                padding: " 12px 20px",
                border: "none",
                marginRight: "20px",
                cursor: "pointer",
                borderRadius: " 5px",
              }}
              onClick={() => navigate("/user-management")}
            >
              Discard
            </button>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
