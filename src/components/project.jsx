import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, ArrowRight, FolderGit2 } from "lucide-react";

const Project = () => {
  const navigate = useNavigate();

  const projectList = [
    {
      title: "AI Fitness App",
      summary:
        "A modern microservice-based platform built using Spring Boot. Users upload fitness stats and Gemini AI provides personalized suggestions, improvements, and safety measures for workouts. Features Spring Cloud Eureka, Kafka async communication, JPA + MongoDB, Keycloak authentication, and a React (Vite + Tailwind) frontend.",
      github: "https://github.com/nileshkashani/AI-Fitness-App",
      tags: ["Spring Boot", "React", "Kafka", "MongoDB"],
    },
    {
      title: "School Club Management App",
      summary:
        "Club Matrix - empowering school clubs using Java (Spring Boot) + React + MySQL. Hackathon Runner-up project with features like sending club join requests, exploring clubs, and adding your own club.",
      github: "https://github.com/nileshkashani/clubmatrix",
      tags: ["Java", "React", "MySQL", "Spring Boot"],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 text-white">
      <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-2">
        <span className="w-8 h-px bg-accent-blue" />
        Projects
      </h2>

      <div className="flex flex-col gap-8 w-full">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group glass-card rounded-[24px] overflow-hidden flex flex-col relative"
          >
            {/* Soft decorative gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/0 via-accent-cyan/0 to-accent-blue/0 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 pointer-events-none" />

            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/10 transition-colors duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-secondary hover:text-white transition-all duration-300"
                  title="Source Code"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-accent-blue transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-secondary text-base leading-relaxed mb-8 flex-1">
                {project.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-secondary">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <button
                  onClick={() => navigate("/details", { state: { project } })}
                  className="group/btn flex items-center gap-2 text-sm font-semibold text-white transition-all"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 text-accent-blue group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;