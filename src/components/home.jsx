// src/components/Home.jsx
import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const viewportRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (!sectionRef?.current) return;

    if (viewportRef?.current) {
      const viewport = viewportRef.current;
      const target = sectionRef.current;

      const targetTop = target.getBoundingClientRect().top;
      const viewportTop = viewport.getBoundingClientRect().top;

      const scrollTop = viewport.scrollTop + (targetTop - viewportTop);

      viewport.scrollTo({ top: scrollTop, behavior: 'smooth' });
      return;
    }

    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="w-full min-h-screen h-full p-3 lg:p-6 flex justify-center items-start bg-[#0A0A0C] text-white">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-4 lg:space-x-6 max-w-7xl">

        {/* LEFT CARD */}
        <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[500px] flex flex-col space-y-5 h-full border border-[#2A2A3A] rounded-xl bg-[#13131A] p-6 shadow-lg">

          {/* Profile */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-[#00A3FF] opacity-20 blur-md"></div>
              <img
                className="w-32 h-32 rounded-full border-2 border-[#00A3FF] shadow-lg object-cover relative z-10"
                src="/be5030e5-7f6a-40ed-9eb4-d3ec33de60d7.jfif"
                alt="Nilesh Kashani"
              />
            </div>

            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold capitalize">Nilesh Kashani</h1>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-base lg:text-lg font-medium text-[#00A3FF] capitalize border-l-2 border-[#00A3FF] pl-3">
            Computer Science Student | Software Engineer | Full Stack Web Developer | Problem Solver
          </h2>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-map-pin text-[#00A3FF]">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h5>Pune, Maharashtra, India</h5>
          </div>

          {/* Social Links */}
          <div className="hidden w-full md:flex md:gap-6 p-4 mt-6 justify-center border-t border-[#2A2A3A]">
            <a href="https://github.com/nileshkashani" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/nilesh-kashani" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-[#00A3FF] transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.leetcode.com/nilesh_____45" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white transition-colors">
              <SiLeetcode className="text-2xl" />
            </a>
          </div>

          {/* Mobile Social Links */}
          <div className="flex w-full md:hidden gap-6 p-4 mt-4 justify-center border-t border-[#2A2A3A]">
            <a
              href="https://github.com/nileshkashani"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/nilesh-kashani"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-[#00A3FF] transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            <a
              href="https://www.leetcode.com/nilesh_____45"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <SiLeetcode className="text-2xl" />
            </a>
          </div>


          {/* Resume Button — ONLY THING UPDATED */}
          <div className="border-t border-[#2A2A3A] flex justify-center items-center">
            <a
              className="bg-[#1d1d27] p-2 rounded-md mt-3 cursor-pointer transition-colors hover:bg-[#262633]"
              href="/NileshKashani - Full Stack Web Developer1.pdf"
              target='_blank'
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full h-full flex flex-col space-y-4 max-w-[1200px] mt-6 md:mt-0">

          {/* Desktop Nav */}
          <div className="hidden h-16 px-6 lg:px-12 md:flex items-center justify-start space-x-6 border border-[#2A2A3A] rounded-xl bg-[#13131A] shadow-lg">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#00A3FF] transition-colors px-4 py-2">About</button>
            <button onClick={() => scrollToSection(skillsRef)} className="hover:text-[#00A3FF] transition-colors px-4 py-2">Skills</button>
            <button onClick={() => scrollToSection(projectRef)} className="hover:text-[#00A3FF] transition-colors px-4 py-2">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#00A3FF] transition-colors px-4 py-2">Contact</button>
          </div>

          {/* Mobile Nav */}
          <div className="flex justify-evenly items-center p-4 bg-[#13131A] rounded-lg md:hidden">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#00A3FF]">About</button>
            <button onClick={() => scrollToSection(skillsRef)} className="hover:text-[#00A3FF]">Skills</button>
            <button onClick={() => scrollToSection(projectRef)} className="hover:text-[#00A3FF]">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#00A3FF]">Contact</button>
          </div>

          {/* Scrollable Content */}
          <div className="relative md:h-[calc(100vh-10rem)] lg:h-[calc(100vh-12rem)] w-full border border-[#2A2A3A] rounded-xl bg-[#13131A] shadow-lg">
            <style>{`
              [data-radix-scroll-area-viewport]::-webkit-scrollbar { display: none; }
            `}</style>

            <div ref={viewportRef} data-radix-scroll-area-viewport className="size-full rounded-[inherit] outline-none" style={{ overflow: 'auto' }}>
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="flex flex-col space-y-10 md:space-y-16 px-4 md:px-12 py-6">
                  <div ref={aboutRef}><About /></div>
                  <div ref={skillsRef}><Skills /></div>
                  <div ref={projectRef}><Project /></div>
                  <div ref={contactRef}><Contact /></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Home;






