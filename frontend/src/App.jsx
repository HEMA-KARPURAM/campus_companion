import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* AUTH */
import Login from "./pages/auth/login.jsx";
import Signup from "./pages/auth/signup.jsx";

/* LECTURER */
import LecturerLayout from "./pages/lecturer/lecturerlayout.jsx";
import LecturerDashboard from "./pages/lecturer/dashboard.jsx";
import LecturerTimetable from "./pages/lecturer/timetable.jsx";
import LecturerAssignment from "./pages/lecturer/assignment.jsx";
// import LecturerMarks from "./pages/lecturer/marks.jsx";
// import LecturerAnnouncements from "./pages/lecturer/announcements.jsx";

/* STUDENT */
import StudentDashboard from "./pages/student/dashboard.jsx";
import StudentTimetable from "./pages/student/timetable.jsx";
import StudentAssignments from "./pages/student/assignment.jsx";
import StudentProfile from "./pages/student/profile.jsx";
import StudentResults from "./pages/student/results.jsx";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* LECTURER ROUTES */}
        <Route path="/lecturer" element={<LecturerLayout />}>
          <Route path="dashboard" element={<LecturerDashboard />} />
          <Route path="timetable" element={<LecturerTimetable />} />
          <Route path="upload-assignment" element={<LecturerAssignment />} />
          {/* <Route path="upload-marks" element={<LecturerMarks />} />
          <Route path="announcements" element={<LecturerAnnouncements />} /> */}
        </Route>

        {/* STUDENT ROUTES */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/timetable" element={<StudentTimetable />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/results" element={<StudentResults />} />

      </Routes>
    </Router>
  );
}
