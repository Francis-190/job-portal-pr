export default function Register() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Register</h1>
      <form style={{ display: "flex", flexDirection: "column", width: 300 }}>
        <input placeholder="Name" style={{ padding: 10, marginBottom: 10 }} />
        <input placeholder="Email" style={{ padding: 10, marginBottom: 10 }} />
        <input type="password" placeholder="Password" style={{ padding: 10 }} />
        <button
          style={{
            marginTop: 15,
            padding: 10,
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: 6,
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
