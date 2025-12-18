import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "../../login.css";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/${role}/dashboard`);
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">
          <GraduationCap size={28} />
        </div>

        <h1 className="login-title">Campus Companion</h1>
        <p className="login-subtitle">
          One platform for all your campus needs
        </p>

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

        <div className="login-form">
          <input
            className="login-input"
            placeholder="Email"
          />

          <input
            type="password"
            className="login-input"
            placeholder="Password"
          />

          <button
            className="login-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : `Login as ${role}`}
          </button>
        </div>

        <p className="footer-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
