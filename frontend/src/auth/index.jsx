import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import "../styles.css";
import baseURL from "../config";
axios.defaults.withCredentials = true;

const Login = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseURL}/auth/login`,
        { id: { userLoginid: user }, password: password },
        { headers: { "Content-Type": "application/json" } }
      );

      // ✅ Use sessionStorage (or change Dashboard to use localStorage)
      sessionStorage.setItem("userObject", JSON.stringify(response.data));
      sessionStorage.setItem("isAuthenticated", "true");

      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("API Error:", error);
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="main-container">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src="/images/logo.png" alt="logo" width={400} />
      </div>

      <div className="login-container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="login-card"
        >
          <h2 className="login-title">⚡ Analogics Login</h2>
          <p className="login-subtitle">Manage your smart meter with ease</p>

          {error && <p className="error-message">{error}</p>}

          <form className="login-form" onSubmit={handleLogin}>
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
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              className="login-button"
            >
              Sign In
            </motion.button>
          </form>

          <p className="login-footer">
            Forgot password? <Link to="/forgot-password">Reset here</Link>
          </p>

          <p className="login-footer">
            New here? <Link to="#">Create an account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
