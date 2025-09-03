import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiMysql, SiJavascript } from "react-icons/si";

export default function HomePage() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={28} className="text-orange-500" />, level: "95%" },
    { name: "CSS", icon: <FaCss3Alt size={28} className="text-blue-600" />, level: "90%" },
    { name: "SQL", icon: <SiMysql size={28} className="text-blue-500" />, level: "80%" },
    { name: "React", icon: <FaReact size={28} className="text-cyan-500" />, level: "85%" },
    { name: "Node.js", icon: <FaNodeJs size={28} className="text-green-500" />, level: "75%" },
    { name: "JavaScript", icon: <SiJavascript size={28} className="text-yellow-500" />, level: "92%" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Left Side - Info */}
        <div className="text-left max-w-xl">
          <p className="text-indigo-600 font-semibold">Hello, I am</p>
          <h1 className="text-5xl font-bold mt-2">Ayyan</h1>
          <h2 className="text-2xl text-gray-600 mt-2">Full Stack Developer</h2>
          <p className="text-gray-600 mt-4">
            I build exceptional digital experiences with modern web technologies.
            Passionate about creating efficient, scalable, and user-friendly applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="/ayyan_resume.pdf"
              download
              className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow font-semibold hover:bg-indigo-700 transition"
            >
              📄 Download CV
            </a>
            <a
              href="tel:9371501567"
              className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              📞 Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="mt-10 md:mt-0">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-white flex items-center justify-center shadow-xl">
            <img
              src="/A..png"
              alt="Ayyan"
              className="w-50 md:w-45"
            />
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section id="expertise" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Areas of Expertise
          </h2>
          <p className="text-center text-gray-500 mt-2 mb-10">
            Technologies I'm proficient with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border-2 border-indigo-200 rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:border-indigo-400 transition"
              >
                {skill.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Advanced proficiency
                </p>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
