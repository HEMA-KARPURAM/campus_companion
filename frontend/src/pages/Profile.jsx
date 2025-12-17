import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="p-8 max-w-md">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p><strong>Name:</strong> Student</p>
        <p><strong>Email:</strong> student@email.com</p>
      </div>
    </>
  );
}
