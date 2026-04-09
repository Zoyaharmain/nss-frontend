import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Sidebar from "./components/Sidebar";
import Nearby from "./pages/Nearby";
import Exchange from "./pages/Exchange";
import Schedule from "./pages/Schedule";
import Review from "./pages/Review";

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-xl font-bold text-blue-600 tracking-wide">
        Welcome to Neighbourhood Skill Sharing
      </h1>
    </div>
  );
}

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 
bg-white/30 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50">

          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Neighbourhood Skill Sharing
          </h1>

          <div className="flex items-center gap-4">

            <Link to="/dashboard">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition">
                Dashboard
              </button>
            </Link>

            <Link to="/skills">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition">
                Skills
              </button>
            </Link>

            <Link to="/login">
              <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:scale-105 transition">
                Register
              </button>
            </Link>

          </div>
        </nav>

        {/* Page Content */}
        <div className="p-8">
          <Routes>
            <Route path="/nss-frontend" element={<Navigate to="/dashboard" />} />

            {/* ✅ FIX: Redirect to Dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/review" element={<Review />} />

          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;