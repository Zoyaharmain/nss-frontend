import { NavLink } from "react-router-dom";
import { FaHome, FaTools, FaUser, FaUserPlus } from "react-icons/fa";


function Sidebar() {
  return (
    <div
      className="w-64 h-screen fixed top-0 left-0 
      bg-white/30 backdrop-blur-xl shadow-2xl border-r border-white/20 p-6
      transition-all duration-300 flex flex-col"
    >

      {/* ✅ LOGO SECTION */}
      <div className="flex flex-col items-center mb-8">
        
        <h1 className="text-sm font-bold text-gray-800 mt-3 text-center leading-tight">
          Neighbourhood <br /> Skill Sharing
        </h1>
      </div>

      {/* ✅ MENU */}
      <div className="flex flex-col gap-3">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <FaHome className="group-hover:rotate-6 transition" />
          Dashboard
        </NavLink>

        {/* Skills */}
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <FaTools className="group-hover:rotate-6 transition" />
          Skills
        </NavLink>

        {/* Nearby */}
        <NavLink
          to="/nearby"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <span className="group-hover:rotate-6 transition">📍</span>
          Nearby
        </NavLink>

        {/* Login */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <FaUser className="group-hover:rotate-6 transition" />
          Login
        </NavLink>

        {/* Register */}
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <FaUserPlus className="group-hover:rotate-6 transition" />
          Register
        </NavLink>

        {/* Exchange */}
        <NavLink
          to="/exchange"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <span className="group-hover:rotate-6 transition">🔄</span>
          Exchange
        </NavLink>

        {/* Schedule */}
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <span className="group-hover:rotate-6 transition">📅</span>
          Schedule
        </NavLink>

        {/* Review */}
        <NavLink
          to="/review"
          className={({ isActive }) =>
            `p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group
            ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-white/40 hover:scale-105"
            }`
          }
        >
          <span className="group-hover:rotate-6 transition">⭐</span>
          Review
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;