import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="p-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="font-semibold text-lg">Today’s Classes</h3>
          <p className="text-gray-500 mt-2">No classes today 🎉</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="font-semibold text-lg">Upcoming Events</h3>
          <p className="text-gray-500 mt-2">Hackathon Tomorrow</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="font-semibold text-lg">Deadlines</h3>
          <p className="text-gray-500 mt-2">Assignment due in 2 days</p>
        </div>
      </div>
    </>
  );
}
