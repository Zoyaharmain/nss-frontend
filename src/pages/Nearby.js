import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Nearby() {
  const users = [
    {
      name: "Ayesha",
      teaches: "Web Development",
      wants: "Graphic Design",
      distance: "1.2 km",
      position: [12.9716, 77.5946],
    },
    {
      name: "Rahul",
      teaches: "Public Speaking",
      wants: "Coding",
      distance: "0.8 km",
      position: [12.9736, 77.5940],
    },
    {
      name: "Zoya",
      teaches: "UI/UX Design",
      wants: "Marketing",
      distance: "2.0 km",
      position: [12.9690, 77.5960],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">

      <h2 className="text-2xl font-bold text-center mb-8">
        Nearby Users 📍
      </h2>

      {/* ✅ REAL MAP (FREE) */}
      <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl mb-8">

        <h3 className="text-lg font-semibold mb-4">
          Nearby Users (Proximity)
        </h3>

        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={14}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* YOU */}
          <Marker position={[12.9716, 77.5946]}>
            <Popup>You</Popup>
          </Marker>

          {/* USERS */}
          {users.map((user, index) => (
            <Marker key={index} position={user.position}>
              <Popup>
                {user.name} <br />
                {user.teaches}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

      </div>

      {/* YOUR EXISTING CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-lg font-semibold">{user.name}</h3>

            <p className="text-gray-600 mt-2">
              Teaches: <span className="font-medium">{user.teaches}</span>
            </p>

            <p className="text-gray-600">
              Wants: <span className="font-medium">{user.wants}</span>
            </p>

            <p className="text-sm text-gray-500 mt-2">
              📍 {user.distance}
            </p>

            <button className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nearby;