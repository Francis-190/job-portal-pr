export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        padding: "60px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90deg, #f5fdf9, #ffffff)",
      }}
    >
      {/* Left Section */}
      <div style={{ width: "50%" }}>
        <p
          style={{
            color: "#6fb18a",
            fontSize: 14,
            marginBottom: 10,
            letterSpacing: 1,
          }}
        >
          READY TO FIND YOUR DREAM JOB?
        </p>

        <h1
          style={{
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 20,
            lineHeight: "50px",
          }}
        >
          Take the next step in <br /> your career journey.
        </h1>

        <p style={{ fontSize: 17, color: "#666", marginBottom: 30 }}>
          Explore opportunities that match your skills and passions,
          and land the job you've always wanted with JobsPortal.
        </p>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            gap: 10,
            padding: 10,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            width: "90%",
          }}
        >
          <input
            placeholder="Enter skills or job title"
            style={{
              flex: 1,
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          />

          <select
            style={{
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <option>Select Category</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Remote Jobs</option>
          </select>

          <button
            style={{
              padding: "12px 20px",
              background: "#2EAF70",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            🔍
          </button>
        </div>
      </div>

      {/* Right Section: Hero Image */}
      <div style={{ width: "45%", textAlign: "center" }}>
        <img
          src="/hero-job.png"
          alt="Find Job"
          style={{ width: "100%", maxWidth: 380 }}
        />
      </div>
    </div>
  );
}
