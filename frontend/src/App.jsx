import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Auth */
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
/* Student Pages */
import StudentDashboard from "./pages/student/dashboard";
import StudentProfile from "./pages/student/profile";
import StudentTimetable from "./pages/student/Timetable";
import StudentEvents from "./pages/student/events";
import StudentAssignments from "./pages/student/assignment";
import StudentResults from "./pages/student/results";

/* Lecturer Pages */
import LecturerDashboard from "./pages/lecturer/dashboard";

/* Admin Pages */
import AdminDashboard from "./pages/admin/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/timetable" element={<StudentTimetable />} />
        <Route path="/student/events" element={<StudentEvents />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/results" element={<StudentResults />} />

        {/* Lecturer */}
        <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
