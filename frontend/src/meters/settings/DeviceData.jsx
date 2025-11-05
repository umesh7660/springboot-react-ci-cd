import { useState, lazy, Suspense } from "react";
import { Card, CardContent, CardHeader, Tabs, Tab, Box, Tooltip, CircularProgress } from "@mui/material";
import { Settings, Security, Build } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

 const DeviceSettings = lazy(() => import("./DeviceSettings"));
// const SecuredConnections = lazy(() => import("./SecuredConnections"));
// const Advanced = lazy(() => import("./Advanced"));


export default function DeviceData() {
   const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
        <Box  className="flex justify-center items-center p-6 w-full"
                sx={{
                  backgroundColor: colors.grey[1000],
                  color: colors.primary[100],
                  p: 4,
                }}
              >
      <Card sx={{ width: "100%", p: 3, boxShadow: 4, borderRadius: 3, bgcolor: "background.paper" }}>
        <Tabs 
          value={activeTab} 
          onChange={handleChange} 
          variant="fullWidth" 
          sx={{ borderBottom: 2, borderColor: "divider" }}
        >
          <Tooltip title="Configure device settings" arrow>
            <Tab icon={<Settings />} label="Device Settings" 
            sx={{ fontSize: 14, fontWeight: "bold",color: colors.grey[1100] }}
             style={{
        background: colors.primary[400],
        color: colors.primary[100],
        gap: 2,
      }} />
          </Tooltip>

        </Tabs>
        <CardContent sx={{ mt: 2, minHeight: 250 }}>
          <Suspense fallback={<CircularProgress sx={{ display: 'block', mx: 'auto', mt: 5 }} />}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 0 && <DeviceSettings />}
             
            </motion.div>
          </Suspense>
        </CardContent>
      </Card>
    </Box>
  );
}
