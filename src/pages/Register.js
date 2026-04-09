import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // later: add backend logic
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-500 mb-6">
          Join NSS to share skills with your neighbours.
        </p>

        {/* Full Name */}
        <label className="block text-gray-600 mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Email */}
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Password */}
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Confirm Password */}
        <label className="block text-gray-600 mb-1">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Location */}
        <label className="block text-gray-600 mb-1">Location</label>
        <input
          type="text"
          placeholder="Your area / locality"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Skills */}
        <label className="block text-gray-600 mb-1">Skills to Teach</label>
        <input
          type="text"
          placeholder="e.g. Math, Cooking, Web Design"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
        >
          Create Account
        </button>

        {/* Links */}
        <p className="text-gray-500 mt-5 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login here
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

export default Register;