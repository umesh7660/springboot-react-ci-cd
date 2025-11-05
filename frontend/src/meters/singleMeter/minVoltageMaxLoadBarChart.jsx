import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MinVoltageMaxLoadChart = ({ data }) => {
  // Extract labels (x-axis)
  const labels = data.map((item) => item.time.toString());

  // Chart Data
  const chartData = {
    labels,
    datasets: [
      {
        label: "Min Voltage",
        data: data.map((item) => item.minVoltage),
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Red
        yAxisID: "y", // Assign to primary Y-axis
      },
      {
        label: "Max Voltage",
        data: data.map((item) => item.maxVoltage),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue
        yAxisID: "y",
      },
      {
        label: "Min Current",
        data: data.map((item) => item.minCurrent),
        backgroundColor: "rgba(255, 159, 64, 0.6)", // Orange
        yAxisID: "y2", // Assign to secondary Y-axis
      },
      {
        label: "Max Current",
        data: data.map((item) => item.maxCurrent),
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Purple
        yAxisID: "y2",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      datalabels: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.dataset.label || "";
            let value = tooltipItem.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Time" },
      },
      y: {
        title: { display: true, text: "Values" },
      },
	   y2: {
        title: { display: true, text: "Current (A)" },
        position: "right",
        grid: { drawOnChartArea: false }, // Prevents grid overlap
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MinVoltageMaxLoadChart;