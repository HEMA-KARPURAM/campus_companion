import Navbar from "../components/Navbar";

export default function Announcements() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Announcements</h1>
        <div className="bg-white p-6 rounded-xl shadow-xl">
          Mid exams postponed
        </div>
      </div>
    </>
  );
}
