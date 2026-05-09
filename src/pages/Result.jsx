import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white", padding: "40px" }}>
      
      <h1 style={{ color: "#38bdf8" }}>
        🛡 PrivGuard Security Report
      </h1>

      <div style={{
        marginTop: "40px",
        background: "#111827",
        padding: "40px",
        borderRadius: "20px"
      }}>
        
        <h2>Scanned Details</h2>

        <p>Email: {data?.email || "N/A"}</p>

        <p>Phone: {data?.phone || "N/A"}</p>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "12px",
            background:
              data?.emailExposure?.riskLevel === "HIGH" ||
              data?.phoneExposure?.riskLevel === "HIGH"
                ? "#3f1d1d"
                : "#052e16"
          }}
        >
          <h3>
            {
              data?.emailExposure?.riskLevel === "HIGH" ||
              data?.phoneExposure?.riskLevel === "HIGH"
                ? "⚠ Overall Security Status: At Risk"
                : "✅ Overall Security Status: Safe"
            }
          </h3>
        </div>

        <hr />

        <h2 style={{
          color: "#38bdf8",
          borderBottom: "1px solid #334155",
          paddingBottom: "10px"
        }}>
          📧 Email Security
        </h2>

       <p>
        {
          "Risk Level: " +
          (
            data?.emailExposure?.riskLevel === "HIGH"
              ? "🔴 HIGH"
              : data?.emailExposure?.riskLevel === "MEDIUM"
              ? "🟠 MEDIUM"
              : "🟢 LOW"
          )
        }
      </p>

        <p>
          Breach Count: {data?.emailExposure?.totalBreaches || 0}
        </p>

        <p>
          Exposure Score: {data?.emailExposure?.exposureScore || 0}/100
        </p>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#334155",
            borderRadius: "10px",
            marginTop: "8px"
          }}
        >
          <div
            style={{
              width: `${data?.emailExposure?.exposureScore || 0}%`,
              height: "100%",
              background: "#38bdf8",
              borderRadius: "10px"
            }}
          />
        </div>

        <p>
          {
            data?.emailExposure?.containsSensitiveData
              ? "⚠ Sensitive Data Exposed"
              : "✅ No Sensitive Data Found"
          }
        </p>

        <p>
          Leaked Fields:{" "}
          {data?.emailExposure?.leakedFields?.join(", ") || "None"}
        </p>

        <p>
          Sources:{" "}
          {data?.emailExposure?.sources
          ?.map(source => source.name)
          .join(", ") || "None"}
        </p>
        <hr />

        <h2 style={{
          color: "#38bdf8",
          borderBottom: "1px solid #334155",
          paddingBottom: "10px"
        }}>
          📱 Phone Security
        </h2>

        <p>
          {
            "Risk Level: " +
            (
              data?.phoneExposure?.riskLevel === "HIGH"
                ? "🔴 HIGH"
                : data?.phoneExposure?.riskLevel === "MEDIUM"
                ? "🟠 MEDIUM"
                : "🟢 LOW"
            )
          }
        </p>

        <p>
          Breach Count: {data?.phoneExposure?.totalBreaches || 0}
        </p>

        <p>
          Exposure Score: {data?.phoneExposure?.exposureScore || 0}/100
        </p>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#334155",
            borderRadius: "10px",
            marginTop: "8px"
          }}
        >
          <div
            style={{
              width: `${data?.phoneExposure?.exposureScore || 0}%`,
              height: "100%",
              background: "#38bdf8",
              borderRadius: "10px"
            }}
          />
        </div>

        <p>
          {
            data?.phoneExposure?.containsSensitiveData
              ? "⚠ Sensitive Data Exposed"
              : "✅ No Sensitive Data Found"
          }
        </p>
        <p>
          Leaked Fields:{" "}
          {data?.phoneExposure?.leakedFields?.join(", ") || "None"}
        </p>

        <p>
          Sources:{" "}
          {data?.phoneExposure?.sources
          ?.map(source => source.name)
          .join(", ") || "None"}
        </p>


        <hr />

        <h2 style={{
          color: "#38bdf8",
          borderBottom: "1px solid #334155",
          paddingBottom: "10px"
        }}>
          🛡 Security Recommendations
        </h2>

        <p>
          {data?.emailExposure?.riskLevel === "HIGH" ||
          data?.phoneExposure?.riskLevel === "HIGH"
            ? "⚠ Change passwords, enable 2FA, and monitor your accounts."
            : "✅ No major exposure found. Continue following safe security practices."
          }
        </p>
        <button
          onClick={() => navigate("/scan")}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(to right,#06b6d4,#8b5cf6)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Scan Again
        </button>

      </div>
    </div>
  );
}

export default Result;