import "../../lecturedashboard.css";
import { useNavigate } from "react-router-dom";

export default function LecturerDashboard() {
  const navigate = useNavigate();

  return (
    
    <div className="dashboard-layout">

      {/* QUICK ACTIONS */}
      <aside className="quick-actions">
        <h3>Faculty Actions</h3>

        <button className="qa-btn">📅 Manage Timetable</button>
        <button className="qa-btn">📤 Upload Assignment</button>
        <button className="qa-btn">📄 View Submissions</button>
        <button className="qa-btn">📝 Upload Marks</button>
        <button className="qa-btn">📢 Announcements</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome back, Professor 👋</h1>
          <p className="sub-text">lecturer portal</p>
        </header>

        {/* STAT CARDS */}
        <section className="stat-grid">
          <div className="stat-card">
            <h4>Assignments</h4>
            <p>12 Pending</p>
          </div>

          <div className="stat-card">
            <h4>Not Submitted</h4>
            <p>18 Students</p>
          </div>

          <div className="stat-card">
            <h4>Announcements</h4>
            <p>3 Active</p>
          </div>

          <div className="stat-card">
            <h4>Sections</h4>
            <p>CSE A, CSE B</p>
          </div>
        </section>

        {/* TODAY'S CLASSES */}
        <section className="schedule-card">
          <h3>Today's Classes</h3>

          <div className="class-row">
            <div>
              <strong>Operating Systems</strong>
              <p>CSE – Section A • CS-101</p>
            </div>
            <span className="badge success">09:00 - 10:00</span>
          </div>

          <div className="class-row">
            <div>
              <strong>DBMS</strong>
              <p>CSE – Section B • CS-102</p>
            </div>
            <span className="badge danger">Cancelled</span>
          </div>
        </section>
      </main>
    </div>
  );
}
