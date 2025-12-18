import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "../../login.css";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // Simulate login API
    setTimeout(() => {
      setLoading(false);
      navigate(`/${role}/dashboard`);
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Icon */}
        <div className="login-icon">
          <GraduationCap size={28} />
        </div>

        <h1 className="login-title">Campus Companion</h1>
        <p className="login-subtitle">
          One platform for all your campus needs
        </p>

        {/* Role Tabs */}
        <div className="role-tabs">
          {["student", "lecturer", "admin"].map((r) => (
            <button
              key={r}
              className={`role-btn ${role === r ? "active" : ""}`}
              onClick={() => setRole(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <div className="login-form">
          {role === "student" && (
            <input
              type="text"
              placeholder="Registration Number"
              className="login-input"
            />
          )}

          {role !== "student" && (
            <input
              type="text"
              placeholder={role === "admin" ? "Admin ID" : "Email"}
              className="login-input"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <button
            className="login-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : `Login as ${role}`}
          </button>
        </div>

        <p className="login-footer">
          Don’t have an account? <span>Contact Administration</span>
        </p>
      </div>
    </div>
  );
}
