// src/layout/MainLayout.js
import React from "react";
import { Box } from "@mui/material";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import Footer from "../global/Footer";

const MainLayout = ({ children, isCollapsed, setIsCollapsed, setIsSidebar }) => {
  return (
    <div className="app">
      <Sidebar isCollapsed={isCollapsed} />
      <main className="content">
        <Topbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Box sx={{ minHeight: "calc(100vh - 120px)" }}>{children}</Box>
        <Footer setIsSidebar={setIsSidebar} />
      </main>
    </div>
  );
};

export default MainLayout;
