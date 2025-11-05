import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS

const YourComponent = () => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [selectedMeter, setSelectedMeter] = useState("");
  const [meterOptions] = useState([
    { value: "meter1", label: "Meter 1" },
    { value: "meter2", label: "Meter 2" },
  ]);

  // Handle date range change
  const handleDateChange = (dates) => {
    setDates(dates);
  };

  // API call logic
  const handleSubmit = () => {
    console.log("API call with Meter Number:", selectedMeter);
    console.log("Selected Dates:", dates);
  };

  // Export logic
  const handleExport = () => {
    console.log("Exporting data...");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Date Range Picker */}
      <div>
        <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
          Select Date Range:
        </label>
        <DatePicker
          selected={dates[0]}
          onChange={handleDateChange}
          startDate={dates[0]}
          endDate={dates[1]}
          selectsRange
          dateFormat="MM/dd/yyyy"
          placeholderText="Select date range"
          isClearable={true}
          maxDate={new Date()}
          style={{ width: "100%" }}
        />
      </div>

      {/* Select Meter Number */}
      <div>
        <label htmlFor="meterSelect" style={{ marginBottom: "5px", fontWeight: "bold" }}>
          Select Meter Number:
        </label>
        <Select
          id="meterSelect"
          options={meterOptions}
          value={meterOptions.find((option) => option.value === selectedMeter)}
          onChange={(selectedOption) => setSelectedMeter(selectedOption?.value || "")}
          isSearchable={true}
          placeholder="Select a meter..."
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleSubmit}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>

        <button
          onClick={handleExport}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
