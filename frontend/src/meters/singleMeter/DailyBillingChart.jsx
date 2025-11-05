import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DailyBillingChart = ({ data }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (!data || data.length === 0) 
    return <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>No data available</p>;

  const transformedData = data
    .map(entry => entry.billingDate ? ({
      time: new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date(entry.billingDate)),
      activeEnergyImport: entry.cumEngyKwhImp ?? 0,
      activeEnergyExport: entry.cumEngyKwhExp ?? 0,
      apparentEnergyImport: entry.cumEngyKvahImp ?? 0,
      apparentEnergyExport: entry.cumEngyKvahExp ?? 0,
    }) : null)
    .filter(Boolean);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" }, title: { display: false }, datalabels: { display: false } },
    scales: { x: { title: { display: true, text: "Time" } }, y: { title: { display: true, text: "Values" } } },
    animation: { duration: 1000, easing: "easeInOutQuart" },
  };

  const createChartData = (datasets) => ({
    labels: transformedData.map((entry) => entry.time),
    datasets: datasets.map(
      ({ label, dataKey, backgroundColor }) => ({
        label,
        data: transformedData.map((entry) => entry[dataKey]),
        backgroundColor,
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
          title: "Active Energy Graph",
          type: Bar,
          datasets: [
            { label: "Active Energy Import", dataKey: "activeEnergyImport", backgroundColor: "#FF5733" },
            { label: "Active Energy Export", dataKey: "activeEnergyExport", backgroundColor: "#FFC300" },
          ],
        },
        {
          title: "Apparent Energy Graph",
          type: Bar,
          datasets: [
            { label: "Apperent Energy Import", dataKey: "apparentEnergyImport", backgroundColor: "#8E44AD" },
            { label: "Apperent Energy Export", dataKey: "apparentEnergyExport", backgroundColor: "#E67E22" },
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
              options={options}
              height={300} // Explicitly setting chart height
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyBillingChart;
