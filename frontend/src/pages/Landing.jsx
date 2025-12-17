import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-700 flex flex-col justify-center items-center text-white px-6">
      <h1 className="text-5xl font-extrabold mb-4">Campus Companion</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        Manage your classes, events, notices and campus life in one place.
      </p>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-primary">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
