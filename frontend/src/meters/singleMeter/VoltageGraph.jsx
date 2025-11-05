import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const VoltageGraph = ({ data }) => {
  const defaultData = {
    timestamps: ["10:00", "10:05", "10:10", "10:15", "10:20"],
    rPhase: [220, 25, 120, 78, 240],
    yPhase: [210, 215, 220, 225, 230],
    bPhase: [200, 205, 210, 215, 220],
  };

  const chartData = {
    labels: data?.timestamps || defaultData.timestamps,
    datasets: [
      {
        label: "R Phase",
        data: data?.rPhase || defaultData.rPhase,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        tension: 0.3,
      },
      {
        label: "Y Phase",
        data: data?.yPhase || defaultData.yPhase,
        borderColor: "yellow",
        backgroundColor: "rgba(255, 255, 0, 0.2)",
        tension: 0.3,
      },
      {
        label: "B Phase",
        data: data?.bPhase || defaultData.bPhase,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        tension: 0.3,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true,position:'bottom' },
      tooltip: {
        enabled: true, // Ensure tooltips are enabled
        intersect: false, // Show tooltips even when not directly hovering over a point
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} V`; // Custom label format
          },
        },
      },
      datalabels: { display: false },
    },
    elements: {
      point: { radius: 0}, 
    },
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: {
        title: { display: true, text: "Voltage (V)" },
        ticks: { display: true }, // Ensure y-axis ticks are visible
      },
    },
  };
  
  


  return (
    <div style={{ height: "250px", width: "100%" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default VoltageGraph;
