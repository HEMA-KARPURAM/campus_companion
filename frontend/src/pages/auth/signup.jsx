import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "../../signup.css";

export default function Signup() {
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(`Signup successful as ${role}!`);
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Icon */}
        <div className="auth-icon">
          <GraduationCap size={28} />
        </div>

        <h1>Campus Companion</h1>
        <p className="subtitle">Create your account</p>

        {/* Role Tabs */}
        <div className="role-tabs">
          {["student", "lecturer", "admin"].map((r) => (
            <button
              key={r}
              className={role === r ? "active" : ""}
              onClick={() => setRole(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="auth-form">
          {/* STUDENT ONLY */}
          {role === "student" && (
            <input
              type="text"
              placeholder="Registration Number"
              className="auth-input"
            />
          )}

          {/* EMAIL FOR ALL ROLES */}
          <input
            type="email"
            placeholder="Email Address"
            className="auth-input"
          />

          {/* PASSWORDS */}
          <input
            type="password"
            placeholder="Create Password"
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-input"
          />

          <button
            className="primary-btn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating Account..." : `Sign up as ${role}`}
          </button>
        </div>

        {/* Footer */}
        <p className="footer-text">
          Already have an account?{" "}
          <Link to="/" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
