import React, { useState, useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "react-select";
import ToDoBarChart from "./TodoBarChart";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyBillingChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedChart, setSelectedChart] = useState("kwhImport");
  const isFetched = useRef(false);
  const [kwhImportToD, setKwhImportToD] = useState([]);
  const [kwhExportToD, setKwhExportToD] = useState([]);
  const [kvahImportToD, setKvahImportTod] = useState([]);
  const [kvahExportToD, setKvahExportToD] = useState([]);
  const [kwMdToD, setKwMdToD] = useState([]);
  const [kweMdToD, setKweMdToD] = useState([]);
  const [kvaMdToD, setKvaMdToD] = useState([]);
  const [kvaeMdToD, setKvaeMdToD] = useState([]);
  
  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;
  
    if (!data?.length) return;
  
    const createExtractedValues = (dataArray, prefix) => {
      return dataArray.map((item) => {
        const values = {};
        for (let i = 1; i <= 8; i++) {
          values[`${prefix}T${i}`] = item[`${prefix}T${i}`] || 0;
        }
        return values;
      });
    };
  
    // Extract values dynamically from all objects
    setKwhImportToD((prev) => [...prev, ...createExtractedValues(data, "kwhImport")]);
    setKwhExportToD((prev) => [...prev, ...createExtractedValues(data, "kwhExport")]);
    setKvahImportTod((prev) => [...prev, ...createExtractedValues(data, "kvahImport")]);
    setKvahExportToD((prev) => [...prev, ...createExtractedValues(data, "kvahExport")]);
    setKwMdToD((prev) => [...prev, ...createExtractedValues(data, "kwMd")]);
    setKweMdToD((prev) => [...prev, ...createExtractedValues(data, "kweMd")]);
    setKvaMdToD((prev) => [...prev, ...createExtractedValues(data, "kvaMd")]);
    setKvaeMdToD((prev) => [...prev, ...createExtractedValues(data, "kvaeMd")]);
  
  }, [data]);
  

  if (!data || data.length === 0)
    return (
      <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
        No data available
      </p>
    );

  const transformedData = data
    .map((entry) =>
      entry.billingDate
        ? {
            time: new Intl.DateTimeFormat("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }).format(new Date(entry.billingDate)),
            kwmd: entry.kwMd ?? 0,
            kvamd: entry.kvaMd ?? 0,
            apf: entry.averagePf ?? 0,
            q1: entry.kvarhQ1 ?? 0,
            q2: entry.kvarhQ2 ?? 0,
            q3: entry.kvarhQ3 ?? 0,
            q4: entry.kvarhQ4 ?? 0,
            aimportValue: entry.kwhImport ?? 0,
            aexportValue: entry.kwhExport ?? 0,
            apimportValue: entry.kvahImport ?? 0,
            apexportValue: entry.kvahExport ?? 0,
          }
        : null
    )
    .filter(Boolean);

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fills its container
    plugins: {
      legend: { position: "bottom" },
      title: { display: false },
      datalabels: { display: false },
    },
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: { title: { display: true, text: "Values" } },
    },
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

  const chartOptions = [
    { value: "kwhImport", label: "KWH IMPORT" },
    { value: "kwhExport", label: "KWH EXPORT" },
    { value: "kvahImport", label: "KVAH IMPORT" },
    { value: "kvahExport", label: "KVAH EXPORT" },
    { value: "kwMd", label: "KW MD IMPORT" },
    { value: "kweMd", label: "KW MD EXPORT" },
    { value: "kvaMd", label: "KVA MD IMPORT" },
    { value: "kvaeMd", label: "KVA MD EXPORT" },
  ];
  const chartData = {
    kwhImport: kwhImportToD,
    kwhExport: kwhExportToD,
    kvahImport: kvahImportToD,
    kvahExport: kvahExportToD,
    kwMd: kwMdToD,
    kweMd: kweMdToD,
    kvaMd: kvaMdToD,
    kvaeMd: kvaeMdToD
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
         sx={{
            background: colors.primary[400],
            color: colors.primary[100],
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
      >
        {[
          {
            title: "Max Demand Graph",
            type: Line,
            datasets: [
              {
                label: "Active Demand(KW)",
                dataKey: "kwmd",
                borderColor: "#FF5733",
              },
              {
                label: "Apparent Demand(KVa)",
                dataKey: "kvamd",
                borderColor: "#FFC300",
              },
            ],
          },
          {
            title: "Power Factor",
            type: Bar,
            datasets: [
              {
                label: "Average PF",
                dataKey: "apf",
                backgroundColor: "#C70039",
              },
            ],
          },

          {
            title: "Active Energy Graph",
            type: Line,
            datasets: [
              {
                label: "Active Energy Import",
                dataKey: "aimportValue",
                borderColor: "#8E44AD",
              },
              {
                label: "Active Energy Export",
                dataKey: "aexportValue",
                borderColor: "#E67E22",
              },
            ],
          },
          {
            title: "Apparent Energy Graph",
            type: Line,
            datasets: [
              {
                label: "Apparent Energy Import",
                dataKey: "apimportValue",
                borderColor: "#1ABC9C",
                fill: true,
              },
              {
                label: "Apparent Energy Export",
                dataKey: "apexportValue",
                borderColor: "#F1C40F",
                fill: true,
              },
            ],
          },
          {
            title: "Cum Energy Graph",
            type: Bar,
            datasets: [
              {
                label: "KVArhQ1",
                dataKey: "q1",
                backgroundColor: "#E74C3C",
                fill: true,
              },
              {
                label: "KVArhQ2",
                dataKey: "q2",
                backgroundColor: "#F39C12",
                fill: true,
              },
              {
                label: "KVArhQ3",
                dataKey: "q3",
                backgroundColor: "#3498DB",
                fill: true,
              },
              {
                label: "KVArhQ4",
                dataKey: "q4",
                backgroundColor: "#2ECC71",
                fill: true,
              },
            ],
          },
        ].map(({ title, type: ChartType, datasets }, index) => (
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
            <h6
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {title}
            </h6>
            <div style={{ height: "260px" }}>
              {" "}
              {/* Ensures the chart is within 300px container */}
              <ChartType
                data={createChartData(datasets)}
                options={options}
                height={300} // Explicitly setting chart height
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Accordion
          defaultExpanded
          sx={{
            background: colors.primary[400],
            color: colors.primary[100],
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h6 className="card-title" style={{ fontWeight: "bold" }}>
              ToD Chart
            </h6>
          </AccordionSummary>
          <AccordionDetails>
            {/* Select dropdown positioned to the right */}
            <div style={{ marginLeft: "auto", width: "250px" }}>
              <Select
                value={chartOptions.find(
                  (option) => option.value === selectedChart
                )}
                onChange={(selectedOption) => {
                  if (selectedOption.value !== selectedChart) {
                    setSelectedChart(selectedOption.value);
                  }
                }}
                options={chartOptions}
              />
            </div>
            <div>
              {selectedChart && Array.isArray(chartData[selectedChart]) && chartData[selectedChart].length > 0 ? (
                <ToDoBarChart data={chartData[selectedChart]} labelName={selectedChart} dataKeys={Object.keys(chartData[selectedChart][0] || {})} />
              ) : (
                <p>No data available</p>
              )}

            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default MonthlyBillingChart;
