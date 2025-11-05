import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const LoadSurveyChart = ({ data }) => {
   const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  if (!data || data.length === 0) 
    return <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>No data available</p>;

  const transformedData = data
    .map(entry => entry.lsDatetime ? ({
      time: new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date(entry.lsDatetime)),
      
      vr: entry.voltageRPhase ?? 0,
      vy: entry.voltageYPhase ?? 0,
      vb: entry.voltageBPhase ?? 0,
      cr: entry.currentRPhase ?? 0,
      cy: entry.currentYPhase ?? 0,
      cb: entry.currentBPhase ?? 0,
      aimportValue: entry.kwhImport ?? 0,
      aexportValue: entry.kwhExport ?? 0,
      apimportValue: entry.kvahImport ?? 0,
      apexportValue: entry.kvahExport ?? 0,
    }) : null)
    .filter(Boolean);



    const voltagechartOptions = {
      responsive: true,
      maintainAspectRatio: false, // Ensures the chart fills its container
      plugins: {
        legend: { position: "bottom" },
        title: { display: false },
        datalabels: { display: false }
      },
      scales: {
        x: {
          title: { display: true, text: "Time" }
        },
        y: {
          title: { display: true, text: "Values" },
          beginAtZero: true,
          min: 0,
          max: 350,
          ticks: { stepSize: 50 }
        }
      },
      animation: {
        duration: 1000,
        easing: "easeInOutQuart"
      }
    };
    
  
  
    const currentchartOptions = {
      responsive: true,
      maintainAspectRatio: false, // Ensures the chart fills its container
      plugins: {
        legend: { position: "bottom" },
        title: { display: false },
        datalabels: { display: false }
      },
      scales: {
        x: {
          title: { display: true, text: "Time" }
        },
        y: {
          title: { display: true, text: "Values" },
          beginAtZero: true,
          min: 0,
          max: 50,
          ticks: { stepSize: 5 }
        }
      },
      animation: {
        duration: 1000,
        easing: "easeInOutQuart"
      }
    };
    
  
    const achartOptions = {
      responsive: true,
      maintainAspectRatio: false, // Ensures the chart fills its container
      plugins: {
        legend: { position: "bottom" },
        title: { display: false },
        datalabels: { display: false }
      },
      scales: {
        x: {
          title: { display: true, text: "Time" }
        },
        y: {
          title: { display: true, text: "Values" },
          beginAtZero: true,
          min: 0,
          max: 20,
          ticks: { stepSize: 5 }
        }
      },
      animation: {
        duration: 1000,
        easing: "easeInOutQuart"
      }
    };
    
  
  
  
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false, // Ensures the chart fills its container
      plugins: { legend: { position: "bottom" }, 
      title: { display: false }, datalabels: { display: false } },
      scales: { x: { title: { display: true, text: "Time" } },
       y: { title: { display: true, text: "Values" } } },
      animation: { duration: 1000, easing: "easeInOutQuart" },
    };

  const createChartData = (datasets) => ({
    labels: transformedData.map((entry) => entry.time),
    datasets: datasets.map(
      ({ label, dataKey, borderColor, backgroundColor, fill }) => ({
        label,
        data: transformedData.map((entry) => entry[dataKey]),
        borderColor,
        backgroundColor,
        fill: fill || false,
      })
    ),
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {[
        {
          title: "Voltage Graph",
          type: Line,
          options: voltagechartOptions,

          datasets: [
            { label: "R Phase Voltage", dataKey: "vr", borderColor: "#FF5733" },
            { label: "Y Phase Voltage", dataKey: "vy", borderColor: "#FFC300" },
            { label: "B Phase Voltage", dataKey: "vb", borderColor: "#3498DB" },
          ],
        },
        {
          title: "Current Graph",
          type: Bar,
          options: currentchartOptions,

          datasets: [
            { label: "R Phase Current", dataKey: "cr", backgroundColor: "#C70039" },
            { label: "Y Phase Current", dataKey: "cy", backgroundColor: "#FF5733" },
            { label: "B Phase Current", dataKey: "cb", backgroundColor: "#2ECC71" },
          ],
        },
        
        {
          title: "Active Energy Graph",
          type: Line,
          options: achartOptions,

          datasets: [
            { label: "Active Energy Import", dataKey: "aimportValue", borderColor: "#8E44AD" },
            { label: "Active Energy Export", dataKey: "aexportValue", borderColor: "#E67E22" },
          ],
        },
        {
          title: "Apparent Energy Graph",
          type: Line,
          options: achartOptions,
          datasets: [
            { label: "Apparent Energy Import", dataKey: "apimportValue", borderColor: "#1ABC9C", fill: true },
            { label: "Apparent Energy Export", dataKey: "apexportValue", borderColor: "#F1C40F", fill: true },
          ],
        },
      ].map(({ title, type: ChartType, options, datasets }, index) => (
        <div
          key={index}
          style={{
            flex: "1 1 45%",
            minWidth: "320px",
            maxWidth: "600px",
            height: "300px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: colors.primary[400],
            color: colors.primary[100],
          }}
        >
          <h6 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>
            {title}
          </h6>
          <div style={{ height: "260px" }}> {/* Ensures the chart is within 300px container */}
          <ChartType
              data={createChartData(datasets)}
              options={options || defaultOptions}
              height={300}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadSurveyChart;
