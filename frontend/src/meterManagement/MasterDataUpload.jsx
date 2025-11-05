import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../theme";
import axios from "axios";
import { Typography, Box, Button } from "@mui/material";
import baseURL from "../config";

const MasterDataUpload = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const handleDownloadSample = async () => {
    try {
      const response = await axios.get(`${baseURL}/sample/master-data.xml`, {
        responseType: "blob", // Important to get file data as blob
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "master-data.xls"); // or .xlsx if needed
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed", error);
    }
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/data/meterDataUpload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful!");
    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    } finally {
      setLoading(false);
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
      <Typography variant="h3" fontWeight="bold" className="mb-3">
        Master Data Upload
      </Typography>

      <div className="d-flex align-items-center gap-3">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDownloadSample}
        >
          Download Sample XML
        </Button>

        <input
          type="file"
          accept=".xml"
          onChange={handleFileChange}
          style={{ padding: "6px 12px", border: "1px solid #ccc", borderRadius: 4 }}
        />

        <Button
          variant="contained"
          color="success"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit"}
        </Button>
      </div>
    </Box>
  );
};

export default MasterDataUpload;
