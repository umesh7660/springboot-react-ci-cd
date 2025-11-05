import React from "react";
import { Navigate } from "react-router-dom";

// Lazy loading components
const Login = React.lazy(() => import("./auth/index"));
const Dashboard = React.lazy(() => import("./scenes/dashboard/index"));
const NotFound = React.lazy(() => import("./error/NotFound"));
const EmojiMart = React.lazy(() => import("./auth/Emoji"));
const MapWithClusters = React.lazy(() => import("./components/mapChart"));
const Register = React.lazy(() => import("./auth/Register"));
const ForgotPassword = React.lazy(() => import("./auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./auth/ResetPassword"));
const SingleMeter = React.lazy(() => import("./meters/singleMeter"));
const Team = React.lazy(() => import("./scenes/team/index"));
const Contacts = React.lazy(() => import("./scenes/contacts/index"));
const Invoices = React.lazy(() => import("./scenes/invoices/index"));
const Form = React.lazy(() => import("./scenes/form/index"));
const FAQ = React.lazy(() => import("./scenes/faq/index"));
const Charts=React.lazy(()=> import("./meters/singleMeterCharts.jsx"));

const routes = (isAuthenticated, setIsAuthenticated) => [
  { path: "/", element: <Login setIsAuthenticated={setIsAuthenticated} /> },
  { path: "/emoji", element: <EmojiMart /> },
  { path: "/map", element: <MapWithClusters /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/dashboard", element: isAuthenticated ? <Dashboard /> : <Navigate to="/" /> },
  { path: "/tableData", element: isAuthenticated ? <Dashboard /> : <Navigate to="/" /> },
  { path: "/singleMeter", element: isAuthenticated ? <SingleMeter /> : <Navigate to="/" /> },
  { path: "/team", element: isAuthenticated ? <Team /> : <Navigate to="/" /> },
  { path: "/contacts", element: isAuthenticated ? <Contacts /> : <Navigate to="/" /> },
  { path: "/invoices", element: isAuthenticated ? <Invoices /> : <Navigate to="/" /> },
  { path: "/form", element: isAuthenticated ? <Form /> : <Navigate to="/" /> },
  { path: "/faq", element: isAuthenticated ? <FAQ /> : <Navigate to="/" /> },
  {path: "/charts",element:isAuthenticated?<Charts/>:<Navigate to="/"/>},
  { path: "*", element: <NotFound /> },
];

export default routes;
