import React from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();

  const projectList = [
    {
      title: "AI Fitness App",
      summary:
        "AI Fitness App: A modern microservice-based platform built using Spring Boot. Users upload fitness stats and Gemini AI provides personalized suggestions, improvements, and safety measures for workouts. Features Spring Cloud Eureka, Kafka async communication, JPA + MongoDB, Keycloak authentication, and a React (Vite + Tailwind) frontend.",
      github: "https://github.com/nileshkashani/AI-Fitness-App",
    },
    {
      title: "Club Matrix",
      summary:
        "Club Matrix - empowering school clubs using Java (Spring Boot) + React + MySQL. Hackathon Runner-up project with features like sending club join requests, exploring clubs, and adding your own club.",
      github: "https://github.com/nileshkashani/clubmatrix",
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen p-6 bg-[#0A0A0C] text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center space-y-12">
        <h2 className="text-3xl lg:text-4xl font-semibold border-b-2 border-[#00A3FF] pb-2">
          Projects
        </h2>

        <div className="flex flex-col gap-5 w-full">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-[#13131A] border border-[#2A2A3A] p-6 rounded-xl shadow-lg flex flex-col transition-transform duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 bg-[#1d1d27] rounded-lg p-5">
                  {project.summary}
                </p>
              </div>

              <div className="flex gap-3 mt-auto pt-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#00A3FF] text-white font-semibold rounded-full hover:bg-[#3DB4FF] transition text-sm"
                >
                  Source Code
                </a>

                <div
                  onClick={() => navigate("/details", { state: { project } })}
                  className="px-5 py-2 bg-[#00A3FF] text-white font-semibold rounded-full hover:bg-gray-200 transition text-sm cursor-pointer"
                >
                  See Details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;