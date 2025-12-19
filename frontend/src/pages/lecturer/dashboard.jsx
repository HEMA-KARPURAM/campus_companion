import "../../lecturedashboard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { notifyStudents } from "../../services/notificationservice";

export default function LecturerDashboard() {
  const navigate = useNavigate();

  // Mock swap requests (coming from other faculty)
  const [swapRequests, setSwapRequests] = useState([
    {
      id: 1,
      subject: "Operating Systems",
      branch: "CSE",
      section: "A",
      time: "09:00 - 10:00",
      fromFaculty: "Prof. A",
      status: "pending"
    }
  ]);

  const acceptSwap = (id) => {
    setSwapRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "accepted" } : req
      )
    );

    notifyStudents(
      "Operating Systems class has been swapped",
      "CSE",
      "A"
    );
  };

  const rejectSwap = (id) => {
    setSwapRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "rejected" } : req
      )
    );
  };

  return (
    <div className="dashboard-layout">

      {/* QUICK ACTIONS */}
      <aside className="quick-actions">
        <h3>Faculty Actions</h3>

        <button className="qa-btn" onClick={() => navigate("/lecturer/dashboard")}>
          📊 Dashboard
        </button>
        <button className="qa-btn" onClick={() => navigate("/lecturer/timetable")}>
          📅 Manage Timetable
        </button>
        <button className="qa-btn" onClick={() => navigate("/lecturer/upload-assignment")}>
          📤 Upload Assignment
        </button>
        <button className="qa-btn" onClick={() => navigate("/lecturer/submissions")}>
          📄 View Submissions
        </button>
        <button className="qa-btn" onClick={() => navigate("/lecturer/upload-marks")}>
          📝 Upload Marks
        </button>
        <button className="qa-btn" onClick={() => navigate("/lecturer/announcements")}>
          📢 Announcements
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* HEADER */}
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

        {/* SWAP REQUESTS */}
        <section className="schedule-card">
          <h3>Swap Requests</h3>

          {swapRequests.length === 0 && (
            <p className="sub-text">No pending swap requests</p>
          )}

          {swapRequests.map((req) => (
            <div key={req.id} className="class-row">
              <div>
                <strong>{req.subject}</strong>
                <p>
                  {req.branch} – Section {req.section} • {req.time}
                </p>
              </div>

              {req.status === "pending" ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="qa-btn"
                    onClick={() => acceptSwap(req.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="qa-btn danger"
                    onClick={() => rejectSwap(req.id)}
                  >
                    Reject
                  </button>
                </div>
              ) : (
                <span className={`badge ${req.status === "accepted" ? "success" : "danger"}`}>
                  {req.status}
                </span>
              )}
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
