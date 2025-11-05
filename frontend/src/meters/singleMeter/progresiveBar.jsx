import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

const CurrentLineChart = () => {
  const chartRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const totalDuration = 5000; // 5 seconds
  const dataPoints = 100;
  const updateInterval = totalDuration / dataPoints; // Interval for progress update

  const [timestamps, setTimestamps] = useState([]);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    let progressCounter = 0;
    let prev = 220, prev2 = 210, prev3 = 200;
    const tempData = [], tempData2 = [], tempData3 = [];
    const tempTimestamps = [];

    let startTime = new Date(); // Start time reference

    const interval = setInterval(() => {
      prev += 5 - Math.random() * 10;
      prev2 += 5 - Math.random() * 10;
      prev3 += 5 - Math.random() * 10;

      tempData.push(prev);
      tempData2.push(prev2);
      tempData3.push(prev3);

      // Generate a dynamic timestamp
      let currentTime = new Date(startTime.getTime() + (tempData.length * updateInterval));
      tempTimestamps.push(currentTime.toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }));

      setData([...tempData]);
      setData2([...tempData2]);
      setData3([...tempData3]);
      setTimestamps([...tempTimestamps]);

      progressCounter += 100 / dataPoints;
      setProgress(progressCounter);

      if (progressCounter >= 100) {
        clearInterval(interval);
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: timestamps,
    datasets: [
      { label: "R Phase", borderColor: "red", borderWidth: 2, radius: 0, data },
      { label: "Y Phase", borderColor: "yellow", borderWidth: 2, radius: 0, data: data2 },
      { label: "B Phase", borderColor: "blue", borderWidth: 2, radius: 0, data: data3 },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false },
    plugins: {
      legend: { display: true,position:'bottom' },
      tooltip: { enabled: true },
      datalabels: { display: false },
    },
    elements: {
      point: { radius: 0 },
    },
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: {
        title: { display: true, text: "Current (C)" },
        ticks: { display: false },
      },
    },
  };

  return (
    <div style={{ height: "250px", width: "100%" }}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default CurrentLineChart;
