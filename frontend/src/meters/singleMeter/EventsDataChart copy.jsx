import { Line, Bar } from "react-chartjs-2";
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

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fills its container
    plugins: { legend: { position: "bottom" }, title: { display: false }, datalabels: { display: false } },
    scales: { x: { title: { display: true, text: "Time" } }, y: { title: { display: true, text: "Values" } } },
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
          datasets: [
            { label: "R Phase Voltage", dataKey: "vrc", borderColor: "#FF5733" },
            { label: "Y Phase Voltage", dataKey: "vyc", borderColor: "#FFC300" },
            { label: "B Phase Voltage", dataKey: "vbc", borderColor: "#3498DB" },
          ],
        },
        {
          title: "Voltage Res Graph",
          type: Line,
          datasets: [
            { label: "R Phase Voltage", dataKey: "vrr", borderColor: "#FF5733" },
            { label: "Y Phase Voltage", dataKey: "vyr", borderColor: "#FFC300" },
            { label: "B Phase Voltage", dataKey: "vbr", borderColor: "#3498DB" },
          ],
        },
        {
          title: "Current Occ Graph",
          type: Bar,
          datasets: [
            { label: "R Phase Current", dataKey: "crc", backgroundColor: "#FF5733" },
            { label: "Y Phase Current", dataKey: "cyc", backgroundColor: "#FFC300" },
            { label: "B Phase Current", dataKey: "cbc", backgroundColor: "#3498DB" },
          ],
        },
        {
          title: "Current Res Graph",
          type: Bar,
          datasets: [
            { label: "R Phase Current ", dataKey: "crr", backgroundColor: "#FF5733" },
            { label: "Y Phase Current", dataKey: "cyr", backgroundColor: "#FFC300" },
            { label: "B Phase Current ", dataKey: "cbr", backgroundColor: "#3498DB" },
          ],
        },
        {
          title: "Active Current Occ Graph",
          type: Bar,
          datasets: [
            { label: "R Phase Current", dataKey: "acrc", backgroundColor: "#E74C3C" , fill: true}, 
            { label: "Y Phase Current", dataKey: "acyc", backgroundColor: "#F39C12", fill: true }, 
            { label: "B Phase Current", dataKey: "acbc", backgroundColor: "#3498DB", fill: true }, 
          ],
        },
        {
          title: "Active Current Res Graph",
          type: Bar,
          datasets: [
            { label: "R Phase Current", dataKey: "acrr", backgroundColor: "#E74C3C" , fill: true}, 
            { label: "Y Phase Current", dataKey: "acyr", backgroundColor: "#F39C12", fill: true }, 
            { label: "B Phase Current", dataKey: "acbr", backgroundColor: "#3498DB", fill: true }, 
          ],
        },
        {
          title: "Active Energy Occ Graph",
          type: Line,
          datasets: [
            { label: "Active Energy Import", dataKey: "acimportValue", borderColor: "#8E44AD" },
            { label: "Active Energy Export", dataKey: "acexportValue", borderColor: "#E67E22" },
          ],
        },
        {
          title: "Active Energy Res Graph",
          type: Line,
          datasets: [
            { label: "Active Energy Import", dataKey: "arimportValue", borderColor: "#8E44AD" },
            { label: "Active Energy Export", dataKey: "arexportValue", borderColor: "#E67E22" },
          ],
        },
        {
          title: "Apparent Energy Occ Graph",
          type: Line,
          datasets: [
            { label: "Apparent Energy Import", dataKey: "apcimportValue", borderColor: "#1ABC9C", fill: true },
            { label: "Apparent Energy Export", dataKey: "apcexportValue", borderColor: "#F1C40F", fill: true },
          ],
        },
        {
          title: "Apparent Energy Res Graph",
          type: Line,
          datasets: [
            { label: "Apparent Energy Import", dataKey: "aprimportValue", borderColor: "#1ABC9C", fill: true },
            { label: "Apparent Energy Export", dataKey: "aprexportValue", borderColor: "#F1C40F", fill: true },
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
          <h6 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>
            {title}
          </h6>
          <div style={{ height: "260px" }}> 
            <ChartType
              data={createChartData(datasets)}
              options={options}
              height={300} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsDataChart;
