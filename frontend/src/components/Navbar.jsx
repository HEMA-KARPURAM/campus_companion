import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-8 py-4 flex justify-between items-center shadow-xl">
      <h1 className="text-xl font-bold">Campus Companion</h1>
      <div className="flex gap-6 font-medium">
        <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/events" className="hover:text-yellow-300">Events</Link>
        <Link to="/announcements" className="hover:text-yellow-300">Notices</Link>
        <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
      </div>
    </nav>
  );
}
