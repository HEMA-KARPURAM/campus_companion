import DashboardShell from "../../components/layout/DashboardShell";
import {
  Users,
  Calendar,
  FileText,
  Bell,
  Plus
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <DashboardShell role="admin">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p className="muted">System overview and management</p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <StatCard title="Total Students" value="2,450" icon={<Users />} />
          <StatCard title="Faculty" value="120" icon={<Users />} />
          <StatCard title="Active Events" value="8" icon={<Calendar />} />
          <StatCard title="Circulars" value="12" icon={<Bell />} />
        </div>

        {/* Management + Activity */}
        <div className="content-grid">
          {/* Management */}
          <div className="card">
            <h3>Management Console</h3>
            <p className="muted">Manage academic resources and updates</p>

            <div className="action-grid">
              <ActionButton
                icon={<Calendar />}
                title="Update Timetables"
                desc="Modify class schedules and swaps"
              />
              <ActionButton
                icon={<FileText />}
                title="Exam Schedules"
                desc="Upload exam dates"
              />
              <ActionButton
                icon={<Bell />}
                title="Publish Circular"
                desc="Notify students and faculty"
              />
              <ActionButton
                icon={<Plus />}
                title="Add Event"
                desc="Create college or department events"
              />
            </div>
          </div>

          {/* Activity */}
          <div className="card">
            <h3>Recent Activity</h3>

            <ul className="activity-list">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <span className="dot" />
                  <div>
                    <strong>Circular #2024-{i} Published</strong>
                    <p className="muted">Updated exam guidelines</p>
                    <small>2 hours ago</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

/* =====================
   Helper Components
===================== */

function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div>
        <p className="muted">{title}</p>
        <h2>{value}</h2>
      </div>
      <div className="icon">{icon}</div>
    </div>
  );
}

function ActionButton({ icon, title, desc }) {
  return (
    <button className="action-button">
      <div className="icon">{icon}</div>
      <strong>{title}</strong>
      <span>{desc}</span>
    </button>
  );
}
