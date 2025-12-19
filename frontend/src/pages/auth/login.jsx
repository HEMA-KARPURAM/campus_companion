import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(`/${role}/dashboard`);
    }, 800);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <GraduationCap size={42} />
          <h1>Campus Companion</h1>
          <p>One platform for all your campus needs</p>
        </div>

        {/* Role Tabs */}
        <div className="role-tabs">
          {["student", "lecturer", "admin"].map((r) => (
            <button
              key={r}
              type="button"
              className={`role-btn ${role === r ? "active" : ""}`}
              onClick={() => setRole(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin}>
          {role === "student" ? (
            <input
              type="text"
              placeholder="Registration Number"
              required
            />
          ) : (
            <input
              type="text"
              placeholder={role === "admin" ? "Admin ID" : "Email"}
              required
            />
          )}

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : `Login as ${role}`}
          </button>
        </form>

        <div className="login-footer">
          <span>Don’t have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}