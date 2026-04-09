import { useState } from "react";

function Schedule() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleBooking = () => {
    if (date && time) {
      setConfirmed(true);
    }
  };

  // ✅ REMINDER FUNCTION (ADDED)
  const handleReminder = () => {
    if (date && time) {
      alert(`⏰ Reminder set for ${date} at ${time}`);
    } else {
      alert("Please select date and time first!");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Schedule Session 📅</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-md">

        {/* Date */}
        <label className="block mb-2 font-medium">Select Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Time */}
        <label className="block mb-2 font-medium">Select Time</label>
        <input
          type="time"
          className="w-full border p-2 rounded mb-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleBooking}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Book Session
          </button>

          {/* ✅ REMINDER BUTTON */}
          <button
            onClick={handleReminder}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100"
          >
            Set Reminder
          </button>
        </div>

        {/* Confirmation */}
        {confirmed && (
          <p className="mt-4 text-green-600 font-semibold">
            ✅ Session booked on {date} at {time}
          </p>
        )}

      </div>
    </div>
  );
}

export default Schedule;