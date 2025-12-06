"use client";

import Link from "next/link";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: 40, height: 40 }}
        />
        <div>
          <h3 style={{ margin: 0 }}>Jobs Portal</h3>
          <span style={{ fontSize: 12, color: "#999" }}>ONLINE JOBS FINDER</span>
        </div>
      </div>

      {/* Menu */}
      <div style={{ display: "flex", gap: 25, fontSize: 16 }}>
        <Link href="/">Home</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/employer">Employer</Link>
        <Link href="/candidate">Candidate</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/subscription">Subscription</Link>
      </div>

      {/* Login/Register */}
      <div style={{ display: "flex", gap: 15 }}>
        <Link
          href="/login"
          style={{
            padding: "8px 20px",
            border: "1px solid #1976D2",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "#1976D2",
          }}
        >
          <FaSignInAlt />
          Sign in
        </Link>

        <Link
          href="/register"
          style={{
            padding: "8px 20px",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#4CAF50",
            color: "white",
          }}
        >
          <FaUserPlus />
          Register
        </Link>
      </div>
    </div>
  );
}
