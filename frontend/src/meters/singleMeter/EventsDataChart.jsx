import { Line, Bar ,Doughnut} from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, ChartDataLabels);

const EventsDataChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (!data || data.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px", color: "#777" }}>
        No data available
      </p>
    );
  }

  const transformedData = data
    .map((entry) => {
      if (!entry|| !entry.eventOccdatetime) {
        console.warn("Skipping invalid data entry:", entry);
        return null;
      }

      return {
        time: new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date(entry.eventOccdatetime)),
        vrc: entry.voltageRPhaseOcc ?? 0,
        vyc: entry.voltageYPhaseOcc ?? 0,
        vbc: entry.voltageBPhaseOcc ?? 0,
        vrr: entry.voltageRPhaseRes ?? 0,
        vyr: entry.voltageYPhaseRes ?? 0,
        vbr: entry.voltageBPhaseRes ?? 0,

        crc: entry.currentRPhaseOcc ?? 0,
        cyc: entry.currentYPhaseOcc ?? 0,
        cbc: entry.currentBPhaseOcc ?? 0,
        crr: entry.currentRPhaseRes ?? 0,
        cyr: entry.currentYPhaseRes ?? 0,
        cbr: entry.currentBPhaseRes ?? 0,
        ncc: entry.neutralCurrentOcc ?? 0,
        ncr: entry.neutralCurrentRes ?? 0,

        rpfc: entry.pfRPhaseOcc ?? 0,
        ypfc: entry.pfYPhaseOcc ?? 0,
        bpfc: entry.pfBPhaseOcc ?? 0,
        rpfr: entry.pfRPhaseRes ?? 0,
        ypfr: entry.pfYPhaseRes ?? 0,
        bpfr: entry.pfBPhaseRes ?? 0,

        acrc: entry.activecurrentRPhaseOcc ?? 0,
        acyc: entry.activecurrentYPhaseOcc ?? 0,
        acbc: entry.activecurrentBPhaseOcc ?? 0,
        acrr: entry.activecurrentRPhaseRes ?? 0,
        acyr: entry.activecurrentYPhaseRes ?? 0,
        acbr: entry.activecurrentBPhaseRes ?? 0,

        acimportValue: entry.kwhImportOcc ?? 0,
        acexportValue: entry.kwhExportOcc ?? 0,
        arimportValue: entry.kwhImportRes ?? 0,
        arexportValue: entry.kwhExportRes ?? 0,

        apcimportValue: entry.kvahImportOcc ?? 0,
        apcexportValue: entry.kvahExportOcc ?? 0,
        aprimportValue: entry.kvahImportRes ?? 0,
        aprexportValue: entry.kvahExportRes ?? 0,
      };
    })
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
        padding: "20px"
      }}
    >
      {[
        {
          title: "Voltage Occ Graph",
          type: Line,
          options: voltagechartOptions,
          datasets: [
            { label: "R Phase Voltage", dataKey: "vrc", borderColor: "#D32F2F" },
            { label: "Y Phase Voltage", dataKey: "vyc", borderColor: "#FFA000" },
            { label: "B Phase Voltage", dataKey: "vbc", borderColor: "#1976D2" },
          ],
        },
        {
          title: "Voltage Res Graph",
          type: Line,
          options: voltagechartOptions,
          datasets: [
            { label: "R Phase Voltage", dataKey: "vrr", borderColor: "#C62828" },
            { label: "Y Phase Voltage", dataKey: "vyr", borderColor: "#FFB300" },
            { label: "B Phase Voltage", dataKey: "vbr", borderColor: "#1565C0" },
          ],
        },
        {
          title: "Current Occ Graph",
          type: Bar,
          options: currentchartOptions,
          datasets: [
            { label: "R Phase Current", dataKey: "crc", backgroundColor: "#8E24AA" },
            { label: "Y Phase Current", dataKey: "cyc", backgroundColor: "#FBC02D" },
            { label: "B Phase Current", dataKey: "cbc", backgroundColor: "#0288D1" },
          ],
        },
        {
          title: "Current Res Graph",
          type: Bar,
          options: currentchartOptions,

          datasets: [
            { label: "R Phase Current ", dataKey: "crr", backgroundColor: "#7B1FA2" },
            { label: "Y Phase Current", dataKey: "cyr", backgroundColor: "#F57F17" },
            { label: "B Phase Current ", dataKey: "cbr", backgroundColor: "#0277BD" },
          ],
        },
        {
          title: "Neutral Current Occ Graph",
          type: Line,
          options: currentchartOptions,

          datasets: [
            { label: "Neutral Current", dataKey: "ncc", borderColor: "#16A085", fill: true },
          ],
        },
        {
          title: "Neutral Current Res Graph",
          type: Line,
          options: currentchartOptions,

          datasets: [
            { label: "Neutral Current", dataKey: "ncr", borderColor: "#2980B9", fill: true },
          ],
        },
        /*{
          title: "Active Current Occ Graph",
          type: Doughnut,
          datasets: [
            { label: "R Phase Current", dataKey: "acrc", backgroundColor: "#FF7043" , fill: true}, 
            { label: "Y Phase Current", dataKey: "acyc", backgroundColor: "#FDD835", fill: true }, 
            { label: "B Phase Current", dataKey: "acbc", backgroundColor: "#29B6F6", fill: true }, 
          ],
        },
        {
          title: "Active Current Res Graph",
          type: Doughnut,
          datasets: [
            { label: "R Phase Current", dataKey: "acrr", backgroundColor: "#EF5350" , fill: true}, 
            { label: "Y Phase Current", dataKey: "acyr", backgroundColor: "#FFD54F", fill: true }, 
            { label: "B Phase Current", dataKey: "acbr", backgroundColor: "#26C6DA", fill: true }, 
          ],
        },*/
        {
          title: "Active Energy Occ Graph",
          type: Line,
          datasets: [
            { label: "Active Energy Import", dataKey: "acimportValue", borderColor: "#6A1B9A" },
            { label: "Active Energy Export", dataKey: "acexportValue", borderColor: "#D84315" },
          ],
        },
        {
          title: "Active Energy Res Graph",
          type: Line,
          datasets: [
            { label: "Active Energy Import", dataKey: "arimportValue", borderColor: "#8E24AA" },
            { label: "Active Energy Export", dataKey: "arexportValue", borderColor: "#BF360C" },
          ],
        },
        {
          title: "Apparent Energy Occ Graph",
          type: Bar,
          datasets: [
            { label: "Apparent Energy Import", dataKey: "apcimportValue", backgroundColor: "#388E3C", fill: true },
            { label: "Apparent Energy Export", dataKey: "apcexportValue", backgroundColor: "#FBC02D", fill: true },
          ],
        },
        {
          title: "Apparent Energy Res Graph",
          type: Bar,
          datasets: [
            { label: "Apparent Energy Import", dataKey: "aprimportValue", backgroundColor: "#43A047", fill: true },
            { label: "Apparent Energy Export", dataKey: "aprexportValue", backgroundColor: "#FDD835", fill: true },
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

export default EventsDataChart;
