import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "72px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ff4d4d",
  },
  text: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  link: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#007bff",
  },
};

export default NotFound;
