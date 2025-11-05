import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const PhasorDiagram = () => {
  // Phasor data (voltage & current)
  const phasorData = {
    labels: ["VR", "VY", "VB", "CR", "CY", "CB"], // Labels for phasors
    datasets: [
      {
        label: "Voltage (V)",
        data: [4.5, 5.8, 5.3, 0, 0, 0], // Voltage values
        borderColor: ["black", "yellow", "black", "transparent", "transparent", "transparent"],
        borderWidth: 2,
        pointRadius: 5,
      },
      {
        label: "Current (A)",
        data: [0, 0, 0, 4.6, 5.9, 5.4], // Current values
        borderColor: ["transparent", "transparent", "transparent", "green", "red", "green"],
        borderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow flexible sizing
    scales: {
      r: {
        min: 0,
        max: 10,
        angleLines: { display: true }, // Show angle lines
        grid: { circular: true }, // Ensure circular grid
        pointLabels: { display: true, font: { size: 14 } },
      },
    },
    plugins: {
      legend: { display: true, position: "top" },
    },
  };

  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <Radar data={phasorData} options={options} />
    </div>
  );
};

export default PhasorDiagram;
