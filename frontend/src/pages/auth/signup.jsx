import { useState } from "react";
import { GraduationCap } from "lucide-react";
import "../../signup.css";

export default function Signup() {
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Signup successful!");
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
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
          {role === "student" && (
            <input placeholder="Registration Number" />
          )}

          {role !== "student" && (
            <input placeholder={role === "admin" ? "Admin ID" : "Email Address"} />
          )}

          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Create Password" />
          <input type="password" placeholder="Confirm Password" />

          <button
            className="primary-btn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating Account..." : `Sign up as ${role}`}
          </button>
        </div>

        <p className="footer-text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}
