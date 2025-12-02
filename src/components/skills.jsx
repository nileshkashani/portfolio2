import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaGit, FaBootstrap, FaAws, FaJava, FaDocker } from 'react-icons/fa';
import { SiApachetomcat, SiCplusplus, SiEclipseide, SiHibernate, SiSpringboot, SiTailwindcss, SiMysql, SiVite, SiExpress } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen p-6 bg-[#0A0A0C] text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center space-y-12">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white border-b-2 border-[#00A3FF] pb-2">
          My Skills
        </h2>

        <div className="w-full bg-[#13131A] border border-[#2A2A3A] rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SkillCard icon={<FaJava />} label="Java" />
            <SkillCard icon={<SiCplusplus />} label="C/C++" />
            <SkillCard icon={<FaJs />} label="JavaScript" />
            <SkillCard icon={<FaHtml5 />} label="HTML" />
            <SkillCard icon={<FaCss3Alt />} label="CSS" />
            <SkillCard icon={<SiMysql />} label="MySQL" />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">Frameworks & Libraries</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SkillCard icon={<FaReact />} label="React" />
            <SkillCard icon={<SiExpress />} label="NodeJS(Express)" />
            <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" />
            <SkillCard icon={<SiSpringboot />} label="Spring Boot" />
            <SkillCard icon={<SiApachetomcat />} label="Apache Tomcat" />
            <SkillCard icon={<SiHibernate />} label="Spring Data JPA" />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard icon={<FaGithub />} label="GitHub" />
            <SkillCard icon={<FaGit />} label="Git" />
            <SkillCard icon={<FaBootstrap />} label="Bootstrap" />
            <SkillCard icon={<VscVscode />} label="VS Code" />
            <SkillCard icon={<SiEclipseide />} label="Eclipse IDE" />
            <SkillCard icon={<FaAws />} label="AWS" />
            <SkillCard icon={<FaDocker/>} label="Docker"/>
            <SkillCard icon={<SiVite/>} label="Vite"/>

          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, label }) => {
  return (
    <div className="w-36 h-28 sm:w-40 sm:h-28 md:w-48 md:h-28 lg:w-56 lg:h-32 bg-[#1d1d27] border border-[#23232A] rounded-xl shadow-md flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <div className="text-3xl md:text-4xl mb-2">{icon}</div>
      <p className="text-white font-medium text-sm text-center">{label}</p>
    </div>
  );
};

export default Skills;
