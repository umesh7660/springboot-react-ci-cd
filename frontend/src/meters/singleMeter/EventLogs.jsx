import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useNavigate } from "react-router-dom";


const EventLogs = ({metersData, colors,meterNumber,dates }) => {
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollRef = useRef(null);
  const scrollTimeout = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  
  const handleViewClick = () => {
   navigate("/eventnot-restoration-reports",{state : {meterNo: meterNumber,dates :dates}})
  };
  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;

    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 20;

        // Reset scroll if at the bottom
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 500);
  
  }, [autoScroll]);

  // Detect user manual scroll
  const handleUserScroll = () => {
    setAutoScroll(false); // Stop auto-scrolling
    clearInterval(intervalRef.current); // Stop interval immediately

    // Restart auto-scroll after 5 seconds of inactivity
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setAutoScroll(true);
    }, 5000);
  };

  return (
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
      sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <h6 className="card-title" style={{ fontWeight: "bold" }}>
        Events Log
      </h6>
      <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
      <button className="btn btn-primary btn-sm" onClick={handleViewClick}>
          View
        </button>      </div>
    </AccordionSummary>
    <AccordionDetails>
      {/* Scrollable Logs */}
      <div
        ref={scrollRef}
        onScroll={handleUserScroll}
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f0f0f0",
        }}
      >
        {metersData.length > 0 ? (
              metersData.map((log, i) => (
                <div key={i} style={{ padding: "5px 0", fontSize: "14px" }}>
                  {log}
                </div>
              ))
            ) : (
              "No logs available"
            )}
      </div>
    </AccordionDetails>
  </Accordion>
</div>

  );
};

export default EventLogs;
