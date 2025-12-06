"use client";

import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      {/* NAVBAR AT TOP */}
      <Navbar />

      <div style={{ background: "#f5f7fb", minHeight: "100vh" }}>
        {/* Top Header Section */}
        <div
          style={{
            background: "#0C2B59",
            padding: "40px 60px",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginTop: "0px",
          }}
        >
          <span
            style={{
              width: 50,
              height: 50,
              background: "#FFC000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#0C2B59",
              fontWeight: "bold",
            }}
          >
            ✓
          </span>

          <h1 style={{ margin: 0, fontSize: 32 }}>Contact Us</h1>
        </div>

        {/* Main Card */}
        <div
          style={{
            margin: "50px auto",
            width: "80%",
            background: "white",
            padding: "40px",
            borderRadius: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Left Illustration */}
          <img
            src="/contact.png"
            alt="Contact"
            style={{ width: "40%", maxWidth: 350 }}
          />

          {/* Right Details */}
          <div style={{ width: "55%" }}>
            <p style={{ fontSize: 18 }}>
              We would love to hear from you. <br />
              Please write to{" "}
              <span style={{ color: "#E67300", fontWeight: "bold" }}>
                info@hiringportal.com
              </span>{" "}
              and we'll get back to you soon!
            </p>

            <h3 style={{ marginTop: 30 }}>Address :</h3>

            <p style={{ lineHeight: "30px", fontSize: 16 }}>
              Info Edge (India) Limited <br />
              B - 8, Sector - 132 <br />
              Noida - 201304
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
