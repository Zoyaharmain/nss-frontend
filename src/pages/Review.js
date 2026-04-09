import { useState } from "react";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const submitReview = () => {
    if (!text || rating === 0) return;

    setReviews([...reviews, { text, rating }]);
    setText("");
    setRating(0);
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

      {/* LEFT SIDE - YOUR EXISTING CODE */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Reviews ⭐</h2>

        {/* Rating Stars */}
        <div className="flex gap-2 mb-4 text-2xl cursor-pointer">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={star <= rating ? "text-yellow-400" : "text-gray-300"}
            >
              ★
            </span>
          ))}
        </div>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-3 rounded-xl border mb-4"
        />

        <button
          onClick={submitReview}
          className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl"
        >
          Submit Review
        </button>

        {/* Reviews List */}
        <div className="mt-6 space-y-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/40 backdrop-blur-xl p-4 rounded-xl shadow"
            >
              <div className="text-yellow-400">
                {"★".repeat(r.rating)}
              </div>
              <p className="text-gray-700">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ RIGHT SIDE - REPUTATION SNAPSHOT (ADDED ONLY THIS) */}
      <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl h-fit">

        <h2 className="text-xl font-bold mb-4">
          Reputation Snapshot
        </h2>

        <hr className="mb-4" />

        <p className="mb-3">
          <span className="font-semibold">Current Streak:</span> 12 days
        </p>

        <p className="mb-3">
          <span className="font-semibold">Reliability Score:</span> 92/100
        </p>

        <p className="mb-3">
          <span className="font-semibold">Level:</span> Gold Mentor
        </p>

        <p>
          <span className="font-semibold">Recent Badge:</span> Community Helper
        </p>

      </div>

    </div>
  );
}

export default Review;