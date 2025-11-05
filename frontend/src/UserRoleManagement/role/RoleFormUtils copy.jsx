import React from "react";
import { Formik, Form } from "formik";
import RoleFormUtils from "./RoleFormUtils"; // Import RoleFormUtils

const initialValues = {
  roleName: "",
  reports: [],
  charts: [],
  onDemand: []
};

const RoleForm = () => {
  const handleSubmit = (values) => {
    console.log("Submitted Values:", values);
    alert("Role Saved Successfully!");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="p-4 max-w-xl mx-auto border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Role Form</h2>

          {/* Role Name Input */}
          <label className="block font-medium">Role Name:</label>
          <input
            type="text"
            name="roleName"
            value={values.roleName}
            onChange={(e) => setFieldValue("roleName", e.target.value)}
            className="border px-2 py-1 w-full mb-3"
          />

          {/* Pass Formik Values and SetFieldValue to RoleFormUtils */}
          <RoleFormUtils
            values={values}
            setFieldValue={setFieldValue}
            data={mockData} // Replace this with actual API data
          />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Role
          </button>
        </Form>
      )}
    </Formik>
  );
};

// Mock Data Example (Replace with API response)
const mockData = {
  reportList: [
    {
      name: "Non Billing Interval Data",
      module_Name: "analogics/reports/nonbillingexport",
      subitems: [
        { name: "Monthly Tod Profile", module_Name: "analogics/reports/monthly-tod" },
        { name: "Zero Consumption Report", module_Name: "analogics/reports/zero-consumption" }
      ]
    },
    {
      name: "Query Builder Report",
      module_Name: "analogics/reports/query-builder-data",
      subitems: []
    }
  ],
  chartsAndAnalysisList: [
    { name: "Chart 1", module_Name: "analogics/charts/chart1" },
    { name: "Chart 2", module_Name: "analogics/charts/chart2" }
  ],
  onDemandRequestList: [
    { name: "On Demand 1", module_Name: "analogics/demand/demand1" },
    { name: "On Demand 2", module_Name: "analogics/demand/demand2" }
  ]
};

export default RoleForm;
