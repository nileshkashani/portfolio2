import React from "react";
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

const About = () => {
  return (
    <section className="w-full md:min-h-screen p-6 bg-[#0A0A0C] text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center space-y-16">
        <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-white border-b-2 border-[#00A3FF] pb-2">
            About Me
          </h2>
          <div className="mt-8 bg-[#13131A] border border-[#2A2A3A] rounded-xl p-6">
            <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
              Hello! I’m <span className="font-semibold">Nilesh</span>, a curious and enthusiastic software developer with a strong grip on{" "}
              <span className="font-semibold">C, C++, Java</span>, frontend technologies like{" "}
              <span className="font-semibold">HTML, CSS, JavaScript, React</span>, and backend technologies like{" "}
              <span className="font-semibold">Spring Boot, Apache Tomcat, Hibernate</span>. I’m currently a second-year student at ICCS Pune, pursuing a Bachelor of Science in Computer Science. I enjoy turning ideas into clean, responsive, and user-friendly interfaces, and I love taking on challenges that help me grow as a developer.
            </p>
            
          </div>
        </div>

        <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-white border-b-2 border-[#00A3FF] pb-2">
            Education
          </h2>

          <div className="w-full mt-8 flex flex-cols items-center">
            <div className="bg-[#13131A] border border-[#2A2A3A] rounded-2xl p-6 flex flex-col justify-center space-y-3 hover:shadow-lg transition-shadow w-full gap-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#00A3FF] bg-opacity-10 border border-[#00A3FF]">
                  <FaSchool className="w-6 h-6" />
                </div>
                <h3 className="text-white text-l font-semibold">Indira College of Commerce and Science, Pune</h3>
              </div>
              <div className="flex gap-5 justify-between">
                <span className="text-gray-300">Bachelor of Science in Computer Science</span>
                <span className="text-gray-400">July 2024 - Present</span>
              </div>
              <p className="text-white font-bold text-sm">CGPA: 9.27/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
