import "../../lecturedashboard.css";

export default function LecturerAnnouncements() {
  return (
    <div className="dashboard-layout">
      <aside className="quick-actions">
        <h3>Faculty Actions</h3>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Announcements 📢</h1>
          <p className="sub-text">lecturer portal</p>
        </header>

        <section className="schedule-card">
          <h3>No Announcements</h3>
          <p className="sub-text">
            Announcements posted by you will appear here.
          </p>
        </section>
      </main>
    </div>
  );
}
