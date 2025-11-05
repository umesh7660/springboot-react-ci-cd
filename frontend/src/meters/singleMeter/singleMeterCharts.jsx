import React from "react";
import { Bar, Line } from "react-chartjs-2";
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
  LineElement,
  PointElement,
} from "chart.js";
import MinVoltageMaxLoadChart from "./minVoltageMaxLoadBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const SingleMeterCharts = ({ data=[],loadData=[]}) => {
  const theme = useTheme();
 
  const colors = tokens(theme.palette.mode);
  if (!data || data.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
        No data available
      </p>
    );
  }
  // Labels for charts
  const labels = data.map((entry) => entry.time);

  // Chart Data
  const voltageData = {
    labels,
    datasets: [
      {
        label: "R Phase Voltage",
        data: data.map((entry) => entry.vr),
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        tension: 0.3,
      },
      {
        label: "Y Phase Voltage",
        data: data.map((entry) => entry.vy),
        borderColor: "yellow",
        backgroundColor: "rgba(255, 255, 0, 0.2)",
        tension: 0.3,
      },
      {
        label: "B Phase Voltage",
        data: data.map((entry) => entry.vb),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        tension: 0.3,
      },
    ],
  };
  // Chart Data
 
  const currentData = {
    labels,
    datasets: [
      {
        label: "R Phase Current",
        data: data.map((entry) => entry.cr),
        borderColor: "red",
        backgroundColor: "rgba(243, 10, 61, 0.6)", // Red
        tension: 0.3,
      },
      {
        label: "Y Phase Current",
        data: data.map((entry) => entry.cy),
        borderColor: "yellow",
        backgroundColor: "rgb(237, 229, 0)", // Red
        tension: 0.3,
      },
      {
        label: "B Phase Current",
        data: data.map((entry) => entry.cb),
        borderColor: "blue",
        backgroundColor: "rgba(33, 13, 215, 0.94)", // Red
        tension: 0.3,
      },
    ],
  };
  const powerFactorData = {
    labels,
    datasets: [
      {
        label: "Power Factor",
        data: data.map((entry) => entry.apf),
        backgroundColor: "#00C49F",
      },
    ],
  };

  const frequencyData = {
    labels,
    datasets: [
      {
        label: "Frequency (Hz)",
        data: data.map((entry) => entry.frequency),
        borderColor: "#0088FE",
        backgroundColor: "#0088FE",
        fill: false,
      },
    ],
  };

  // Chart Options
  const voltagechartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 350,
        ticks: {
          stepSize: 25, // Ensures increments of 25 (0, 25, 50, ..., 350)
        },
      },
    },
    plugins: {
      legend: { position: "bottom" },
      datalabels: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };


  const currentchartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10, // Ensures increments of 25 (0, 25, 50, ..., 350)
        },
      },
    },
    plugins: {
      legend: { position: "bottom" },
      datalabels: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };


  const freqchartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 60,
        ticks: {
          stepSize: 5, // Ensures increments of 25 (0, 25, 50, ..., 350)
        },
      },
    },
    plugins: {
      legend: { position: "bottom" },
      datalabels: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      datalabels: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  }; 
  

  return (
    <div>
      {data.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
          No data available
        </p>
      ) : (
        <div className="m-2">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{
                  background: colors.primary[400],
                  color: colors.primary[100],
                }}
              >
                <h6 className="card-title" style={{ fontWeight: "bold" }}>
                  Voltage Graph
                </h6>
                <Line data={voltageData} options={voltagechartOptions} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{
                  background: colors.primary[400],
                  color: colors.primary[100],
                }}
              >
                <h6 className="card-title" style={{ fontWeight: "bold" }}>
                  Current Graph
                </h6>
                <Bar data={currentData} options={currentchartOptions} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{
                  background: colors.primary[400],
                  color: colors.primary[100],
                }}
              >
                <h6 className="card-title" style={{ fontWeight: "bold" }}>
                  Power Factor
                </h6>
                <Bar data={powerFactorData} options={chartOptions} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{
                  background: colors.primary[400],
                  color: colors.primary[100],
                }}
              >
                <h6 className="card-title" style={{ fontWeight: "bold" }}>
                  Frequency
                </h6>
                <Line data={frequencyData} options={freqchartOptions} />
              </div>
            </div>
          </div>
          {loadData && loadData.length > 0 ? ( <div className="row">
            <div className="col-lg-12 col-md-12 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{
                  background: colors.primary[400],
                  color: colors.primary[100],
                }}
              >
                <h6 className="card-title" style={{ fontWeight: "bold" }}>
                  Min Voltage Max Load
                </h6>
                  <MinVoltageMaxLoadChart data={loadData}/>
              </div>
            </div>
          </div>):""}
        </div>
      )}
    </div>
  );
};

export default SingleMeterCharts;
