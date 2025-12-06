"use client";

import Link from "next/link";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        marginBottom: 20,
        background: "#fff",
      }}
    >
      <h2 style={{ fontSize: 26 }}>Job Portal</h2>

      <div style={{ display: "flex", gap: 25 }}>
        <Link
          href="/login"
          style={{ display: "flex", alignItems: "center", fontSize: 16 }}
        >
          <FaSignInAlt size={18} style={{ marginRight: 6 }} />
          Login
        </Link>

        <Link
          href="/register"
          style={{ display: "flex", alignItems: "center", fontSize: 16 }}
        >
          <FaUserPlus size={18} style={{ marginRight: 6 }} />
          Register
        </Link>
      </div>
    </div>
  );
}
