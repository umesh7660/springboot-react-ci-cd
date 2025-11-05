import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(...registerables, zoomPlugin);

const TimeSeriesChart = () => {
  // Dummy time series data
  const data = {
    labels: [
      "2024-02-01", "2024-02-02", "2024-02-03", "2024-02-04", "2024-02-05",
      "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09", "2024-02-10"
    ],
    datasets: [
      {
        label: "Sample Data",
        data: [10, 15, 8, 20, 25, 18, 30, 22, 28, 35],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category", // Can be "time" if moment.js adapter is used
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default TimeSeriesChart;
