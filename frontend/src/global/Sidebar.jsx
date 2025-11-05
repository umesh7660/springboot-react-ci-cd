import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  Typography,
  useTheme,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";

import {
  HomeOutlined,
  PeopleOutlined,
  SecurityOutlined,
  ExpandLess,
  ExpandMore,
  BarChartOutlined,
  DescriptionOutlined,
  FlashOnOutlined,
  TimelineOutlined,
  EventNoteOutlined,
  StorageOutlined,
  WarningAmberOutlined,
  Settings,
  AssessmentOutlined,
} from "@mui/icons-material";

// Icon map for dynamic rendering
const iconMap = {
  "Main Dashboard": <HomeOutlined />,
  "Role Management": <SecurityOutlined />,
  "User Management": <PeopleOutlined />,
  "On Demand Request": <FlashOnOutlined />,
  "On Demand Report": <DescriptionOutlined />,
  "Daily Report": <EventNoteOutlined />,
  "Alarm Report": <WarningAmberOutlined />,
  Settings: <Settings />,
};

// Reusable Item component
const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Tooltip 
      title={isCollapsed ? title : ""} 
      placement="right" 
      enterDelay={200} 
      leaveDelay={100}
    >
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
          borderRadius: "10px",
          margin: "6px 8px",
          transition: "all 0.3s ease-in-out",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        {!isCollapsed && (
          <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
        )}
        <Link to={to} />
      </MenuItem>
    </Tooltip>
  );
};

// Collapsible menu section component
const CollapsibleSection = ({ 
  title, 
  icon, 
  isOpen, 
  onToggle, 
  isCollapsed, 
  children 
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <ListItemButton onClick={onToggle}>
        <ListItemIcon sx={{ m: "15px 0 5px 10px" }}>
          {icon}
        </ListItemIcon>
        {!isCollapsed && (
          <ListItemText 
            primary={title}
            sx={{
              color: colors.grey[300],
              fontWeight: "bold",
            }} 
          />
        )}
        {!isCollapsed && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ m: "1px 0 1px 10px" }}>
          {children}
        </List>
      </Collapse>
    </>
  );
};

// Section header component
const SectionHeader = ({ title, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (isCollapsed) return null;

  return (
   <Typography
      variant="h6"
      className="font-bold text-gray-100 tracking-wider uppercase mt-5 mb-3 ml-6 text-xs"
      style={{ color: colors.grey[100] }}
    >
      {title}
    </Typography>
  );
};

const Sidebar = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [openReports, setOpenReports] = useState(false);
  const [openMeterManagement, setOpenMeterManagement] = useState(false);
  const location = useLocation();

  const userObject = JSON.parse(sessionStorage.getItem("userObject")) || {};
  const roleNames = userObject.reportNames || [];
  const headerNames = userObject.headerList || [];

  const handleReportsClick = () => setOpenReports(!openReports);
  const handleMeterManagementClick = () => setOpenMeterManagement(!openMeterManagement);

  useEffect(() => {
    const current = location.pathname.split("/")[1];
    if (current) {
      setSelected(current.charAt(0).toUpperCase() + current.slice(1));
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        //background: `linear-gradient(135deg, ${colors.primary[400]}, ${colors.primary[500]})`,
       // backdropFilter: "blur(8px)",
        "& .pro-sidebar-inner": {
          background: "transparent !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .pro-inner-item": {
          padding: "8px 24px 8px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#e61313ff !important",
          backgroundColor: "#32373aff !important",
          transform: "translateX(4px)",
        },
        "& .pro-menu-item.active": {
          color: "#e40e0eff !important",
          backgroundColor: "#0d9fe8ff !important",
          fontWeight: 600,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            {/* Dashboard Section */}
            {headerNames.includes("Dashboard") && (
              <>
                <SectionHeader title="DASHBOARD" isCollapsed={isCollapsed} />
                {roleNames.includes("MainDashboard") && (
                  <Item
                    title="Main Dashboard"
                    to="/dashboard"
                    icon={iconMap["Main Dashboard"]}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                )}
              </>
            )}

            {/* Data Section */}
            {headerNames.includes("Data") && (
              <>
                <SectionHeader title="DATA" isCollapsed={isCollapsed} />
                
                {roleNames.includes("Reports") && (
                  <CollapsibleSection
                    title="Reports"
                    icon={<DescriptionOutlined />}
                    isOpen={openReports}
                    onToggle={handleReportsClick}
                    isCollapsed={isCollapsed}
                  >
                    {roleNames.includes("Instant") && (
                      <Item
                        title="Instant"
                        to="/instant-reports"
                        icon={<BarChartOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("LoadSurvey") && (
                      <Item
                        title="Load Survey"
                        to="/loadsurvey-reports"
                        icon={<TimelineOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("DailyBilling") && (
                      <Item
                        title="Daily Billing"
                        to="/daily-billing-reports"
                        icon={<AssessmentOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("MonthlyBilling") && (
                      <Item
                        title="Monthly Billing"
                        to="/monthly-billing-reports"
                        icon={<EventNoteOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("EventsNotRestoration") && (
                      <Item
                        title="Events Not Restoration"
                        to="/eventnot-restoration-reports"
                        icon={<FlashOnOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("EventsSummaryData") && (
                      <Item
                        title="Events Summary Data"
                        to="/event-summary-reports"
                        icon={<WarningAmberOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("RealTimeTampers") && (
                      <Item
                        title="Real Time Tampers"
                        to="/real-time-tampers"
                        icon={<SecurityOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("DataAvailability") && (
                      <Item
                        title="Data Availability"
                        to="/data-avalability-report"
                        icon={<StorageOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                  </CollapsibleSection>
                )}
              </>
            )}

            {/* On Demand Section */}
            {headerNames.includes("On Demands") && (
              <>
                <SectionHeader title="ON DEMAND's" isCollapsed={isCollapsed} />
                <Item
                  title="On Demand Request"
                  to="/onDemand"
                  icon={iconMap["On Demand Request"]}
                  selected={selected}
                  setSelected={setSelected}
                  isCollapsed={isCollapsed}
                />
                {roleNames.includes("OnDemandReport") && (
                  <Item
                    title="On Demand Report"
                    to="/onDemandReport"
                    icon={iconMap["On Demand Report"]}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                )}
              </>
            )}

            {/* Configuration Section */}
            {headerNames.includes("Configuration") && (
              <>
                <SectionHeader title="CONFIGURATION" isCollapsed={isCollapsed} />
                
                {roleNames.includes("MeterManagement") && (
                  <CollapsibleSection
                    title="Meter Management"
                    icon={<DescriptionOutlined />}
                    isOpen={openMeterManagement}
                    onToggle={handleMeterManagementClick}
                    isCollapsed={isCollapsed}
                  >
                    {roleNames.includes("MasterData") && (
                      <Item
                        title="Master Data"
                        to="/master-data"
                        icon={<BarChartOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("MasterDataUpload") && (
                      <Item
                        title="Master Data Upload"
                        to="/master-data-upload"
                        icon={<AssessmentOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                    {roleNames.includes("MeterConfiguration") && (
                      <Item
                        title="Meter Configuration"
                        to="/deviceData"
                        icon={<Settings />}
                        selected={selected}
                        setSelected={setSelected}
                        isCollapsed={isCollapsed}
                      />
                    )}
                  </CollapsibleSection>
                )}

                {roleNames.includes("RoleManagement") && (
                  <Item
                    title="Role Management"
                    to="/role-management"
                    icon={iconMap["Role Management"]}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                )}
                {roleNames.includes("UserManagement") && (
                  <Item
                    title="User Management"
                    to="/user-management"
                    icon={iconMap["User Management"]}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                )}
              </>
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;