import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../cssStyles/resetPassword.css";
import { FaUser, FaLock } from "react-icons/fa";
import baseURL from "../config";

const ResetPassword = () => {
  const location = useLocation();
  const { userLoginid,dashboard } = location.state || {};
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newPassword !== retypePassword) {
      toast.error("New passwords do not match!");
      return;
    }
  
    try {
      const response = await axios.post(
        `${baseURL}/auth/reset-password`,
        { userLoginid: userLoginid, password: newPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      const status = response.data; // Ensure status is retrieved from the response
  
      if (status === "success") {
        toast.success("Password reset successful!");
        navigate("/login");
      } else {
        toast.error("Failed to reset password. Please try again.");
      }
  
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to reset password. Please try again.";
      toast.error(errorMessage);
    }
  };
  

  return (
    <div className="reset-password-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="reset-password-card"
      >
        <h2 className="reset-password-title">Reset Password</h2>

        <form className="reset-password-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" value={userLoginid} readOnly />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword} // FIXED: Correct state variable
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Retype New Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(246, 59, 68, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => navigate(dashboard ? "/dashboard" : "/forgot-password")}
              className="discard-button"
            >
              Discard
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(59,130,246,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-button"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
