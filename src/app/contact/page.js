"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const data = {
    email: "bilguun@email.com",
    github: "https://github.com/",
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* Back Button (full screen top-left) */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-xl hover:bg-white/20 transition shadow-lg"
      >
        ← Back
      </button>

      {/* glow background */}
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative text-center z-10">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-center gap-6">

          <a
            href={`mailto:${data.email}`}
            className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            📧 Email Me
          </a>

          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            💻 GitHub
          </a>

          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            💬 Message
          </a>

        </div>

      </div>
    </div>
  );
}