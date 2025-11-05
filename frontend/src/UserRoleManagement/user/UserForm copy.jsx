import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./userForm.css"; // Import CSS for styling
import axios from "axios";
import baseURL from "../../config";

const UserForm = ({ userId, initialData }) => {
  const [user, setUser] = useState(initialData || {});
  const navigate = useNavigate();
  // Role options
  const roleOptions = [
    { label: "Admin", value: 101 },
    { label: "User", value: 102 },
    { label: "Manager", value: 103 },
  ];

  // SMS, Mail, and Status options
  const selectOptions = [
    { label: "Enable", value: "Enable" },
    { label: "Disable", value: "Disable" },
  ];

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  // Fetch user data if editing
  useEffect(() => {
    if (userId) {
      setUser(initialData);
    }
  }, [userId, initialData]);

  const submitUser = async (formData) => {
    try {
      const response = await axios.post(
        `${baseURL}/user/submitUserDetails`,
        formData
      );
      if (response.status === 200) {
        navigate("/user-management"); // Redirect after success
      }
    } catch (error) {
      console.error("Error submitting user:", error);
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
    officeAddress: Yup.string().required("Office Address is required"),
    department: Yup.string().required("Department is required"),
    city: Yup.string().required("City is required"),
    roleId: Yup.object().required("Role is required"),
    sms: Yup.object().required("SMS preference is required"),
    mail: Yup.object().required("Mail preference is required"),
    userStatus: Yup.object().required("User Status is required"),
    creationDate: Yup.date().required("Creation Date is required"),
  });

  return (
    <Formik
      initialValues={{
        userId: user.userId || "",
        userLoginid: user.userLoginid || "",
        fullName: user.fullName || "",
        password: user.password || "",
        emailAddress: user.emailAddress || "",
        cellPhone: user.cellPhone || "",
        officeLandline: user.officeLandline || "",
        officeAddress: user.officeAddress || "",
        department: user.department || "",
        city: user.city || "",
        roleId: roleOptions.find((r) => r.value === user.roleId) || null,
        sms: selectOptions.find((s) => s.value === user.sms) || null,
        mail: selectOptions.find((m) => m.value === user.mail) || null,
        userStatus:
          statusOptions.find((u) => u.value === user.userStatus) || null,
        creationDate: user.creationDate
          ? new Date(user.creationDate)
          : new Date(),
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
        const formattedData = {
          ...values,
          roleId: values.roleId?.value,
          sms: values.sms?.value,
          mail: values.mail?.value,
          userStatus: values.userStatus?.value,
          creationDate: values.creationDate.toISOString().split("T")[0],
        };
        submitUser(formattedData);
      }}
      enableReinitialize
    >
      {({ setFieldValue, values }) => (
        <Form className="user-form">
          <h1 className="text-2xl font-bold text-center mb-6">User Form</h1>
          <div className="form-grid">
            {/* First Column */}
            <div className="form-group">
              <label>User ID:</label>
              <Field type="text" name="userId" readOnly />
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
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
              <label>Password:</label>
              <Field type="password" name="password" />
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
              <label>Office Landline:</label>
              <Field type="text" name="officeLandline" />
              <ErrorMessage
                name="officeLandline"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label>Office Address:</label>
              <Field type="text" name="officeAddress" />
              <ErrorMessage
                name="officeAddress"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label>Department:</label>
              <Field type="text" name="department" />
              <ErrorMessage
                name="department"
                component="div"
                className="error"
              />
            </div>

            {/* Third Column */}
            <div className="form-group">
              <label>City:</label>
              <Field type="text" name="city" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Role:</label>
              <Select
                options={roleOptions}
                value={values.roleId}
                onChange={(selected) => setFieldValue("roleId", selected)}
              />
              <ErrorMessage name="roleId" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>SMS:</label>
              <Select
                options={selectOptions}
                value={values.sms}
                onChange={(selected) => setFieldValue("sms", selected)}
              />
              <ErrorMessage name="sms" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Mail:</label>
              <Select
                options={selectOptions}
                value={values.mail}
                onChange={(selected) => setFieldValue("mail", selected)}
              />
              <ErrorMessage name="mail" component="div" className="error" />
            </div>

            {/* Fourth Column */}
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

            <div className="form-group">
              <label>Creation Date:</label>
              <DatePicker
                selected={values.creationDate}
                onChange={(date) => setFieldValue("creationDate", date)}
              />
              <ErrorMessage
                name="creationDate"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="form-footer">
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
