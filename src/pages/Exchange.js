import { useState } from "react";

function Exchange() {
  const [type, setType] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Exchange Options 🔄</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setType("credits")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Credits
        </button>

        <button
          onClick={() => setType("money")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Money
        </button>

        <button
          onClick={() => setType("barter")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Barter
        </button>
      </div>

      {/* Output */}
      <div className="bg-white p-6 rounded-xl shadow">

        {type === "" && <p>Select an exchange type above</p>}

        {type === "credits" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Credits System</h2>
            <p>Use earned credits to learn new skills.</p>
          </div>
        )}

        {type === "money" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Money Payment</h2>
            <p>Pay for sessions securely.</p>
          </div>
        )}

        {type === "barter" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Skill Barter</h2>
            <p>Exchange your skill with another user.</p>
          </div>
        )}

      </div>

      {/* ✅ WALLET BALANCE (ADDED ONLY THIS) */}
      <div className="mt-6 bg-gradient-to-r from-green-100 to-green-300 p-6 rounded-xl shadow">
        <p className="text-gray-700 font-medium">Wallet Balance</p>
        <h2 className="text-2xl font-bold text-green-700 mt-2">
          260 Credits
        </h2>
      </div>

    </div>
  );
}

export default Exchange;