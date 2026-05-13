"use client";

import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function UsersPage() {
  const [users, setUsers] = useState(DataJson);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-black">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full md:w-96 mb-8 px-4 py-2 rounded-xl border shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white hover:scale-105 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <img
              src={user.image}
              alt="profile"
              className="w-full bg-cover object-cover"
            />

            <div className="p-4">

              {/* NAME + BADGE */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-lg">
                  {user.first_name} {user.last_name}
                </h2>

                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {user.type}
                </span>
              </div>

              {/* INFO */}
              <div className="text-sm space-y-1 text-gray-600">
                <p>📧 {user.email}</p>
                <p>🎂 Age: {user.age}</p>
                <p>🌍 {user.country}</p>
                <p>⭐ Points: {user.point}</p>
                <p className="text-xs text-gray-400">
                  Created: {user.created_at}
                </p>
              </div>

              {/* DAILY ITEMS */}
              <div className="mt-3">
                <p className="text-xs font-semibold mb-1">Daily items</p>
                <img
                  src={user.daily_items}
                  className="w-20 h-20 bg-cover object-cover rounded-lg"
                />
              </div>

              {/* DELETE */}
              <button
                onClick={() => handleDelete(user.id)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {filteredUsers.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No users found 😢
        </p>
      )}
    </div>
  );
}