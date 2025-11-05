import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../cssStyles/registerStyle.css";
import baseURL from "../config";

const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    
    try {
      const response = await axios.post(
        `${baseURL}/auth/register`,
        { username: user, email, password, phone },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Registration Successful: " + JSON.stringify(response.data));
      navigate("/login");
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Registration failed!");
    }
  };

  return (
    <div className="register-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="register-card"
      >
        <h2 className="register-title">🚀 Register</h2>
        <p className="register-subtitle">Create your account</p>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="User Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.8)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="register-button"
          >
            Register
          </motion.button>
        </form>

        <p className="register-footer">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Register;
