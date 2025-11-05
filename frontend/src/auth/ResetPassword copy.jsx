import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../cssStyles/resetPassword.css"; 
import { FaUser, FaLock } from "react-icons/fa";
import baseURL from "../config";

const ResetPassword = () => {
  const location = useLocation();
  const { username, dummyPassword } = location.state || {};
  const [enteredDummyPassword, setEnteredDummyPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isDummyPasswordVerified, setIsDummyPasswordVerified] = useState(false);

  const navigate = useNavigate();

  const handleVerifyDummyPassword = () => {
    if (enteredDummyPassword === dummyPassword) {
      setIsDummyPasswordVerified(true);
      toast.success("Dummy password verified successfully!");
    } else {
      setIsDummyPasswordVerified(false);
      toast.error("Incorrect dummy password!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newPassword !== retypePassword) {
      toast.error("New passwords do not match!");
      return;
    }
  
    try {
      await axios.post(
        `${baseURL}/auth/reset-password`,
        { username, newPassword },
        { headers: { "Content-Type": "application/json" } }
      );
  
      toast.success("Password reset successful!");
      navigate("/login");
    } catch (error) {
      console.error("API Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
        //toast.error("API Error. Please try again.");
      } else {
        toast.error("Failed to reset password. Please try again.");
      }
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
            <input type="text" value={username} readOnly />
          </div>
          {!isDummyPasswordVerified && (
            <>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Dummy Password"
              value={enteredDummyPassword}
              onChange={(e) => setEnteredDummyPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(68, 148, 66, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleVerifyDummyPassword}
            className="verify-button"
          >
            Verify
          </motion.button>
          </>
            
          )}
          {isDummyPasswordVerified && (
            <>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}  // FIXED: Correct state variable
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={!isDummyPasswordVerified}
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
                  disabled={!isDummyPasswordVerified}
                  required
                />
              </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.8)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
             // disabled={!isDummyPasswordVerified || !newPassword || !retypePassword || newPassword !== retypePassword} // FIXED: Proper validation
              className="reset-password-button"
            >
            Submit
          </motion.button>
            </>
            
          )}

         
        </form>       
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
