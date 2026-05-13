"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const router = useRouter();
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="z-10 w-full max-w-4xl text-center px-6">
        {page === "home" && (
          <>
            <h1 className="text-6xl font-extrabold mb-6 leading-tight">
              Building <span className="text-green-400">Modern</span><br />
              Web Experiences
            </h1>

            <p className="text-gray-400 mb-10">
              Developer focused on performance, clean UI, and scalable systems.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => {setPage("view"); router.push("view")}} className="btn">Portfolio</button>
              <button onClick={() => {setPage("contact"); router.push("contact")}} className="btn">Contact us</button>
              <button onClick={() => {setPage("weather"); router.push("weather")}} className="btn">Weather</button>
              <button onClick={() => {setPage("data"); router.push("data")}} className="btn">List</button>
            </div>
          </>
        )}

        {page === "view" && (
          <div className="glass">
            <h1 className="text-3xl mb-4">My Projects</h1>
            <p className="text-gray-300 mb-6">Here are some of my works.</p>
            <button onClick={() => setPage("home")} className="btn">⬅ Back</button>
          </div>
        )}
        {page === "about" && (
          <div className="glass">
            <h1 className="text-3xl mb-4">About Me</h1>
            <p className="text-gray-300 mb-6">
              I am a modern web developer using Next.js and Tailwind CSS.
            </p>
            <button onClick={() => setPage("home")} className="btn">⬅ Back</button>
          </div>
        )}
        {page === "contact" && (
          <div className="glass">
            <h1 className="text-3xl mb-4">Contact</h1>
            <p className="text-gray-300 mb-6">Email: example@gmail.com</p>
            <button onClick={() => setPage("home")} className="btn">⬅ Back</button>
          </div>
        )}

        {page === "users" && (
          <div className="glass">
            <h1 className="text-3xl mb-4">Users</h1>
            <p className="text-gray-300 mb-6">User list will be here.</p>
            <button onClick={() => setPage("home")} className="btn">⬅ Back</button>
          </div>
        )}

      </div>
      <style jsx>{`
        .btn {
          background: linear-gradient(135deg, #22c55e, #4ade80);
          padding: 12px 22px;
          border-radius: 10px;
          color: white;
          transition: all 0.3s;
          box-shadow: 0 0 10px rgba(34,197,94,0.4);
        }

        .btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 20px rgba(34,197,94,0.8);
        }

        .glass {
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 0 30px rgba(0,0,0,0.5);
        }
      `}</style>

    </div>
  );
}