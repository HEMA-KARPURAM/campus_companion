import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Auth */
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

/* Student */
import StudentDashboard from "./pages/student/dashboard";
import StudentProfile from "./pages/student/profile";
import StudentTimetable from "./pages/student/timetable";
import StudentEvents from "./pages/student/events";

/* Lecturer */
import LecturerDashboard from "./pages/lecturer/dashboard";

/* Admin */
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


        {/* Lecturer */}
        <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
