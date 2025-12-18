import DashboardShell from "../../components/layout/DashboardShell";
import "../../studentdashboard.css";

import {
  Calendar,
  Clock,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import {
  CURRENT_USER,
  MOCK_NOTIFICATIONS,
  MOCK_TIMETABLE
} from "../../lib/mock-data";

export default function StudentDashboard() {
  const today = "Monday";
  const todaysClasses = MOCK_TIMETABLE[today] || [];

  return (
    <DashboardShell role="student">
      <div className="page">
        {/* Welcome Section */}
        <div className="page-header">
          <div>
            <h2>
              Welcome back, {CURRENT_USER.name.split(" ")[0]} 👋
            </h2>
            <p className="subtitle">
              Here's what's happening on campus today.
            </p>
          </div>
          <button className="primary-btn">View Full Timetable</button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <StatCard title="Attendance" value="87%" icon={<CheckCircle2 />} />
          <StatCard title="Assignments" value="3 Pending" icon={<BookOpen />} />
          <StatCard title="Events" value="2 Upcoming" icon={<Calendar />} />
          <StatCard title="CGPA" value="8.4" icon={<GraduationCap />} />
        </div>

        <div className="dashboard-grid">
          {/* Schedule */}
          <div className="card">
            <h3 className="card-title">
              <Clock size={18} /> Today's Schedule
            </h3>

            {todaysClasses.map((cls, index) => (
              <div key={index} className="schedule-item">
                <div className="time-box">
                  <strong>{cls.time.split(" - ")[0]}</strong>
                  <span>{cls.time.split(" - ")[1]}</span>
                </div>

                <div className="class-info">
                  <div className="class-header">
                    <h4>{cls.subject}</h4>
                    {cls.status !== "scheduled" && (
                      <span className={`badge ${cls.status}`}>
                        {cls.status}
                      </span>
                    )}
                  </div>

                  <p className="meta">
                    📍 {cls.room} · 🏷️ {cls.type}
                  </p>

                  {cls.note && (
                    <p className="warning">⚠ {cls.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div className="card">
            <h3 className="card-title">
              <AlertCircle size={18} /> Notifications
            </h3>

            {MOCK_NOTIFICATIONS.map((n) => (
              <div key={n.id} className="notification">
                <span className={`dot ${n.type}`} />
                <div>
                  <strong>{n.title}</strong>
                  <p>{n.message}</p>
                  <small>{n.time}</small>
                </div>
              </div>
            ))}

            <button className="ghost-btn">View All</button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

/* Small reusable stat card */
function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span>{title}</span>
        {icon}
      </div>
      <strong>{value}</strong>
    </div>
  );
}
