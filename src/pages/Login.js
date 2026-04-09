import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // after login → go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Login to NSS
        </h2>
        <p className="text-gray-500 mb-6">
          Enter your details to continue.
        </p>

        {/* Email */}
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          placeholder="demo@nssn.com"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Password */}
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Links */}
        <p className="text-gray-500 mt-5 text-sm">
          New user?{" "}
          <span
            onClick={() => navigate("/register")}   
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Create account
          </span>
        </p>

        <p
          onClick={() => navigate("/")}
          className="text-purple-700 mt-2 text-sm cursor-pointer hover:underline"
        >
          Back to Home
        </p>
      </div>
    </div>
  );
}

export default Login;