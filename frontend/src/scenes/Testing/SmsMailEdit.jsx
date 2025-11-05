import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const statusOptions = [
  { label: "Enabled", value: true },
  { label: "Disabled", value: false },
];

const SmsMailEdit = ({ value, onChange, field }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{field === "sms" ? "SMS Notifications" : "Mail Notifications"}</InputLabel>
      <Select
        value={value ?? false} // Ensure it defaults to a valid value
        onChange={(e) => onChange(e.target.value)}
      >
        {statusOptions.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SmsMailEdit;
