import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  User,
  Calendar,
  BookOpen,
  Bell,
  LogOut,
  GraduationCap,
  FileText,
  Users,
} from "lucide-react";

const DashboardShell = ({ children, role = "student" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const studentLinks = [
    { path: "/student/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/student/profile", icon: User, label: "Profile" },
    { path: "/student/timetable", icon: Calendar, label: "Timetable" },
    { path: "/student/events", icon: Users, label: "Events" },
    { path: "/student/assignments", icon: FileText, label: "Assignments" },
    { path: "/student/results", icon: GraduationCap, label: "Results" },
  ];

  const lecturerLinks = [
    { path: "/lecturer/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/lecturer/timetable", icon: Calendar, label: "Timetable" },
    { path: "/lecturer/assignments", icon: BookOpen, label: "Assignments" },
    { path: "/lecturer/students", icon: Users, label: "Students" },
  ];

  const adminLinks = [
    { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/timetables", icon: Calendar, label: "Timetables" },
    { path: "/admin/events", icon: Users, label: "Events" },
    { path: "/admin/exams", icon: FileText, label: "Exams" },
  ];

  const links =
    role === "student"
      ? studentLinks
      : role === "lecturer"
      ? lecturerLinks
      : adminLinks;

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Campus Companion</h2>
          <span className="role-text">{role} portal</span>
        </div>

        <nav className="sidebar-nav">
          {links.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <header className="topbar">
          <button
            className="menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <LayoutDashboard size={20} />
          </button>

          <div className="topbar-right">
            <Bell size={18} />
            <div className="avatar">
              <User size={16} />
            </div>
          </div>
        </header>

        <section className="page-content">{children}</section>
      </main>
    </div>
  );
};

export default DashboardShell;
