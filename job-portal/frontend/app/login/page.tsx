"use client";

import { FaUserAlt, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f1f5f9",
      }}
    >
      <div
        style={{
          width: 360,
          background: "#fff",
          padding: "40px 30px",
          borderRadius: 12,
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: 25,
            fontSize: 28,
            color: "#333",
          }}
        >
          Login
        </h2>

        {/* Email */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", marginBottom: 8 }}>Email</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f3f4f6",
              borderRadius: 8,
              padding: "10px 12px",
            }}
          >
            <FaUserAlt style={{ marginRight: 10, color: "#777" }} />
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: 15,
              }}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 25 }}>
          <label style={{ display: "block", marginBottom: 8 }}>Password</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f3f4f6",
              borderRadius: 8,
              padding: "10px 12px",
            }}
          >
            <FaLock style={{ marginRight: 10, color: "#777" }} />
            <input
              type="password"
              placeholder="Enter password"
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: 15,
              }}
            />
          </div>
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#1976D2",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            fontSize: 17,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: 20, textAlign: "center", fontSize: 14 }}>
          Don’t have an account?{" "}
          <a href="/register" style={{ color: "#1976D2", fontWeight: "bold" }}>
            Register Here
          </a>
        </p>
      </div>
    </div>
  );
}
