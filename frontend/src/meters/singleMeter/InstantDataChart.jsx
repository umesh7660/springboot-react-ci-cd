import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, ChartDataLabels);

const InstantDataChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (!data || data.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
        No data available
      </p>
    );
  }



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
  

  
  const ncurrentchartOptions = {
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
  



  const freqchartOptions = {
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
        max: 60,
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


  const transformedData = data
    .map((entry) => {
      if (!entry || !entry.instantDate) {
        console.warn("Skipping invalid data entry:", entry);
        return null;
      }

      return {
        time: new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date(entry.instantDate)),
        vr: entry.voltageRphase ?? 0,
        vy: entry.voltageYphase ?? 0,
        vb: entry.voltageBphase ?? 0,
        cr: entry.currentRphase ?? 0,
        cy: entry.currentYphase ?? 0,
        cb: entry.currentBphase ?? 0,
        nc: entry.neutralCurrent ?? 0,
        rpf: entry.rphasePf ?? 0,
        ypf: entry.yphasePf ?? 0,
        bpf: entry.bphasePf ?? 0,
        apf: entry.averagePf ?? 0,
        aimportValue: entry.activeEnergyimp ?? 0,
        aexportValue: entry.activeEnergyexp ?? 0,
        apimportValue: entry.apparentEnergyimp ?? 0,
        apexportValue: entry.apparentEnergyexp ?? 0,
        frequency: entry.frequency ?? 0,
      };
    })
    .filter(Boolean);

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
        padding: "20px"
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
          options: currentchartOptions,
          type: Bar,
          datasets: [
            { label: "R Phase Current", dataKey: "cr", backgroundColor: "#FF5733" },
            { label: "Y Phase Current", dataKey: "cy", backgroundColor: "#FFC300" },
            { label: "B Phase Current", dataKey: "cb", backgroundColor: "#3498DB" },
          ],
        },
        {
          title: "Neutral Current Graph",
          type: Line,
          options: ncurrentchartOptions,
          datasets: [
            { label: "Neutral Current", dataKey: "nc", borderColor: "#2ECC71", fill: true },
          ],
        },
        {
          title: "Active Energy Graph",
          type: Line,
          datasets: [
            { label: "Active Energy Import", dataKey: "aimportValue", borderColor: "#8E44AD" },
            { label: "Active Energy Export", dataKey: "aexportValue", borderColor: "#E67E22" },
          ],
        },
        {
          title: "Apparent Energy Graph",
          type: Line,
          datasets: [
            { label: "Apparent Energy Import", dataKey: "apimportValue", borderColor: "#1ABC9C", fill: true },
            { label: "Apparent Energy Export", dataKey: "apexportValue", borderColor: "#F1C40F", fill: true },
          ],
        },
        {
          title: "Power Factor Graph",
          type: Bar,
          datasets: [
            { label: "R Phase PF", dataKey: "rpf", backgroundColor: "#E74C3C", fill: true },
            { label: "Y Phase PF", dataKey: "ypf", backgroundColor: "#F39C12", fill: true },
            { label: "B Phase PF", dataKey: "bpf", backgroundColor: "#3498DB", fill: true },
            { label: "Average PF", dataKey: "apf", backgroundColor: "#2ECC71", fill: true },
          ],
        },
        {
          title: "Frequency Graph",
          type: Line,
          options: freqchartOptions,
          datasets: [
            { label: "Frequency", dataKey: "frequency", borderColor: "#8E44AD", fill: true },
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
          <div style={{ height: "260px" }}>

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

export default InstantDataChart;
