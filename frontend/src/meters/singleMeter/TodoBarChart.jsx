import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const ToDoBarChart = ({ data = {}, labelName, dataKeys }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const labels = ["TOTAL","TOD1", "TOD2", "TOD3", "TOD4", "TOD5", "TOD6", "TOD7", "TOD8"];
  
  const backgroundColors = [
    "#58d68d", "#ec7063", "#66B2FF", "#f4d03f",
    "#8e44ad", "#2e4053", "#e67e22", "#16a085"
  ];
  
  const hoverColors = [
    "#00C853", "#D32F2F", "#1976D2", "#FBC02D",
    "#6A1B9A", "#1B2631", "#D35400", "#0E6655"
  ];

  // Map dataKeys to their respective values in the data object
 // const datasetValues = data.length > 0 ? dataKeys.map((key) => data[0][key] || 0) : [];
  const datasetValues = data.length > 0 ? dataKeys.map((key) => Number(data[0][key]) || 0) : [];

  // Compute total
  const total = datasetValues.reduce((sum, value) => sum + value, 0);
  
  const finalDatasetValues = [total, ...datasetValues]
  const datasets = [
    {
      label: "",
      data: finalDatasetValues, // Correctly mapped data
      backgroundColor: backgroundColors,
      hoverBackgroundColor: hoverColors,
    }
  ];
 
  const chartData = { labels, datasets };

  return (
    <div style={{ width: "700px", margin: "0 auto", textAlign: "center" }}>
      <h4>{labelName ? labelName.toUpperCase() : "TODS"}</h4>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            datalabels: { display: false },
            legend: { display: true ,position:'bottom'},
            tooltip: { enabled: true },
          },
          scales: {
            x: { },
            y: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
};

export default ToDoBarChart;
