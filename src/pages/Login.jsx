

import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


import bgImage from "../assets/loginsignup.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential.user);

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${bgImage})`
      }}
    >
      {/* Overlay */}
      <div style={styles.overlay}></div>

      {/* Login Card */}
      <div style={styles.card}>
        <h2 style={styles.title}>Farmer Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.passwordInput}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M3 3L21 21" stroke="black" strokeWidth="2" />
                  <path d="M10.58 10.58A2 2 0 0013.42 13.42" stroke="black" strokeWidth="2" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" />
                </svg>
              )}
            </span>
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "160px", // ✅ as you asked
    paddingTop: "150px",   // ✅ as you asked
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "Arial, sans-serif",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
  },

  card: {
    position: "relative",
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "16px",
    width: "340px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    zIndex: 2,
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2f4f2f",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #b7d3b0",
    background: "#fafafa",
    outline: "none",
  },

  passwordWrapper: {
    position: "relative",
    marginBottom: "15px",
  },

  passwordInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #b7d3b0",
    background: "#fafafa",
    outline: "none",
  },

  eyeIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#4e7d4e",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;
