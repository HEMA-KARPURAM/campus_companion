import { useNavigate } from "react-router-dom";
import "../../admindashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">

      {/* QUICK ACTIONS */}
      <aside className="quick-actions">
        <h3>Admin Controls</h3>

        <button className="qa-btn" onClick={() => navigate("/admin/class-timetable")}>
          📅 Class Timetable
        </button>

        <button className="qa-btn" onClick={() => navigate("/admin/exam-timetable")}>
          📝 Exam Timetable
        </button>

        <button className="qa-btn">
          📢 Announcements
        </button>

        <button className="qa-btn">
          🎉 Events Management
        </button>

        <button className="qa-btn">
          📄 Circulars & Results
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p className="sub-text">Campus control & management panel</p>
        </header>

        {/* STAT CARDS */}
        <section className="stat-grid">
          <div className="stat-card">
            <h4>Total Students</h4>
            <p>1240</p>
          </div>

          <div className="stat-card">
            <h4>Total Lecturers</h4>
            <p>86</p>
          </div>

          <div className="stat-card">
            <h4>Departments</h4>
            <p>6</p>
          </div>

          <div className="stat-card">
            <h4>Active Notices</h4>
            <p>9</p>
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section className="activity-card">
          <h3>Recent Activity</h3>

          <div className="activity-row">
            📌 Class timetable updated for CSE – Section A
          </div>

          <div className="activity-row">
            📢 Mid exam timetable published
          </div>

          <div className="activity-row">
            🎉 Technical fest event added (CSE Dept)
          </div>
        </section>
      </main>
    </div>
  );
}
