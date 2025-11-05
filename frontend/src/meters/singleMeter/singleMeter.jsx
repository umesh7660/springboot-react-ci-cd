import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import Select from "react-select";
import SingleMeterCharts from "./singleMeterCharts";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventLogs from "./EventLogs";
import LoadSurveyChart from "./loadSurvey";
import InstantDataChart from "./InstantDataChart";
import MonthlyBillingChart from "./MonthlyBillingChart";
import DailyBillingChart from "./DailyBillingChart";
import DatePicker from "react-datepicker";
import InstantDataTable from "./InstantDataTable";
import LoadSurveyTable from "./LoadSurveyTable";
import DailyBillingTable from "./DailyBillingTable";
import MonthlyBillingTable from "./MonthlyBillingTable";
import baseURL from "../../config";
import EventsDataChart from "./EventsDataChart";
import EventsDataTable from "./EventsDataTable";

function SingleMeter() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const initialMeterNo = location.state?.meterNo;
  const initialDatesList = location.state?.dates;
  const initialDate = location.state?.selectedDate;
  const parsedDate = initialDate ? new Date(initialDate) : new Date();
  const [dates, setDates] = useState(
    initialDatesList || [parsedDate, parsedDate]
  );
  const [chartsdata, setChartsData] = useState([]);
  const [loadData, setLoadData] = useState([]);
  const [meterNumbers, setMeterNumbers] = useState([]);
  const [selectedMeter, setSelectedMeter] = useState(
    sessionStorage.getItem("meterNumber") || initialMeterNo || ""
  );
  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
    console.log("userObject from sessionStorage:", level1id);
    const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  const [meterData, setMeterData] = useState({});
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const hasFetchedMeterData = useRef(false);
  const [instantData, setInstantData] = useState([]);
  const [instantDataReverse, setInstantDataReverse] = useState([]);

  const [eventsData, setEventsData] = useState([]);
  const [eventsDataReverse, setEventsDataReverse] = useState([]);

  const [loadSurveyData, setLoadSurveyData] = useState([]);
  const [loadSurveyDataReverse, setLoadSurveyDataReverse] = useState([]);

  const [dailyBillingData, setDailyBillingData] = useState([]);
  const [dailyBillingDataReverse, setDailyBillingDataReverse] = useState([]);

  const [billingData, setBillingData] = useState([]);
  const [billingDataReverse, setBillingDataReverse] = useState([]);


  const [eventsLogData, setEventsLogData] = useState([]);
  // Function to format date
  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date); // Ensure date is converted to a Date object
    }
    return date.toISOString().split("T")[0]; // Converts to "YYYY-MM-DD"
  };

  // Fetch all meter numbers on page load
  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;
    axios
      .get(`${baseURL}/data/fetchMeterList?level1id=${level1id}`)
      .then((response) => {
        setMeterNumbers(response.data);
      })
      .catch((err) => {
        console.error("Error fetching meter numbers:", err);
      });
  }, []);

  const fetchData = async () => {
    if (!selectedMeter || !dates[0] || !dates[1]) {
      console.warn("Please select a meter and date range.");
      return;
    }
    sessionStorage.setItem("meterNumber", selectedMeter);
    sessionStorage.setItem("dates", JSON.stringify([dates[0], dates[1]]));
    fetchEventsLogData(selectedMeter, dates);
    fetchChartsData(selectedMeter);
    fetchLoadData(selectedMeter);

    try {
      axios
        .get(`${baseURL}/data/meterDetails`, {
          params: { meterNo: selectedMeter },
        })
        .then((response) => {
          setMeterData(response.data[0]);
        })
        .catch((err) => {
          setMeterData({});
          console.error("Error fetching meter data:", err);
        });
      const responses = await Promise.allSettled([
        axios.get(`${baseURL}/singlemeterView/instantData`, {
          params: {
            startdate: formatDate(dates[0]),
            enddate: formatDate(dates[1]),
            meterNo: selectedMeter,
            level1id: level1id,
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // <-- Add this
          },
          withCredentials: true,
        }),
        axios.get(`${baseURL}/singlemeterView/eventData`, {
          params: {
            startDate: formatDate(dates[0]),
            endDate: formatDate(dates[1]),
            meterNo: selectedMeter,
            level1id: level1id,
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // <-- Add this
          },
          withCredentials: true,
        }),
        axios.get(`${baseURL}/singlemeterView/loadsurveyData`, {
          params: {
            startdate: formatDate(dates[0]),
            enddate: formatDate(dates[1]),
            meterNo: selectedMeter,
            level1id: level1id,
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // <-- Add this
          },
          withCredentials: true,
        }),
        axios.get(`${baseURL}/singlemeterView/dailybillingData`, {
          params: {
            startdate: formatDate(dates[0]),
            enddate: formatDate(dates[1]),
            meterNo: selectedMeter,
            level1id: level1id,
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // <-- Add this
          },
          withCredentials: true,
        }),
        axios.get(`${baseURL}/singlemeterView/billingData`, {
          params: {
            startdate: formatDate(dates[0]),
            enddate: formatDate(dates[1]),
            meterNo: selectedMeter,
            level1id: level1id,
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // <-- Add this
          },
          withCredentials: true,
        }),
      ]);

      // Handle responses
      responses.forEach((response, index) => {
        if (response.status === "fulfilled") {
          //console.log(`API ${index + 1} Success:`, response.value.data);
        } else {
          console.error(`API ${index + 1} Error:`, response.reason);
        }
      });

      // Store data if responses are valid
      setInstantData(
        responses[0].status === "fulfilled" ? responses[0].value.data.original : []
      );
      setInstantDataReverse(
        responses[0].status === "fulfilled" ? responses[0].value.data.reversed : []
      );
      setEventsData(
        responses[1].status === "fulfilled" ? responses[1].value.data.original : []
      );
      setEventsDataReverse(
        responses[1].status === "fulfilled" ? responses[1].value.data.reversed : []
      );
      setLoadSurveyData(
        responses[2].status === "fulfilled" ? responses[2].value.data.original : []
      );
      setLoadSurveyDataReverse(
        responses[2].status === "fulfilled" ? responses[2].value.data.reversed : []
      );

      setDailyBillingData(
        responses[3].status === "fulfilled" ? responses[3].value.data.original : []
      );
      setDailyBillingDataReverse(
        responses[3].status === "fulfilled" ? responses[3].value.data.reversed : []
      );

      setBillingData(
        responses[4].status === "fulfilled" ? responses[4].value.data.original : []
      );

      setBillingDataReverse(
        responses[4].status === "fulfilled" ? responses[4].value.data.reversed : []
      );
    } catch (err) {
      console.error("Unexpected error fetching meter data:", err);
    } finally {
      setLoading(false);
    }
  };
  // Function to fetch data
  const fetchChartsData = (getMeterNo) => {
    axios
      .get(`${baseURL}/singlemeterView/instantDataLatest`, {
        params: {
          meterNo: getMeterNo,
        },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        // Transform the data

        const transformedData = response.data
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
        setChartsData(transformedData);
      })
      .catch((err) => {
        console.error("Error fetching meter data:", err);
      });
  };
  // Function to fetch data
  const fetchLoadData = (getMeterNo) => {
    axios
      .get(`${baseURL}/singlemeterView/minVoltageMaxLoadData`, {
        params: {
          meterNo: getMeterNo,
        },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setLoadData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching meter data:", err);
      });
  };

  const fetchEventsLogData = async (getMeterNo, getDates) => {
    try {
      const response = await axios.get(
        `${baseURL}/singlemeterView/eventDataLog`,
        {
          params: {
            startDate: formatDate(getDates[0]),
            endDate: formatDate(getDates[1]),
            meterNo: getMeterNo,
          },
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setEventsLogData(
        response.data.length > 0 ? response.data : ["No event logs available."]
      );
    } catch (error) {
      console.error("API Error (event logs):", error);
      //setMetersData(["Error fetching logs. Please try again."]);
    } finally {
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const sessionMeterNo =
        sessionStorage.getItem("meterNumber") || selectedMeter;
      const sessionDates = JSON.parse(sessionStorage.getItem("dates")) || dates;
      if (sessionMeterNo) {
        fetchEventsLogData(sessionMeterNo, sessionDates);
        fetchLoadData(sessionMeterNo);
        fetchChartsData(sessionMeterNo);
      } else {
        console.warn(
          "No meter number found in session storage or selected meter."
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-fetch data when a meter is selected
  useEffect(() => {
    if (!selectedMeter || hasFetchedMeterData.current) return;
    hasFetchedMeterData.current = true;
    setLoading(true);
    fetchData();
  }, []);

  // Convert meter numbers to react-select options
  const meterOptions = meterNumbers.map((meter) => ({
    value: meter,
    label: meter,
  }));

  const [selectedChart, setSelectedChart] = useState("instant");
  const chartOptions = [
    { value: "instant", label: "Instant Data" },
    { value: "events", label: "Events" },
    { value: "dailyBilling", label: "Daily Billing" },
    { value: "loadSurvey", label: "Load Survey" },
    { value: "monthlyBilling", label: "Monthly Billing" },
  ];

  const [view, setView] = useState("chart");

  return (
    <div style={{ background: colors.grey[1000], padding: "20px" }}>
      <div className="mt-3">
        <div className="row align-items-center g-3">
          {/* Start Date Picker */}
          <div className="col-md-3">
            <label className="fw-bold mb-1">Start Date:</label>
            <DatePicker
              selected={dates[0]} // Start Date
              onChange={(date) => setDates([date, dates[1]])} // Update start date
              dateFormat="MM/dd/yyyy"
              placeholderText="Select start date"
              isClearable
              maxDate={new Date()}
              className="form-control w-100"
            />
          </div>

          {/* End Date Picker */}
          <div className="col-md-3">
            <label className="fw-bold mb-1">End Date:</label>
            <DatePicker
              selected={dates[1]} // End Date
              onChange={(date) => setDates([dates[0], date])} // Update end date
              dateFormat="MM/dd/yyyy"
              placeholderText="Select end date"
              isClearable
              maxDate={new Date()}
              className="form-control w-100"
            />
          </div>

          {/* Select Meter Number */}
          <div className="col-md-3">
            <label htmlFor="meterSelect" className="fw-bold mb-1">
              Select Meter Number:
            </label>
            <Select
              id="meterSelect"
              options={meterOptions}
              value={meterOptions.find(
                (option) => option.value === selectedMeter
              )}
              onChange={(selectedOption) => {
                setSelectedMeter(selectedOption?.value || "");
              }}
              isSearchable={true}
              placeholder="Select a meter..."
              className="w-100"
            />
          </div>

          {/* Submit Button */}
          <div className="col-md-3">
            <button
              onClick={fetchData}
              className="btn btn-success form-control mt-4 w-50 fs-6"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginLeft: "-25px", marginTop: "20px" }}>
        <div className="col-lg-8 col-md-12 mb-4">
          {/* Meter Details Accordion */}
          <Accordion
            defaultExpanded
            sx={{
              backgroundColor: colors.primary[400],
              color: colors.primary[100],
              minHeight: "auto",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: colors.primary[100] }} />
              }
            >
              <h6 className="card-title" style={{ fontWeight: "bold" }}>
                Meter Details
              </h6>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                sx={{ px: 2, py: 1, overflowY: "auto", maxHeight: "400px" }}
              >
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {/* Left Column */}
                    <Grid item xs={12} sm={6}>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Meter Number :</strong>{" "}
                        {meterData.meterNo ? meterData.meterNo : "N/A"}
                      </Typography>
                      {meterData.consumerNo && (
                        <Typography
                          fontSize="14px"
                          sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          <strong>Consumer Number :</strong>{" "}
                          {meterData.consumerNo ? meterData.consumerNo : "N/A"}
                        </Typography>
                      )}
                      {meterData.consumerName && (
                        <Typography
                          fontSize="14px"
                          sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          <strong>Consumer Name :</strong>{" "}
                          {meterData.consumerName
                            ? meterData.consumerName
                            : "N/A"}
                        </Typography>
                      )}
                      {meterData.feederCode && (
                        <Typography
                          fontSize="14px"
                          sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          <strong>Feeder Code :</strong>{" "}
                          {meterData.feederCode ? meterData.feederCode : "N/A"}
                        </Typography>
                      )}
                      {meterData.feederName && (
                        <Typography
                          fontSize="14px"
                          sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          <strong>Feeder Name :</strong>{" "}
                          {meterData.feederName ? meterData.feederName : "N/A"}
                        </Typography>
                      )}
                      {meterData.dtrCode && (
                        <Typography
                          fontSize="14px"
                          sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          <strong>DTR Code :</strong>{" "}
                          {meterData.dtrCode ? meterData.dtrCode : "N/A"}
                        </Typography>
                      )}
                      {meterData.dtrName && (
                        <Typography
                          fontSize="14px"
                          sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          <strong>DTR Name :</strong>{" "}
                          {meterData.dtrName ? meterData.dtrName : "N/A"}
                        </Typography>
                      )}

                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Installation Date :</strong>{" "}
                        {meterData.insertedDate
                          ? new Date(meterData.insertedDate)
                              .toISOString()
                              .split("T")[0]
                          : "N/A"}
                      </Typography>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Location:</strong> LV Side Smart Meter DTR
                        Hanumakonda Division Gopalpur Section
                      </Typography>

                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Meter Make :</strong>{" "}
                        {meterData.make
                          ? String(meterData.make).toUpperCase()
                          : "N/A"}
                      </Typography>

                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>CD Kva :</strong> 100 Kva
                      </Typography>

                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>MF :</strong> {meterData.mf ? meterData.mf : 0}
                      </Typography>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} sm={6}>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Connection Type :</strong>{" "}
                        {meterData.category ? meterData.category : "N/A"}
                      </Typography>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Status :</strong> Active
                      </Typography>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Phase :</strong>{" "}
                        {meterData.phase ? meterData.phase : "N/A"}
                      </Typography>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Meter RTC :</strong>{" "}
                        {meterData.meetrRtc
                          ? new Date(meterData.meetrRtc)
                              .toISOString()
                              .split("T")[0]
                          : "N/A"}
                      </Typography>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>PT Ratio :</strong> 11K
                      </Typography>

                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>CT Ratio :</strong> 200/5A
                      </Typography>

                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>OverLoad Limit :</strong>{" "}
                        {meterData.overloadLimit ? meterData.overloadLimit : 0}
                      </Typography>
                      <Typography
                        fontSize="14px"
                        sx={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      >
                        <strong>Over Current Limit :</strong>{" "}
                        {meterData.overcurrentLimit
                          ? meterData.overcurrentLimit
                          : 0}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Right Column - Expandable Events Log */}
        <div className="col-lg-4 col-md-12 mb-4">
          <div
            sx={{
              minHeight: "auto",
            }}
          >
            <EventLogs
              metersData={eventsLogData}
              colors={colors}
              meterNumber={selectedMeter}
              dates={dates}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <Accordion
          defaultExpanded
          sx={{
            background: colors.primary[400],
            color: colors.primary[100],
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: colors.primary[100] }} />}
          >
            <h6 className="card-title" style={{ fontWeight: "bold" }}>
              Live View
            </h6>
          </AccordionSummary>
          <AccordionDetails>
            <SingleMeterCharts data={chartsdata} loadData={loadData} />
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="row mt-4">
        <Accordion
          defaultExpanded
          sx={{
            background: colors.primary[400],
            color: colors.primary[100],
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: colors.primary[100] }} />}
          >
            <h6 className="card-title" style={{ fontWeight: "bold" }}>
              Graphical View
            </h6>
          </AccordionSummary>
          <AccordionDetails>
            {/* Container for Buttons and Select Dropdown */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* View Selection Buttons (Left Side) */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => setView("chart")}
                  className={`btn ${
                    view === "chart" ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Chart View
                </button>
                <button
                  onClick={() => setView("table")}
                  className={`btn ${
                    view === "table" ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Table View
                </button>
              </div>

              {/* Select Dropdown (Right Side) */}
              <div style={{ minWidth: "250px" }}>
                <Select
                  options={chartOptions}
                  value={chartOptions.find(
                    (opt) => opt.value === selectedChart
                  )}
                  onChange={(selected) => setSelectedChart(selected.value)}
                />
              </div>
            </div>

            {/* Conditional Rendering */}
            <div className="mt-3" style={{ overflowX: "auto" }}>
              {selectedChart === "instant" &&
                (view === "chart" ? (
                  <InstantDataChart data={instantDataReverse} />
                ) : (
                  <InstantDataTable data={instantData} />
                ))}
              {selectedChart === "events" &&
                (view === "chart" ? (
                  <EventsDataChart data={eventsDataReverse} />
                ) : (
                  <EventsDataTable data={eventsData} />
                ))}
              {selectedChart === "loadSurvey" &&
                (view === "chart" ? (
                  <LoadSurveyChart data={loadSurveyDataReverse} />
                ) : (
                  <LoadSurveyTable data={loadSurveyData} />
                ))}

              {selectedChart === "dailyBilling" &&
                (view === "chart" ? (
                  <DailyBillingChart data={dailyBillingDataReverse} />
                ) : (
                  <DailyBillingTable data={dailyBillingData} />
                ))}

              {selectedChart === "monthlyBilling" &&
                (view === "chart" ? (
                  <MonthlyBillingChart data={billingDataReverse} />
                ) : (
                  <MonthlyBillingTable data={billingData} />
                ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* Loading Indicator */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Loading meter data...
        </div>
      )}
    </div>
  );
}

export default SingleMeter;
