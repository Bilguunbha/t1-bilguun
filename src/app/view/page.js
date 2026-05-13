"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const data = {
    name: "Bilguun Shi",
    role: "Student / Developer",
    bio: "I enjoy coding, building apps, and learning new technologies.",
    image:
      "https://i.pinimg.com/1200x/a3/d6/c0/a3d6c0caf1fa0317bb7e8fa02819d6ff.jpg",
    skills: ["JavaScript", "HTML", "CSS", "Node.js"],
    projects: [
      {
        name: "School Dashboard",
        desc: "A dashboard for students and teachers",
        link: "#",
      },
      {
        name: "Weather App",
        desc: "Shows real-time weather data",
        link: "#",
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden p-6">

      {/* Full Screen Top Left Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-6 left-6 z-[999] bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-xl hover:bg-white/20 transition duration-300 shadow-lg"
      >
        ← Back
      </button>

      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/10 p-10 text-center">

          <img
            src="https://i.pinimg.com/1200x/33/22/8f/33228f32e8a4fb8b9110610fb2dc7049.jpg"
            alt="banner"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />

          <div className="relative z-10">

            <div className="flex justify-center mb-6">
              <img
                src={data.image}
                alt="profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/40 shadow-xl"
              />
            </div>

            <h1 className="text-5xl font-bold">
              {data.name}
            </h1>

            <p className="text-green-400 mt-2 text-lg">
              {data.role}
            </p>

            <p className="mt-5 text-gray-200 max-w-xl mx-auto">
              {data.bio}
            </p>

          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-14">
          <h2 className="text-3xl font-semibold mb-6">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {data.projects.map((p, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-2xl"
              >
                <h3 className="text-2xl font-bold">
                  {p.name}
                </h3>

                <p className="text-gray-300 mt-3">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  className="inline-block mt-4 text-green-400 hover:text-green-300 transition"
                >
                  View Project →
                </a>
              </div>
            ))}

          </div>
        </div>

      </div>
    </main>
  );
}