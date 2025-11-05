import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  Grid,
  FormLabel,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from "../../config";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material/styles";
import OnDemandReport from "./OnDemandReport";
import OnDemandData from "./OndemeanData";

const validationSchema = Yup.object({
  meterNumbers: Yup.array().min(1, "Select at least one meter").required(),
  demandTypes: Yup.object()
    .typeError("Select a demand type")
    .required("Select a demand type"),
  // fromDate: Yup.date().required("From Date is required"),
  // toDate: Yup.date()
  //   .min(Yup.ref("fromDate"), "To Date must be after From Date")
  //   .required("To Date is required"),
});

const Ondemand2 = () => {
  const [meterOptions, setMeterOptions] = useState([]);
  const [demandTypes, setDemandTypes] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isFetched = useRef(false);
  const [versions, setVersions] = useState([]);
  const [integrationPeriod, setIntegrationPeriod] = useState("900");
  const [netMeteringOption, setNetMeteringOption] = useState("Net Metering");

  const storedUser = JSON.parse(sessionStorage.getItem("userObject"));

  const level1id = storedUser.user.level1Id;
  console.log("userObject from sessionStorage:", level1id);
  const token = storedUser.token || storedUser.accessToken; // Adjust based on how it's stored

  const dateTimeFields = ["loadsurveydata", "eventsdata"];
  const singleDateTimeFields = ["rtcchange"];
  const singleDateFields = ["billingdatechange"];
  const dateFields = [
    "voltageevent",
    "transitionevent",
    "powerevent",
    "otherevent",
    "nonrolloverevent",
    "instantevent",
    "dailybillingdata",
    "currentevent",
    "billingdata",
    "controlevent",
  ];
  const selectFields = [
    "CFG Upload",
    "demandintegrationperiod",
    "Meter Fota",
    "Modem Fota",
    "netmeterconversion",
    "profilecaptureperiod",
  ];
  const noFields = ["connect", "disconnect", "loadcurtailment", "ping"];

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;
    const fetchMeters = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/fetchMeterList?level1id=${level1id}`);
        setMeterOptions(
          res.data.map((meter) => ({ value: meter, label: meter }))
        );
      } catch (error) {
        toast.error("Failed to load meters.");
      }
    };

    /* const fetchDemandTypes = async () => {
       try {
         const res = await axios.get(`${baseURL}/ondemand/fetchDemandType`);
         if (res.data && typeof res.data === "object") {
           setDemandTypes(
             Object.entries(res.data).map(([label, value]) => ({ value, label }))
           );
         }
       } catch (error) {
         toast.error("Failed to load demand types.");
       }
     };
     */

    const fetchDemandTypes = () => {
      const dummyData = {
        billingdata: "#23#",
        dailybillingdata: "#24#",
        eventsdata: '#33#',
        instantdata: "#34#",
        loadsurveydata: "#22#",
        ping: "#50#",
        readfulldata: '#all#',
        rtcchange: "#52#",

      };
      setDemandTypes(
        Object.entries(dummyData).map(([label, value]) => ({
          value,
          label,
        }))
      );
    };

    fetchMeters();
    fetchDemandTypes();
  }, []);
  useEffect(() => {
    if (demandTypes === "cfgupload" || demandTypes === "meterfota") {
      axios.get("/api/getVersions").then((response) => {
        setVersions(response.data);
      });
    }
  }, [demandTypes]);
  const options = [
    { value: "900", label: "900" },
    { value: "800", label: "800" },
    { value: "500", label: "500" },
    { value: "1800", label: "1800" },
    { value: "3600", label: "3600" },
  ];
  const selectedVersion = [
    { value: "CFG_for_FOTA_20200706", label: "CFG_for_FOTA_20200706" },
    { value: "CFG_for_FOTA_202002343", label: "CFG_for_FOTA_202002343" },
    { value: "CFG_for_FOTA_202002235", label: "CFG_for_FOTA_202002235" },
    { value: "CFG_for_FOTA_202013434", label: "CFG_for_FOTA_202013434" },
  ];
  const meterFota = [
    {
      value: "FP60093V07R007M017(22062716)",
      label: "FP60093V07R007M017(22062716)",
    },
    {
      value: "FP60093V07R007M015(21071214)",
      label: "FP60093V07R007M015(21071214)",
    },
    {
      value: "FP60093V07R007M017(22062715)",
      label: "FP60093V07R007M017(22062715)",
    },
    {
      value: "FP60093V07R007M017(22062717)",
      label: "FP60093V07R007M017(22062717)",
    },
  ];
  const netMeterConverion = [
    { value: "Net Metering", label: "Net Metering" },
    { value: "Forward Metering", label: "Forward Metering" },
  ];
  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toISOString().split("T")[0];
  };
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(`${dateStr}T00:00:00`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
        margin: '10px'
      }}
    >

      <Card
        sx={{
          width: "100%",
          maxWidth: 12000,
          p: 3,
          boxShadow: 5,
          borderRadius: 3,
        }}
        style={{ background: colors.primary[400], color: colors.primary[100] }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="fw-bold text-primary mb-4"
          >
            OnDemand Meter Request
          </Typography>

          <Formik
            initialValues={{
              meterNumbers: [],
              demandTypes: null,
              fromDate: null,
              toDate: null,
              selectOption: null,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              const requestData = {
                meterNo: values.meterNumbers.map((m) => m.value),
                demandTypeNames: values.demandTypes
                  ? values.demandTypes.label
                  : "",
                demandTypeCodes: values.demandTypes
                  ? values.demandTypes.value
                  : "",
              };

              if (dateTimeFields.includes(values.demandTypes?.label)) {

                const fromDate = new Date(values.fromDate);
                const utcFromDate = new Date(
                  Date.UTC(
                    fromDate.getFullYear(),
                    fromDate.getMonth(),
                    fromDate.getDate(),
                    fromDate.getHours(),
                    fromDate.getMinutes(),
                    fromDate.getSeconds(),
                    fromDate.getMilliseconds()
                  )
                );


                const date = new Date(values.toDate);
                const utcDate = new Date(
                  Date.UTC(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds(),
                    date.getMilliseconds()
                  )
                );
                requestData.fromDate = utcFromDate.toISOString();
                requestData.toDate = utcDate.toISOString();
              } else if (singleDateTimeFields.includes(values.demandTypes?.label)) {
                // Manually convert the date to UTC to preserve the selected time
                const date = new Date(values.toDate);
                const utcDate = new Date(
                  Date.UTC(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds(),
                    date.getMilliseconds()
                  )
                );

                requestData.toDate = utcDate.toISOString(); // Ensure UTC format without shifting
              }
              else if (dateFields.includes(values.demandTypes?.label)) {
                requestData.fromDate = values.fromDate;
                requestData.toDate = values.toDate;
              } else if (singleDateFields.includes(values.demandTypes?.label)) {
                const date = new Date(values.toDate);
                const utcDate = new Date(
                  Date.UTC(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds(),
                    date.getMilliseconds()
                  )
                );

                requestData.toDate = utcDate.toISOString(); 
              } else if (selectFields.includes(values.demandTypes?.label)) {
                requestData.selectOption = values.selectOption;
              }
              //console.log(requestData);
              try {
                await axios.post(
                  `${baseURL}/ondemand/getondemandRequest/`,
                  requestData,
                  { headers: { "Content-Type": "application/json" } }
                );
                toast.success("Request sent successfully.");
              } catch (error) {
                toast.error("Failed to send request.");
              } finally {
                setLoading(false);
                setSubmitting(false);
              }
            }}
          >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
              <Form>
                <Grid container spacing={2} alignItems="center">
                  {/* Meter Numbers */}
                  <Grid item xs={12} md={3}>
                    <FormLabel
                      className="mb-1"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      Meter Numbers
                    </FormLabel>
                    <Select
                      options={meterOptions}
                      isMulti
                      onChange={(selected) =>
                        setFieldValue("meterNumbers", selected)
                      }
                      placeholder="Select Meters"
                      className="fs-6"
                      menuPortalTarget={document.body}
                      menuShouldScrollIntoView={false}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: "30px", // Reduce height
                        }),
                      }}
                    />

                    <ErrorMessage
                      name="meterNumbers"
                      component="div"
                      style={{ color: "red", fontSize: "0.9rem" }}
                    />
                  </Grid>
                  {/* Demand Types */}
                  <Grid item xs={12} md={3}>
                    <FormLabel
                      className="mb-1"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      Demand Types
                    </FormLabel>
                    <Select
                      options={Array.isArray(demandTypes) ? demandTypes : []}
                      onChange={(selected) => {
                        setFieldValue("demandTypes", selected);
                        setFieldValue("fromDate", null);
                        setFieldValue("toDate", null);
                        setFieldValue("selectOption", null);
                      }}
                      placeholder="Select Demand Type"
                      className="fs-6"
                      menuPortalTarget={document.body}
                      menuShouldScrollIntoView={false}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: "30px", // Reduce height
                        }),
                        valueContainer: (provided) => ({
                          ...provided,
                          height: "30px",
                          padding: "0px 8px",
                        }),
                        input: (provided) => ({
                          ...provided,
                          margin: "0px",
                        }),
                        menu: (provided) => ({
                          ...provided,
                          maxHeight: "200px", // Limit dropdown height
                          overflowY: "auto", // Enable scrolling
                        }),
                        menuList: (provided) => ({
                          ...provided,
                          maxHeight: "200px", // Ensures list inside menu scrolls
                          overflowY: "auto",
                        }),
                        option: (provided) => ({
                          ...provided,
                          padding: "5px 10px",
                          fontSize: "14px",
                        }),
                      }}
                    />

                    <ErrorMessage
                      name="demandTypes"
                      component="div"
                      style={{ color: "red", fontSize: "0.9rem" }}
                    />
                  </Grid>

                  {dateFields.includes(values.demandTypes?.label) && (
                    <>
                      {/* From Date */}
                      <Grid item xs={12} md={3}>
                        <FormLabel className="mb-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
                          Select From Date
                        </FormLabel>
                        <DatePicker
                          selected={
                            values.fromDate
                              ? parseDate(values.fromDate)
                              : (() => {
                                const defaultDate =
                                  values.demandTypes?.label === "billingdata"
                                    ? formatDate(new Date(new Date().setMonth(new Date().getMonth() - 1))) // 1 month back
                                    : formatDate(new Date(new Date().setDate(new Date().getDate() - 1))); // Yesterday
                                setFieldValue("fromDate", defaultDate);
                                return parseDate(defaultDate);
                              })()
                          }
                          onChange={(date) => setFieldValue("fromDate", formatDate(date))}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="Select From Date"
                          className="form-control fs-6"
                        />
                        <ErrorMessage name="fromDate" component="div" style={{ color: "red", fontSize: "0.9rem" }} />
                      </Grid>

                      {/* To Date */}
                      <Grid item xs={12} md={3}>
                        <FormLabel className="mb-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
                          Select To Date
                        </FormLabel>
                        <DatePicker
                          selected={
                            values.toDate
                              ? parseDate(values.toDate)
                              : (() => {
                                const defaultDate = formatDate(new Date()); // Default to today
                                setFieldValue("toDate", defaultDate);
                                return parseDate(defaultDate);
                              })()
                          }
                          onChange={(date) => setFieldValue("toDate", formatDate(date))}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="Select To Date"
                          className="form-control fs-6"
                          showTimeSelect={false}
                        />
                        <ErrorMessage name="toDate" component="div" style={{ color: "red", fontSize: "0.9rem" }} />
                      </Grid>
                    </>
                  )}


                  {/* Check based on label name */}
                  {dateTimeFields.includes(values.demandTypes?.label) && (
                    <>

                      <Grid item xs={12} md={3}>

                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Select From Date & Time
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={
                              values.fromDate ||
                              (() => {
                                const defaultDate = new Date(
                                  new Date().setDate(new Date().getDate() - 1)
                                );
                                setFieldValue("fromDate", defaultDate);
                                return defaultDate;
                              })()
                            }
                            onChange={(date) => setFieldValue("fromDate", date)}
                            showTimeSelect
                            timeIntervals={1}
                            dateFormat="yyyy-MM-dd h:mm aa"
                            placeholderText="Select From Date & Time"
                            className="form-control fs-6"

                          />
                        </div>
                        <ErrorMessage
                          name="fromDate"
                          component="div"
                          style={{ color: "red", fontSize: "0.9rem" }}
                        />
                      </Grid>
                      {/* To Date & Time */}
                      <Grid item xs={12} md={3}>

                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Select To Date & Time
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={
                              values.toDate ||
                              (() => {
                                const defaultDate = new Date();
                                setFieldValue("toDate", defaultDate);
                                return defaultDate;
                              })()
                            }
                            onChange={(date) => setFieldValue("toDate", date)}
                            showTimeSelect
                            timeIntervals={1}
                            dateFormat="yyyy-MM-dd h:mm aa"
                            placeholderText="Select To Date & Time"
                            className="form-control fs-6"
                          />
                        </div>
                      </Grid>

                    </>
                  )}



                  {singleDateTimeFields.includes(values.demandTypes?.label) && (
                    <Grid container spacing={2} style={{ marginLeft: "15px", marginTop: "10px" }}>
                      <Grid item xs={12} md={3}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Select Date & Time
                        </FormLabel>
                        <DatePicker
                          selected={
                            values.toDate ||
                            (() => {
                              const defaultDate = new Date();
                              defaultDate.setHours(0, 0, 0, 0);
                              setFieldValue("toDate", defaultDate);

                              return defaultDate;
                            })()
                          }
                          onChange={(date) => {
                            setFieldValue("toDate", date);
                            console.log("Selected toDate value:", date); // Log selected date value
                          }}

                          showTimeSelect
                          timeIntervals={1}
                          dateFormat="yyyy-MM-dd HH:mm"
                          placeholderText="Select Date & Time"
                          className="form-control fs-6"
                        />
                        <ErrorMessage
                          name="toDate"
                          component="div"
                          style={{ color: "red", fontSize: "0.9rem" }}
                        />
                      </Grid>
                    </Grid>
                  )}

                  {/* Check based on label name */}


                  {/* Check based on label name */}
                  {singleDateFields.includes(values.demandTypes?.label) && (
                    <div style={{ marginLeft: "15px", marginTop: "10px" }}>

                      {/* To Date */}
                      <Grid item xs={12} md={3}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Select Date
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={
                              parseDate(values.toDate) ||
                              (setFieldValue("toDate", formatDate(new Date())),
                                parseDate(formatDate(new Date())))
                            }
                            onChange={(date) =>
                              setFieldValue("toDate", formatDate(date))
                            }
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select To Date"
                            className="form-control fs-6"
                            showTimeSelect={false}
                          />
                        </div>
                      </Grid>
                    </div>
                  )}
                  {values.demandTypes?.label === "CFG Upload" && (
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <FormLabel
                        className="mb-1"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Select Option
                      </FormLabel>

                      <Select
                        options={selectedVersion}
                        onChange={(selectedOption) => {
                          setFieldValue("selectOption", selectedOption?.value);
                        }}
                        className="fs-6"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            width: "50vh", // Adjust width
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            height: "30px",
                            padding: "0px 8px", // Adjust padding to fit
                          }),
                          input: (provided) => ({
                            ...provided,
                            margin: "0px", // Reduce margin inside input
                          }),
                          menu: (provided) => ({
                            ...provided,
                            maxHeight: "150px", // Limit dropdown height
                            overflowY: "auto", // Enable scrolling if needed
                          }),
                          option: (provided) => ({
                            ...provided,
                            padding: "5px 10px", // Reduce option padding
                            fontSize: "14px", // Adjust font size if needed
                          }),
                        }}
                      />
                    </div>
                  )}
                  {["demandintegrationperiod", "profilecaptureperiod"].includes(
                    values.demandTypes?.label
                  ) && (
                      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          Select Option
                        </FormLabel>

                        <Select
                          options={options}
                          value={(() => {
                            const selected =
                              options.find(
                                (option) =>
                                  option.value ===
                                  (values.selectOption || integrationPeriod)
                              ) || null;

                            // Set default value only if selectOption is not set
                            if (!values.selectOption && integrationPeriod) {
                              setTimeout(
                                () =>
                                  setFieldValue(
                                    "selectOption",
                                    integrationPeriod
                                  ),
                                0
                              );
                            }
                            return selected;
                          })()}
                          onChange={(selectedOption) => {
                            setIntegrationPeriod(null);
                            setFieldValue("selectOption", selectedOption?.value);
                          }}
                          className="fs-6"
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              width: "50vh", // Adjust width
                              minHeight: "30px", // Reduce height
                            }),
                            valueContainer: (provided) => ({
                              ...provided,
                              height: "30px",
                              padding: "0px 8px",
                            }),
                            input: (provided) => ({
                              ...provided,
                              margin: "0px",
                            }),
                            menu: (provided) => ({
                              ...provided,
                              maxHeight: "120px", // Limit dropdown height
                              overflowY: "auto", // Enable scrolling
                            }),
                            menuList: (provided) => ({
                              ...provided,
                              maxHeight: "120px", // Ensures list inside menu scrolls
                              overflowY: "auto",
                            }),
                            option: (provided) => ({
                              ...provided,
                              padding: "5px 10px",
                              fontSize: "14px",
                            }),
                          }}
                        />
                      </div>
                    )}
                  {values.demandTypes?.label === "netmeterconversion" && (
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <FormLabel
                        className="mb-1"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Select Option
                      </FormLabel>

                      <Select
                        options={netMeterConverion}
                        value={(() => {
                          const selected =
                            netMeterConverion.find(
                              (option) =>
                                option.value ===
                                (values.selectOption || netMeteringOption)
                            ) || null;

                          // Set default value only if selectOption is not set
                          if (!values.selectOption && netMeteringOption) {
                            setTimeout(
                              () =>
                                setFieldValue(
                                  "selectOption",
                                  netMeteringOption
                                ),
                              0
                            );
                          }
                          return selected;
                        })()}
                        onChange={(selectedOption) => {
                          setNetMeteringOption(null);
                          setFieldValue("selectOption", selectedOption?.value);
                        }}
                        className="fs-6"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            width: "50vh", // Adjust width
                            minHeight: "30px", // Reduce height
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            height: "30px",
                            padding: "0px 8px",
                          }),
                          input: (provided) => ({
                            ...provided,
                            margin: "0px",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            maxHeight: "120px", // Limit dropdown height
                            overflowY: "auto", // Enable scrolling
                          }),
                          menuList: (provided) => ({
                            ...provided,
                            maxHeight: "120px", // Ensures list inside menu scrolls
                            overflowY: "auto",
                          }),
                          option: (provided) => ({
                            ...provided,
                            padding: "5px 10px",
                            fontSize: "14px",
                          }),
                        }}
                      />
                    </div>
                  )}
                  {values.demandTypes?.label === "Meter Fota" && (
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <FormLabel
                        className="mb-1"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Select Option
                      </FormLabel>

                      <Select
                        options={meterFota}
                        onChange={(selectedOption) => {
                          setFieldValue("selectOption", selectedOption?.value);
                        }}
                        className="fs-6"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            width: "300px", // Adjust width
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            height: "30px",
                            padding: "0px 8px", // Adjust padding to fit
                          }),
                          input: (provided) => ({
                            ...provided,
                            margin: "0px", // Reduce margin inside input
                          }),
                          menu: (provided) => ({
                            ...provided,
                            maxHeight: "150px", // Limit dropdown height
                            overflowY: "auto", // Enable scrolling if needed
                          }),
                          option: (provided) => ({
                            ...provided,
                            padding: "5px 10px", // Reduce option padding
                            fontSize: "14px", // Adjust font size if needed
                          }),
                        }}
                      />
                    </div>
                  )}
                  {values.demandTypes?.label === "Modem Fota" && (
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <FormLabel
                        className="mb-1"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Select Option
                      </FormLabel>

                      <Select
                        options={meterFota}
                        onChange={(selectedOption) => {
                          setFieldValue("selectOption", selectedOption?.value);
                        }}
                        className="fs-6"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            width: "50vh", // Adjust width
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            height: "30px",
                            padding: "0px 8px", // Adjust padding to fit
                          }),
                          input: (provided) => ({
                            ...provided,
                            margin: "0px", // Reduce margin inside input
                          }),
                          menu: (provided) => ({
                            ...provided,
                            maxHeight: "150px", // Limit dropdown height
                            overflowY: "auto", // Enable scrolling if needed
                          }),
                          option: (provided) => ({
                            ...provided,
                            padding: "5px 10px", // Reduce option padding
                            fontSize: "14px", // Adjust font size if needed
                          }),
                        }}
                      />
                    </div>
                  )}
                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={loading}
                      sx={{ height: 50, fontWeight: "bold", marginTop: "40px" }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
        <OnDemandData />
      </Card>


      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
};

export default Ondemand2;
