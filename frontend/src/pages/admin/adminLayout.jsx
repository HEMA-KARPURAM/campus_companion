import { Outlet, useNavigate } from "react-router-dom";
import "../../adminlayout.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="logo">Admin Panel</h2>

        <button onClick={() => navigate("/admin/dashboard")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/admin/class-timetable")}>
          Class Timetable
        </button>

        <button onClick={() => navigate("/admin/exam-timetable")}>
          Exam Timetable
        </button>

        <button onClick={() => navigate("/admin/announcements")}>
          Announcements
        </button>

        <button onClick={() => navigate("/admin/circulars-results")}>
          Results & Circulars
        </button>
      </aside>

      {/* PAGE CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
