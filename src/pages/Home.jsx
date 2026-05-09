import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>SecureScan AI</h2>

        <div style={styles.navLinks}>
          <span onClick={() => navigate("/")} style={styles.link}>Home</span>
          <span onClick={() => navigate("/scan")} style={styles.link}>Scan</span>
          <span onClick={() => navigate("/result")} style={styles.link}>Result</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <h1 style={styles.title}>
            AI Powered <br />
            <span style={styles.gradient}>Breach Detector</span>
          </h1>

          <p style={styles.subtitle}>
            Detect leaked emails and  phone numbers using AI-powered breach scanning system with real-time monitoring and intelligent threat detection.
          </p>

          <div style={styles.buttons}>
            <button onClick={() => navigate("/scan")} style={styles.primaryBtn}>
              🔍 Start Scan
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div style={styles.right}>
          
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            style={{ ...styles.image, animation: "float1 4s ease-in-out infinite" }}
          />

          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            style={{ ...styles.image2, animation: "float2 5s ease-in-out infinite" }}
          />

          <img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
            style={{ ...styles.image3, animation: "float3 6s ease-in-out infinite" }}
          />

        </div>
      </div>

      {/* FEATURE CARDS */}
      <div style={styles.cards}>
        
        <div style={styles.card}>
          <h3>⚡ Smart Detection</h3>
          <p>Real-time breach detection using security intelligence.</p>
        </div>

        <div style={styles.card}>
          <h3>🔐 Privacy Protection</h3>
          <p>End-to-end secure scanning architecture.</p>
        </div>

        <div style={styles.card}>
          <h3>📊 Breach Analytics</h3>
          <p>Get detailed exposure and security reports.</p>
        </div>

      </div>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          @keyframes float2 {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(15px) rotate(-3deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          @keyframes float3 {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}

export default Home;

/* STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "white",
    fontFamily: "Arial",
    overflow: "hidden",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 60px",
  },

  logo: {
    color: "#38bdf8",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
  },

  link: {
    cursor: "pointer",
    color: "#cbd5e1",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "80px 60px",
    flexWrap: "wrap",
  },

  left: {
    maxWidth: "600px",
  },

  title: {
    fontSize: "60px",
  },

  gradient: {
    background: "linear-gradient(to right,#06b6d4,#8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "20px",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "15px",
  },

  primaryBtn: {
    padding: "14px 24px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(to right,#06b6d4,#8b5cf6)",
    color: "white",
    cursor: "pointer",
  },

  right: {
    position: "relative",
    width: "400px",
    height: "400px",
  },

  image: {
    width: "250px",
    borderRadius: "20px",
    position: "absolute",
    top: "0",
    right: "0",
  },

  image2: {
    width: "220px",
    borderRadius: "20px",
    position: "absolute",
    bottom: "0",
    left: "0",
  },

  image3: {
    width: "180px",
    borderRadius: "20px",
    position: "absolute",
    top: "150px",
    left: "120px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "80px",
    flexWrap: "wrap",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "16px",
    width: "250px",
    backdropFilter: "blur(10px)",
  },
};
