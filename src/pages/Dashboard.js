import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Credits
          </h3>
          <p className="text-3xl font-bold mt-2 text-indigo-600">
            260
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-semibold text-gray-700">
            Current Streak
          </h3>
          <p className="text-3xl font-bold mt-2 text-purple-600">
            12 days
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-semibold text-gray-700">
            Reputation
          </h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">
            92/100
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
        
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {/* Update Profile → Skills */}
          <div
            onClick={() => navigate("/skills")}
            className="bg-white/50 p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h4 className="font-semibold text-gray-700">
              Update Profile
            </h4>
            <p className="text-sm text-gray-500">
              Edit your skills and video
            </p>
          </div>

          {/* Find Nearby → Nearby */}
          <div
            onClick={() => navigate("/nearby")}
            className="bg-white/50 p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h4 className="font-semibold text-gray-700">
              Find Nearby
            </h4>
            <p className="text-sm text-gray-500">
              Locate nearest mentors/learners
            </p>
          </div>

          {/* Book Session → Schedule */}
          <div
            onClick={() => navigate("/schedule")}
            className="bg-white/50 p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h4 className="font-semibold text-gray-700">
              Book Session
            </h4>
            <p className="text-sm text-gray-500">
              Choose time slots
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;