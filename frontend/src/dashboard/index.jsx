import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import {
  Grid,
  Typography,
  Divider,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { PieChart as PieChartIcon } from "@mui/icons-material";
import { tokens } from "../theme";
import baseURL from "../config";

// Components
import MeterCard from "../components/MeterCard";
import MediaCard from "../components/Cards";

import StatusCard from "../components/StatusCard";
import ChartSection from "../components/ChartSection";
import DoughnutChartGPRS from "../components/Doughnut";
import DoughnutChartRF from "../components/Doughnut";
import GprsEventChart from "../components/EventsChart";
import RfEventChart from "../components/EventsChart";
import GprsBarChart from "../components/Bar";
import RfBarChart from "../components/Bar";
import GprsSemiCircle from "../components/SemiCirclePieChart";
import RfSemiCircle from "../components/EventsChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [sectionType, setSectionType] = useState("ALL");

  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
  console.log("userObject from sessionStorage:", level1id);
  const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  const [meterCounts, setMeterCounts] = useState({
    singlePhaseCount: [0, 0],
    threePhaseCount: [0, 0],
    dtMeterCount: [0, 0],
    feederMeterCount: [0, 0],
  });

  const fetchMeterCounts = async () => {
    try {
      const endpoints = [
        "singlePhaseMeterCount",
        "threePhaseMeterCount",
        "dtMeterCount",
        "feederMeterCount",
      ];

      const responses = await Promise.all(
        endpoints.map((url) => {
          return axios.get(`${baseURL}/counts/${url}`, {
            params: {
              section: sectionType,
              level1id: level1id,
            },
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            withCredentials: true,
          });
        })
      );


      setMeterCounts({
        singlePhaseCount: responses[0].data[0] || [0, 0],
        threePhaseCount: responses[1].data[0] || [0, 0],
        dtMeterCount: responses[2].data[0] || [0, 0],
        feederMeterCount: responses[3].data[0] || [0, 0],
      });
    } catch (error) {
      console.error("Failed to fetch meter counts:", error);
    }
  };

  // 🔁 Call again when sectionType changes
  useEffect(() => {
    fetchMeterCounts();
  }, [sectionType]); // ← this line makes it dynamic


  const cards = [
    {
      title: "⚡ Single Phase",
      metersCount: meterCounts.singlePhaseCount[1] || 0,
      totalCount: meterCounts.singlePhaseCount[0] || 0,
      percentage:
        meterCounts.singlePhaseCount[1] && meterCounts.singlePhaseCount[0]
          ? (
            (meterCounts.singlePhaseCount[1] / meterCounts.singlePhaseCount[0]) * 100
          ).toFixed(0)
          : 0,
      totalUrl: `${baseURL}/data/findAllSinglePhaseMeters?section=${sectionType}&level1id=${level1id}`,

      commuUrl: `${baseURL}/data/findSinglePhaseMeters?section=${sectionType}&level1id=${level1id}`,
    },
    {
      title: "🌩️ Three Phase",
      metersCount: meterCounts.threePhaseCount[1] || 0,
      totalCount: meterCounts.threePhaseCount[0] || 0,
      percentage:
        meterCounts.threePhaseCount[1] && meterCounts.threePhaseCount[0]
          ? (
            (meterCounts.threePhaseCount[1] / meterCounts.threePhaseCount[0]) * 100
          ).toFixed(0)
          : 0,
      totalUrl: `${baseURL}/data/findAllThreePhaseMeters?section=${sectionType}&level1id=${level1id}`,
      commuUrl: `${baseURL}/data/findThreePhaseMeters?section=${sectionType}&level1id=${level1id}`,
    },
    {
      title: "🔌 DTC",
      metersCount: meterCounts.dtMeterCount[1] || 0,
      totalCount: meterCounts.dtMeterCount[0] || 0,
      percentage:
        meterCounts.dtMeterCount[1] && meterCounts.dtMeterCount[0]
          ? (
            (meterCounts.dtMeterCount[1] / meterCounts.dtMeterCount[0]) * 100
          ).toFixed(0)
          : 0,
      totalUrl: `${baseURL}/data/findAllDtPhaseMeters?section=${sectionType}&level1id=${level1id}`,
      commuUrl: `${baseURL}/data/findDTPhaseMeters?section=${sectionType}&level1id=${level1id}`,
    },
    {
      title: "🔋 Feeder",
      metersCount: meterCounts.feederMeterCount[1] || 0,
      totalCount: meterCounts.feederMeterCount[0] || 0,
      percentage:
        meterCounts.feederMeterCount[1] && meterCounts.feederMeterCount[0]
          ? (
            (meterCounts.feederMeterCount[1] / meterCounts.feederMeterCount[0]) * 100
          ).toFixed(0)
          : 0,
      totalUrl: `${baseURL}/data/findAllFeederPhaseMeters?section=${sectionType}&level1id=${level1id}`,
      commuUrl: `${baseURL}/data/findFeederPhaseMeters?section=${sectionType}&level1id=${level1id}`,
    },
  ];


  const SectionHeader = ({ title }) => (
    <Box my={3}>
      <Typography variant="h5">{title}</Typography>
      <Divider sx={{ borderColor: "#00bcd4", mb: 1 }} />
    </Box>
  );

  return (
    <div
      className="container-fluid p-4"
      style={{ background: colors.grey[1000], color: colors.primary[100] }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>



      <FormControl sx={{ minWidth: 200, mb: 2 }}>
        <InputLabel id="section-select-label" sx={{ color: "#00bcd4" }}>
          Select Section
        </InputLabel>
        <Select
          labelId="section-select-label"
          id="section-select"
          value={sectionType}
          label="Select Section"
          onChange={(e) => setSectionType(e.target.value)}
          sx={{ color: "#00bcd4", borderColor: "#00bcd4" }}
        >
          <MenuItem value="GPRS">GPRS</MenuItem>
          <MenuItem value="RF">RF</MenuItem>
          <MenuItem value="ALL">ALL</MenuItem>
        </Select>
      </FormControl>

      {/* Meter Summary Cards */}



      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
            <MediaCard
              title={card.title}
              meters={card.metersCount}
              total={card.totalCount}
              percentage={card.percentage}
              totalUrl={card.totalUrl}
              commuUrl={card.commuUrl}
            />
          </Grid>
        ))}
      </Grid>

      {(sectionType === "GPRS") && (
        <>
          <ChartSection>
            <StatusCard
              title=" Communication Status"
              icon={<PieChartIcon sx={{ color: "red" }} />}
            >

              <DoughnutChartGPRS sectionType={sectionType} />

            </StatusCard>
            <StatusCard title=" Events">
              <GprsEventChart sectionType={sectionType} />
            </StatusCard>
            <StatusCard title=" Last 7 Days">
              <GprsBarChart sectionType={sectionType} />
            </StatusCard>
          </ChartSection>

          <ChartSection>
            <StatusCard title=" Connection Status">
              <GprsSemiCircle sectionType={sectionType} />
            </StatusCard>
          </ChartSection>
        </>
      )}

      {(sectionType === "RF") && (
        <>
          <ChartSection>
            <StatusCard
              title=" Communication Status"
              icon={<PieChartIcon sx={{ color: "red" }} />}
            >
              <DoughnutChartGPRS sectionType={sectionType} />
            </StatusCard>
            <StatusCard title=" Events">
              <GprsEventChart sectionType={sectionType} />
            </StatusCard>
            <StatusCard title=" Last 7 Days">
              <GprsBarChart sectionType={sectionType} />
            </StatusCard>
          </ChartSection>

          <ChartSection>
            <StatusCard title=" Connection Status">
              <GprsSemiCircle sectionType={sectionType} />
            </StatusCard>
          </ChartSection>
        </>
      )}



      {(sectionType === "ALL") && (
        <>
          <ChartSection>
            <StatusCard
              title="GPRS & RF Communication Status"
              icon={<PieChartIcon sx={{ color: "red" }} />}
            >
              <DoughnutChartGPRS sectionType={sectionType} />
            </StatusCard>
            <StatusCard title="GPRS & RF Events">
              <GprsEventChart sectionType={sectionType} />
            </StatusCard>
            <StatusCard title="GPRS & RF Last 7 Days">
              <GprsBarChart sectionType={sectionType} />
            </StatusCard>
          </ChartSection>

          <ChartSection>
            <StatusCard title="GPRS & RF Connection Status">
              <GprsSemiCircle sectionType={sectionType} />
            </StatusCard>
          </ChartSection>
        </>
      )}
    </div>
  );
};

export default Dashboard;
