import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../cssStyles/forgotstyles.css";
import { FaUser } from "react-icons/fa";
import baseURL from "../config";
const ForgotPassword = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  //  const [message, setMessage] = useState("");
  //const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${baseURL}/auth/forgot-password?userLoginid=${usernameOrEmail} `,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      const status = response.data; // Ensure we're checking response data
      if (status !== "found") {
        toast.error("Username not found. Please enter a valid username.");
        return;
      }
      navigate("/reset-password", {
        state: { userLoginid: usernameOrEmail, dashboard: false },
      });
  
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to verify username. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="forgot-password-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="forgot-password-card"
      >
        <h2 className="forgot-password-title">Forgot Password</h2>
        <p className="forgot-password-subtitle">
          Enter your username or email to receive a password reset link
        </p>

        {/* {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>} */}

        <form className="forgot-password-form" onSubmit={handleResetPassword}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="forgot-password-button"
          >
            Reset Password
          </motion.button>
        </form>

        <p className="forgot-password-footer">
          Remembered your password? <Link to="/login">Log in here</Link>
        </p>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
