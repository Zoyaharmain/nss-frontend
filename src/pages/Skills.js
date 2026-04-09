import { useState } from "react";

function Skills() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [video, setVideo] = useState(null);

  const addSkill = () => {
    if (skill.trim() !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

      {/* LEFT SIDE */}
      <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Profile and Skills
        </h2>

        <input
          type="text"
          placeholder="e.g. Asha R"
          className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="asha@email.com"
          className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Your area / locality"
          className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* SKILL INPUT */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Add a skill..."
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addSkill}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition"
          >
            Add
          </button>
        </div>

        {/* SKILL CHIPS */}
        <div className="flex flex-wrap gap-3 mb-4">
          {skills.map((s, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-lg rounded-full shadow-md hover:scale-105 transition"
            >
              <span>{s}</span>
              <button
                onClick={() => removeSkill(index)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Skills to learn (e.g. Public Speaking)"
          className="w-full mb-6 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition">
          Save
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Skill Video Showcase
        </h2>

        {/* UPLOAD BOX */}
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center mb-6">

          <p className="mb-2 text-gray-700">
            Drag & drop your skill video here
          </p>
          <p className="text-sm text-gray-500 mb-4">
            MP4 / MOV up to 100MB
          </p>

          {/* REAL UPLOAD BUTTON */}
          <label className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition cursor-pointer">
            Upload Video
            <input
              type="file"
              accept="video/*"
              capture
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setVideo(URL.createObjectURL(file));
                }
              }}
            />
          </label>

        </div>

        {/* VIDEO PREVIEW */}
        <div className="h-48 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white overflow-hidden">
          {video ? (
            <video
              src={video}
              controls
              className="h-full w-full object-cover rounded-xl"
            />
          ) : (
            "Video Preview"
          )}
        </div>

      </div>

    </div>
  );
}

export default Skills;