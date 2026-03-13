import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaGit, FaBootstrap, FaAws, FaJava, FaDocker } from 'react-icons/fa';
import { SiApachetomcat, SiCplusplus, SiEclipseide, SiHibernate, SiSpringboot, SiTailwindcss, SiMysql, SiVite, SiExpress } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-10 text-white">
      <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
        <span className="w-8 h-px bg-accent-blue" />
        My Skills
      </h2>

      <div className="flex flex-col gap-10 w-full glass-card rounded-[24px] p-6 md:p-10 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <SkillCategory title="Programming Languages">
          <SkillCard icon={<FaJava className="text-[#f89820]" />} label="Java" />
          <SkillCard icon={<SiCplusplus className="text-[#00599C]" />} label="C/C++" />
          <SkillCard icon={<FaJs className="text-[#F7DF1E]" />} label="JavaScript" />
          <SkillCard icon={<FaHtml5 className="text-[#E34F26]" />} label="HTML" />
          <SkillCard icon={<FaCss3Alt className="text-[#1572B6]" />} label="CSS" />
          <SkillCard icon={<SiMysql className="text-[#4479A1]" />} label="MySQL" />
        </SkillCategory>

        <SkillCategory title="Frameworks & Libraries">
          <SkillCard icon={<FaReact className="text-[#61DAFB]" />} label="React" />
          <SkillCard icon={<SiExpress className="text-white" />} label="Express" />
          <SkillCard icon={<SiTailwindcss className="text-[#06B6D4]" />} label="Tailwind CSS" />
          <SkillCard icon={<SiSpringboot className="text-[#6DB33F]" />} label="Spring Boot" />
          <SkillCard icon={<SiApachetomcat className="text-[#F8DC75]" />} label="Apache Tomcat" />
          <SkillCard icon={<SiHibernate className="text-[#59666C]" />} label="Spring Data JPA" />
        </SkillCategory>

        <SkillCategory title="Tools">
          <SkillCard icon={<FaGithub className="text-white" />} label="GitHub" />
          <SkillCard icon={<FaGit className="text-[#F05032]" />} label="Git" />
          <SkillCard icon={<FaBootstrap className="text-[#7952B3]" />} label="Bootstrap" />
          <SkillCard icon={<VscVscode className="text-[#007ACC]" />} label="VS Code" />
          <SkillCard icon={<SiEclipseide className="text-[#2C2255]" />} label="Eclipse IDE" />
          <SkillCard icon={<FaAws className="text-[#FF9900]" />} label="AWS" />
          <SkillCard icon={<FaDocker className="text-[#2496ED]" />} label="Docker" />
          <SkillCard icon={<SiVite className="text-[#646CFF]" />} label="Vite" />
        </SkillCategory>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, children }) => (
  <div className="flex flex-col gap-5 relative z-10">
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {children}
    </div>
  </div>
);

const SkillCard = ({ icon, label }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group w-24 h-24 sm:w-28 sm:h-28 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,163,255,0.15)] cursor-pointer"
    >
      <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
        {icon}
      </div>
      <p className="text-secondary group-hover:text-white font-medium text-xs sm:text-sm text-center transition-colors">
        {label}
      </p>
    </motion.div>
  );
};

export default Skills;
