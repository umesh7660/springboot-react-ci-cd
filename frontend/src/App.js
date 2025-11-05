import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./auth";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import useIdleLogout from "./auth/useIdleLogout";
import Dashboard from "./dashboard";
import TabulerDashboard from "./dashboard/tableDashboard";
import SingleMeter from "./meters/singleMeter/singleMeter";
import RegisterEditMeter from "./meters/registerEdit/RegisterEditMeter";
import InstantReports from "./meters/reports/InstantReports";
import EventSummaryData from "./meters/reports/EventSummaryData";
import EventNotRestoration from "./meters/reports/EventNotRestoration";
import LoadSurveyReport from "./meters/reports/LoadSurveyReports";
import DailyBillingReport from "./meters/reports/DailyBillingReports";
import MonthlyBillingReport from "./meters/reports/MonthlyBillingReports";
import RealTimeTampers from "./meters/reports/RealTimeTampers";
import DataAvailabilityReport from "./meters/reports/DataAvailabilityReport";
import Ondemand from "./meters/ondemand/Ondemand";
import OnDemandReport from "./meters/ondemand/OnDemandReport";
import UserManagement from "./UserRoleManagement/user/UserManagement";
import RoleManagement from "./UserRoleManagement/role/RoleManagement";
import UserForm from "./UserRoleManagement/user/UserForm";
import RoleForm from "./UserRoleManagement/role/RoleForm";
import ProfilePage from "./components/user/profile";
import Dashboard1 from "./test/Dashboard";
import NotFound from "./error/NotFound";
import DeviceData from "./meters/settings/DeviceData";
import MasterData from "./meterManagement/MasterData";
import MasterDataUpload from "./meterManagement/MasterDataUpload";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Footer from "./global/Footer";

function App() {
  useIdleLogout();
  const [theme, colorMode] = useMode();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = checking
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.title = "Analogics";
  }, []);

  // ✅ Load auth status once
  useEffect(() => {
    const authFlag = localStorage.getItem("isAuthenticated");
    const user = localStorage.getItem("userObject");

    if (authFlag === "true" && user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userObject");
    setIsAuthenticated(false);
  };

  // ✅ Auth route list
  const authRoutes = ["/", "/login", "/register", "/forgot-password", "/reset-password"];
  const isAuthRoute = authRoutes.includes(location.pathname);

  // ✅ Protect routes
  const PrivateRoute = ({ element }) =>
    isAuthenticated ? element : <Navigate to="/login" replace />;

  // ✅ Wait for auth state to load before rendering
  if (isAuthenticated === null) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {isAuthenticated && !isAuthRoute && (
          <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1300 }}>
            <Topbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} onLogout={handleLogout} />
          </Box>
        )}

        <Box display="flex" sx={{ pt: isAuthenticated && !isAuthRoute ? "64px" : 0, height: "100vh" }}>
          {isAuthenticated && !isAuthRoute && (
            <Box
              sx={{
                width: isCollapsed ? "80px" : "250px",
                transition: "width 0.3s ease-in-out",
                flexShrink: 0,
              }}
            >
              <Sidebar isCollapsed={isCollapsed} />
            </Box>
          )}

          <Box flexGrow={1} sx={{ overflowY: "auto" }}>
            <Routes>
              {/* Public */}
              <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Private */}
              <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/tableData" element={<PrivateRoute element={<TabulerDashboard />} />} />
              <Route path="/singleMeter" element={<PrivateRoute element={<SingleMeter />} />} />
              <Route path="/meterForm" element={<PrivateRoute element={<RegisterEditMeter />} />} />
              <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
              <Route path="/instant-reports" element={<PrivateRoute element={<InstantReports />} />} />
              <Route path="/event-summary-reports" element={<PrivateRoute element={<EventSummaryData />} />} />
              <Route path="/eventnot-restoration-reports" element={<PrivateRoute element={<EventNotRestoration />} />} />
              <Route path="/loadsurvey-reports" element={<PrivateRoute element={<LoadSurveyReport />} />} />
              <Route path="/daily-billing-reports" element={<PrivateRoute element={<DailyBillingReport />} />} />
              <Route path="/monthly-billing-reports" element={<PrivateRoute element={<MonthlyBillingReport />} />} />
              <Route path="/real-time-tampers" element={<PrivateRoute element={<RealTimeTampers />} />} />
              <Route path="/data-avalability-report" element={<PrivateRoute element={<DataAvailabilityReport />} />} />
              <Route path="/ondemand" element={<PrivateRoute element={<Ondemand />} />} />
              <Route path="/onDemandReport" element={<PrivateRoute element={<OnDemandReport />} />} />
              <Route path="/master-data" element={<PrivateRoute element={<MasterData />} />} />
              <Route path="/master-data-upload" element={<PrivateRoute element={<MasterDataUpload />} />} />
              <Route path="/deviceData" element={<PrivateRoute element={<DeviceData />} />} />
              <Route path="/role-management" element={<PrivateRoute element={<RoleManagement />} />} />
              <Route path="/user-form" element={<PrivateRoute element={<UserForm />} />} />
              <Route path="/role-form" element={<PrivateRoute element={<RoleForm />} />} />
              <Route path="/user-management" element={<PrivateRoute element={<UserManagement />} />} />
              <Route path="/test" element={<PrivateRoute element={<Dashboard1 />} />} />
              <Route path="*" element={<PrivateRoute element={<NotFound />} />} />
            </Routes>

            {!isAuthRoute && isAuthenticated && <Footer setIsSidebar={() => {}} />}
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
