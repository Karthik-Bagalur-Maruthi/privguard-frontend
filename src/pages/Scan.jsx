import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Scan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const startScan = async () => {
  if (!email) {
    return alert("Please enter your email");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return alert("Please enter a valid email");
  }

  if (phone && phone.length < 10) {
    return alert("Phone number must be at least 10 digits");
  }

  try {
    setLoading(true);

    const response = await fetch(
      "https://privguard-backend-7r5j.onrender.com/api/exposure/scan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
        }),
      }
    );

    const data = await response.json();

    setLoading(false);

    navigate("/result", {
      state: data,
    });

  } catch (error) {
    setLoading(false);
    console.log(error);
    alert("Backend connection failed");
  }
};
  const handleKeyDown = (e) => {
    if (e.key === "Enter") startScan();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white", padding: "40px", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "#38bdf8" }}>Scan Details</h2>
        <button onClick={() => navigate("/")} style={{ background: "transparent", border: "1px solid #334155", color: "#cbd5e1", padding: "8px 14px", borderRadius: "10px", cursor: "pointer" }}>
          Back
        </button>
      </div>
      <div style={{ marginTop: "60px", maxWidth: "500px", background: "#111827", padding: "30px", borderRadius: "20px" }}>
        <h3>Enter Details to Scan</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDown} placeholder="example@gmail.com" type="email" style={{ width: "100%", padding: "14px", marginTop: "15px", borderRadius: "10px", border: "none", outline: "none", background: "#0f172a", color: "white", boxSizing: "border-box" }} />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} onKeyDown={handleKeyDown} placeholder="+91 9876543210" type="tel" style={{ width: "100%", padding: "14px", marginTop: "12px", borderRadius: "10px", border: "none", outline: "none", background: "#0f172a", color: "white", boxSizing: "border-box" }} />
        <button onClick={startScan} style={{ marginTop: "20px", width: "100%", padding: "14px", borderRadius: "10px", border: "none", background: "linear-gradient(to right,#06b6d4,#8b5cf6)", color: "white", cursor: "pointer", fontWeight: "bold" }}>Start Scan</button>
      </div>
      {loading && (
  <div style={{ marginTop: "40px", width: "100%", maxWidth: "500px" }}>
    
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #334155",
        borderTop: "5px solid #06b6d4",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "0 auto",
      }}
    ></div>

    <h3
      style={{
        color: "#22c55e",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      🛡 Running Security Intelligence Scan...
    </h3>

    <div
      style={{
        marginTop: "20px",
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "12px",
          background: "linear-gradient(to right,#06b6d4,#8b5cf6)",
        }}
      ></div>
    </div>

    <pre
      style={{
        color: "#22c55e",
        fontFamily: "monospace",
        marginTop: "20px",
      }}
    >
{`
[+] Connecting to threat intelligence...
[+] Searching breach databases...
[+] Checking leaked credentials...
[+] Generating security report...
`}
    </pre>

    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
)}
    </div>
  );
}

export default Scan;
