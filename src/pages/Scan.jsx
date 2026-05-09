import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Scan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const startScan = async () => {
  if (!email) return alert("Enter email first");

  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/api/exposure/scan",
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
        <div style={{ marginTop: "50px" }}>
          <h3 style={{ color: "#22c55e" }}>
            🛡 Running Security Intelligence Scan...
          </h3>
          <pre style={{ color: "#22c55e", fontFamily: "monospace" }}>
{`
[+] Connecting to threat intelligence...
[+] Searching global breach databases...
[+] Checking leaked credentials...
[+] Analyzing sensitive information...
[+] Generating security report...
`}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Scan;
