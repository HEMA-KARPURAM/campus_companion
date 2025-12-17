export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input className="w-full mb-4 p-3 border rounded-lg" placeholder="Email" />
        <input className="w-full mb-6 p-3 border rounded-lg" type="password" placeholder="Password" />
        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-indigo-700">
          Login
        </button>
      </div>
    </div>
  );
}
