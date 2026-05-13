"use client";

import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen bg-[#0f172a] text-white overflow-hidden px-4">

      {/* Back Button (slightly spaced in) */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-5 left-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl hover:bg-white/20 transition shadow-lg"
      >
        ← Back
      </button>

      {/* glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Sidebar */}
      <div className="w-[80px] bg-[#111827] flex flex-col items-center py-6 space-y-10 rounded-xl">
        <div className="text-2xl">💨</div>
        <div>weather</div>
        <div>cities</div>
        <div>map</div>
        <div>settings</div>
      </div>

      {/* Main */}
      <div className="flex flex-1 p-6 gap-8">

        <div className="flex-1 space-y-6">

          <input
            type="text"
            placeholder="Search for cities"
            className="w-full p-3 rounded-xl bg-[#1e293b] outline-none"
          />

          <div className="bg-[#1e293b] rounded-2xl p-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Madrid</h1>
              <p className="text-gray-400 mb-6">Chance of rain: 0%</p>
              <h2 className="text-6xl font-bold">31°</h2>
            </div>
            <div className="text-7xl">☀️</div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-6">
            <h3 className="text-sm mb-4 text-gray-300">TODAY'S FORECAST</h3>

            <div className="flex justify-between text-center">
              {[
                { time: "6:00 AM", temp: "25°", icon: "☁️" },
                { time: "9:00 AM", temp: "28°", icon: "🌤️" },
                { time: "12:00 PM", temp: "33°", icon: "☀️" },
                { time: "3:00 PM", temp: "34°", icon: "☀️" },
                { time: "6:00 PM", temp: "32°", icon: "☀️" },
                { time: "9:00 PM", temp: "30°", icon: "🌥️" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-sm text-gray-400">{item.time}</p>
                  <div className="text-2xl">{item.icon}</div>
                  <p className="font-semibold">{item.temp}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right panel */}
        <div className="w-[350px] bg-[#1e293b] rounded-2xl p-6">
          <h3 className="mb-6 text-gray-300">7-DAY FORECAST</h3>

          {[
            { day: "Today", icon: "☀️", type: "Sunny", temp: "36/22" },
            { day: "Tue", icon: "☀️", type: "Sunny", temp: "37/21" },
            { day: "Wed", icon: "☀️", type: "Sunny", temp: "37/21" },
            { day: "Thu", icon: "☁️", type: "Cloudy", temp: "37/21" },
            { day: "Fri", icon: "☁️", type: "Cloudy", temp: "37/21" },
            { day: "Sat", icon: "🌧️", type: "Rainy", temp: "37/21" },
            { day: "Sun", icon: "⛈️", type: "Storm", temp: "37/21" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-3 border-b border-gray-700 last:border-none"
            >
              <p className="w-16">{item.day}</p>
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-gray-400">{item.type}</span>
              </div>
              <p className="font-semibold">{item.temp}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}