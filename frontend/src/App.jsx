import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Auth */
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

/* Student */
import StudentDashboard from "./pages/student/dashboard";
import StudentProfile from "./pages/student/profile";
import StudentTimetable from "./pages/student/timetable";
import StudentEvents from "./pages/student/events";
import StudentAssignments from "./pages/student/assignment";
import StudentResults from "./pages/student/results";

/* Lecturer */
import LecturerLayout from "./pages/lecturer/lecturerlayout";
import LecturerDashboard from "./pages/lecturer/dashboard";
import LecturerTimetable from "./pages/lecturer/timetable";


/* Admin */
import AdminDashboard from "./pages/admin/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= AUTH ================= */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= STUDENT ================= */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/timetable" element={<StudentTimetable />} />
        <Route path="/student/events" element={<StudentEvents />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/results" element={<StudentResults />} />

        {/* ================= LECTURER (WITH LAYOUT) ================= */}
        <Route path="/lecturer" element={<LecturerLayout />}>
          <Route path="dashboard" element={<LecturerDashboard />} />
          <Route path="timetable" element={<LecturerTimetable />} />
          {/* later you can add */}
          {/* <Route path="assignment" element={<LecturerAssignment />} /> */}
          {/* <Route path="marks" element={<LecturerMarks />} /> */}
          {/* <Route path="announcements" element={<LecturerAnnouncements />} /> */}
        </Route>

        {/* ================= ADMIN ================= */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* ================= 404 ================= */}
        <Route
          path="*"
          element={
            <div style={{ padding: 40, color: "white" }}>
              <h2>404 – Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
