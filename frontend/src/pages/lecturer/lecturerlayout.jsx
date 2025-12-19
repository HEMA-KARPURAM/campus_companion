import { Outlet, useNavigate } from "react-router-dom";
import "../../lecturerlayout.css";

export default function LecturerLayout() {
  const navigate = useNavigate();

  return (
    <div className="lecturer-layout">
      {/* LEFT SIDEBAR */}
      <aside className="lecturer-sidebar">
        <h3 className="sidebar-title">Faculty Actions</h3>

        <button onClick={() => navigate("/lecturer/dashboard")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/lecturer/timetable")}>
          Manage Timetable
        </button>

        <button onClick={() => navigate("/lecturer/assignment")}>
          Upload Assignment
        </button>

        <button onClick={() => navigate("/lecturer/submissions")}>
          View Submissions
        </button>

        <button onClick={() => navigate("/lecturer/marks")}>
          Upload Marks
        </button>

        <button onClick={() => navigate("/lecturer/announcements")}>
          Announcements
        </button>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="lecturer-content">
        <Outlet />
      </main>
    </div>
  );
}
