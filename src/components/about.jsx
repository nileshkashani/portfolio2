import React from "react";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="w-full flex flex-col gap-12 text-white">
      
      {/* About Me Section */}
      <div className="flex flex-col items-start gap-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <span className="w-8 h-px bg-accent-blue" />
          About Me
        </h2>
        
        <div className="glass-card rounded-[20px] p-8 md:p-10 w-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl group-hover:bg-accent-cyan/10 transition-colors duration-700 pointer-events-none" />
          
          <p className="text-base md:text-lg text-secondary leading-relaxed relative z-10">
            Hello! I’m <span className="text-white font-medium">Nilesh</span>, a curious and enthusiastic software developer with a strong grip on{" "}
            <span className="text-white font-medium">C, C++, Java</span>, frontend technologies like{" "}
            <span className="text-white font-medium">HTML, CSS, JavaScript, React</span>, and backend technologies like{" "}
            <span className="text-white font-medium">Spring Boot, Apache Tomcat, Hibernate</span>. 
            I’m currently a second-year student at ICCS Pune, pursuing a Bachelor of Science in Computer Science. 
            I enjoy turning ideas into clean, responsive, and user-friendly interfaces, and I love taking on challenges that help me grow as a developer.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-start gap-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <span className="w-8 h-px bg-accent-blue" />
          Education
        </h2>

        <div className="w-full">
          <div className="glass-card rounded-[20px] p-6 md:p-8 flex flex-col gap-4 w-full relative overflow-hidden group">
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0 text-accent-blue group-hover:bg-accent-blue/10 transition-colors duration-300">
                <GraduationCap className="w-7 h-7" />
              </div>
              
              <div className="flex flex-col flex-1 gap-1">
                <h3 className="text-white text-lg md:text-xl font-medium tracking-tight">
                  Indira College of Commerce and Science, Pune
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:justify-between text-secondary text-sm">
                  <span>Bachelor of Science in Computer Science</span>
                  <span className="text-white/40 hidden md:inline">•</span>
                  <span className="text-accent-blue/80 font-medium">July 2024 - Present</span>
                </div>
              </div>
            </div>

            <div className="md:pl-[72px] relative z-10 mt-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white font-medium">
                CGPA: <span className="text-accent-cyan ml-1">9.06/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
