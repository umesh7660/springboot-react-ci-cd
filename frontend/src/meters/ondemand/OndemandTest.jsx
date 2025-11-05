import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format as FormatDateLib } from "date-fns";

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

const validationSchema = Yup.object({
  meterNumbers: Yup.array().min(1, "Select at least one meter").required(),
  demandTypes: Yup.object().required("Select a demand type"),
});

const Ondemand = () => {
  const [meterOptions, setMeterOptions] = useState([]);
  const [demandTypes, setDemandTypes] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;
    const fetchMeters = async () => {
      try {
        const res = await axios.get(`${baseURL}/data/fetchMeterList`);
        setMeterOptions(
          res.data.map((meter) => ({ value: meter, label: meter }))
        );
      } catch (error) {
        toast.error("Failed to load meters.");
      }
    };

    const fetchDemandTypes = () => {
      const dummyData = {
        billingdata: "#23#",
        dailybillingdata: "#24#",
        loadsurveydata: "#22#",
        ping: "#50#",
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: 500,
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
              fromDateTime: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
              toDateTime: new Date(), // Today
              fromDate: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
              toDate: new Date(), // Today
              fromMonth: new Date(new Date().setMonth(new Date().getMonth() - 1)),
              toMonth: new Date(), // Today
            }}
            
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              let requestData = {
                meterNo: values.meterNumbers.map((m) => m.value),
                demandTypeNames: values.demandTypes
                  ? values.demandTypes.label
                  : "",
                demandTypeCodes: values.demandTypes
                  ? values.demandTypes.value
                  : "",
              };

              if (["loadsurveydata"].includes(values.demandTypes?.label)) {
                requestData.fromDateTime = values.fromDateTime;
                requestData.toDateTime = values.toDateTime;
                requestData.fromDate = null;
                requestData.toDate =null;
                requestData.fromMonth = null;
                requestData.toMonth =null;
              } else if (
                ["dailybillingdata"].includes(
                  values.demandTypes?.label
                )
              ) {
                requestData.fromDate = values.fromDate;
                requestData.toDate = values.toDate;
                requestData.fromDateTime = null;
                requestData.toDateTime = null;
                requestData.fromMonth = null;
                requestData.toMonth =null;
              }else if (
                ["billingdata"].includes(
                  values.demandTypes?.label
                )
              ) {
                requestData.fromMonth = values.fromMonth;
                requestData.toMonth =values.toMonth;
                requestData.fromDate = null;
                requestData.toDate = null;
                requestData.fromDateTime = null;
                requestData.toDateTime = null;
              }else{
                requestData.fromDateTime = null;
                requestData.toDateTime = null;
                requestData.fromDate = null;
                requestData.toDate =null;
                requestData.fromMonth = null;
                requestData.toMonth =null;
              }
             // console.log(requestData);
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
                <Grid container spacing={2}>
                  {/* Meter Numbers */}
                  <Grid item xs={12}>
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
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        menu: (provided) => ({
                          ...provided,
                          maxHeight: "250px",
                          overflowY: "auto",
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
                  <Grid item xs={12}>
                    <FormLabel
                      className="mb-1"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      Demand Types
                    </FormLabel>
                    <Select
                      options={demandTypes}
                      onChange={(selected) =>
                        setFieldValue("demandTypes", selected)
                      }
                      placeholder="Select Demand Type"
                      className="fs-6"
                      menuPortalTarget={document.body}
                      menuShouldScrollIntoView={false}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        menu: (provided) => ({
                          ...provided,
                          maxHeight: "250px",
                          overflowY: "auto",
                        }),
                      }}
                    />

                    <ErrorMessage
                      name="demandTypes"
                      component="div"
                      style={{ color: "red", fontSize: "0.9rem" }}
                    />
                  </Grid>

                  {/* Check based on label name */}
                  {["loadsurveydata"].includes(values.demandTypes?.label) && (
                    <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                      {/* From Date & Time */}
                      <Grid item xs={12}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          From Date & Time
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={values.fromDateTime}
                            onChange={(date) =>
                              setFieldValue("fromDateTime", date)
                            }
                            showTimeSelect
                            timeIntervals={1}
                            dateFormat="yyyy-MM-dd h:mm aa"
                            className="form-control fs-6"
                          />
                        </div>
                        <ErrorMessage
                          name="fromDateTime"
                          component="div"
                          style={{ color: "red", fontSize: "0.9rem" }}
                        />
                      </Grid>
                      {/* To Date & Time */}
                      <Grid item xs={12}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          To Date & Time
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={values.toDateTime}
                            onChange={(date) =>
                              setFieldValue("toDateTime", date)
                            }
                            showTimeSelect
                            timeIntervals={1}
                            dateFormat="yyyy-MM-dd h:mm aa"
                            className="form-control fs-6"
                          />
                        </div>
                      </Grid>
                    </div>
                  )}
                  {/* Check based on label name */}
                  {["dailybillingdata"].includes(
                    values.demandTypes?.label
                  ) && (
                    <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                      {/* From Date */}
                      <Grid item xs={12}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          From Date
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={values.fromDate}
                            onChange={(date) => setFieldValue("fromDate", date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select From Date"
                            className="form-control fs-6"
                            showTimeSelect={false}
                          />
                        </div>
                      </Grid>

                      {/* To Date */}
                      <Grid item xs={12}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          To Date
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={values.toDate}
                            onChange={(date) => setFieldValue("toDate", date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select To Date"
                            className="form-control fs-6"
                            showTimeSelect={false}
                          />
                        </div>
                      </Grid>
                    </div>
                  )}
                   {/* Check based on label name */}
                   {["billingdata"].includes(
                    values.demandTypes?.label
                  ) && (
                    <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                      {/* From Month */}
                      <Grid item xs={12}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          From Month
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={values.fromMonth}
                            onChange={(date) => setFieldValue("fromMonth", date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select From Date"
                            className="form-control fs-6"
                            showTimeSelect={false}
                          />
                        </div>
                      </Grid>

                      {/* To Date */}
                      <Grid item xs={12}>
                        <FormLabel
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          To Month
                        </FormLabel>
                        <div>
                          <DatePicker
                            selected={values.toMonth}
                            onChange={(date) => setFieldValue("toMonth", date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select To Date"
                            className="form-control fs-6"
                            showTimeSelect={false}
                          />
                        </div>
                      </Grid>
                    </div>
                  )}
                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={loading}
                      sx={{ height: 50, fontWeight: "bold" }}
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
      </Card>
      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
};

export default Ondemand;
