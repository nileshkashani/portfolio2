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

    const target = sectionRef.current;

    // If we have a viewport and it is actually scrollable and contains the target, use it
    if (viewportRef?.current) {
      const viewport = viewportRef.current;

      const isScrollable = viewport.scrollHeight > viewport.clientHeight;
      const containsTarget = viewport.contains(target);

      if (isScrollable && containsTarget) {
        const targetRect = target.getBoundingClientRect();
        const viewportRect = viewport.getBoundingClientRect();

        const scrollTop = viewport.scrollTop + (targetRect.top - viewportRect.top);

        viewport.scrollTo({ top: scrollTop, behavior: 'smooth' });
        return;
      }
    }

    // Fallback — use normal page scrolling (works on mobile)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <main className="w-full min-h-screen h-full p-3 lg:p-6 flex justify-center items-start bg-[#0A0A0C] text-white relative">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 163, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 163, 255, 0.5);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: -1000px 0;
          }
          50% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 163, 255, 0.2);
        }

        .glow-border {
          animation: glow 3s ease-in-out infinite;
        }

        .btn-interactive {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-interactive:hover {
          transform: scale(1.0);
          color: #00A3FF;
        }

        .btn-interactive:active {
          transform: scale(0.95);
        }

        .profile-image {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .profile-image:hover {
          transform: scale(1.1) rotate(5deg);
          filter: brightness(1.1);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.15);
          filter: drop-shadow(0 0 8px rgba(0, 163, 255, 0.5));
        }

        .nav-btn {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-btn:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #00A3FF;
          transition: width 0.3s ease;
        }

        .nav-btn:hover:after {
          width: 100%;
        }

        .title-animated {
          background: linear-gradient(90deg, #00A3FF, #00D9FF, #00A3FF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .card-enter {
          animation: fadeInUp 0.6s ease-out;
        }

        .nav-enter {
          animation: fadeInDown 0.6s ease-out;
        }
      `}</style>
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-4 lg:space-x-6 max-w-7xl">

        {/* LEFT CARD */}
        <div className="card-enter w-full md:w-[330px] lg:w-[420px] xl:w-[500px] flex flex-col space-y-5 h-full border border-[#2A2A3A] rounded-xl bg-[#13131A] p-6 shadow-lg hover-lift glow-border">

          {/* Profile */}
          <div className="flex flex-col items-center md:items-start animate-in">
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-[#00A3FF] opacity-20 blur-md animate-pulse"></div>
              <img
                className="profile-image w-32 h-32 rounded-full border-2 border-[#00A3FF] shadow-lg object-cover relative z-10"
                src="/be5030e5-7f6a-40ed-9eb4-d3ec33de60d7.jpg"
                alt="Nilesh Kashani"
              />
            </div>

            <div className="flex flex-col space-y-2 text-center md:text-left animate-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="title-animated text-2xl lg:text-3xl font-bold capitalize">Nilesh Kashani</h1>
            </div>
          </div>

          {/* Title */}
          <h2 className="animate-in text-base lg:text-lg font-medium text-[#00A3FF] capitalize border-l-2 border-[#00A3FF] pl-3 transition-all duration-300 hover:border-l-4 hover:pl-4" style={{ animationDelay: '0.2s' }}>
            Computer Science Student | Software Engineer | Full Stack Web Developer | Problem Solver
          </h2>

          {/* Location */}
          <div className="animate-in flex items-center space-x-2 text-gray-300 transition-all duration-300 hover:text-[#00A3FF]" style={{ animationDelay: '0.3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-map-pin text-[#00A3FF] transition-transform duration-300 hover:scale-125">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h5>Pune, Maharashtra, India</h5>
          </div>

          {/* Social Links */}
          <div className="animate-in hidden w-full md:flex md:gap-6 p-4 mt-6 justify-center border-t border-[#2A2A3A]" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/nileshkashani" target="_blank" rel="noreferrer" className="social-icon text-gray-200 hover:text-white">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/nilesh-kashani" target="_blank" rel="noreferrer" className="social-icon text-gray-200 hover:text-[#00A3FF]">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.leetcode.com/nilesh_____45" target="_blank" rel="noreferrer" className="social-icon text-gray-200 hover:text-white">
              <SiLeetcode className="text-2xl" />
            </a>
          </div>

          {/* Mobile Social Links */}
          <div className="animate-in flex w-full md:hidden gap-6 p-4 mt-4 justify-center border-t border-[#2A2A3A]" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com/nileshkashani"
              target="_blank"
              rel="noreferrer"
              className="social-icon text-gray-200 hover:text-white"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/nilesh-kashani"
              target="_blank"
              rel="noreferrer"
              className="social-icon text-gray-200 hover:text-[#00A3FF]"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            <a
              href="https://www.leetcode.com/nilesh_____45"
              target="_blank"
              rel="noreferrer"
              className="social-icon text-gray-200 hover:text-white"
            >
              <SiLeetcode className="text-2xl" />
            </a>
          </div>


          {/* Resume Button — ONLY THING UPDATED */}
          <div className="animate-in border-t border-[#2A2A3A] flex justify-center items-center" style={{ animationDelay: '0.5s' }}>
            <a
              className="btn-interactive bg-[#1d1d27] p-3 rounded-md mt-3 cursor-pointer hover:bg-[#262633] text-center transition-all duration-300 border border-transparent hover:border-[#00A3FF]"
              href="/Nilesh Kashani - Full Stack Web Dev.pdf"
              target='_blank'
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full h-full flex flex-col space-y-4 max-w-[1200px] mt-6 md:mt-0">

          {/* Desktop Nav */}
          <div className="nav-enter h-16 px-6 lg:px-12 md:flex items-center justify-start space-x-6 border border-[#2A2A3A] rounded-xl bg-[#13131A] shadow-lg hidden hover-lift">
            <button onClick={() => scrollToSection(aboutRef)} className="nav-btn cursor-pointer text-white px-4 py-2">About</button>
            <button onClick={() => scrollToSection(skillsRef)} className="nav-btn cursor-pointer text-white px-4 py-2">Skills</button>
            <button onClick={() => scrollToSection(projectRef)} className="nav-btn cursor-pointer text-white px-4 py-2">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-btn cursor-pointer text-white px-4 py-2">Contact</button>
          </div>

          {/* Mobile Nav */}
          <div className="nav-enter flex justify-evenly items-center p-4 bg-[#13131A] rounded-lg md:hidden border border-[#2A2A3A] hover-lift">
            <button onClick={() => scrollToSection(aboutRef)} className="nav-btn cursor-pointer text-white transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection(skillsRef)} className="nav-btn cursor-pointer text-white transition-colors duration-300">Skills</button>
            <button onClick={() => scrollToSection(projectRef)} className="nav-btn cursor-pointer text-white transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-btn cursor-pointer text-white transition-colors duration-300">Contact</button>
          </div>

          {/* Scrollable Content */}
          <div className="card-enter relative md:h-[calc(100vh-10rem)] lg:h-[calc(100vh-12rem)] w-full border border-[#2A2A3A] rounded-xl bg-[#13131A] shadow-lg hover-lift">
            <style>{`
              [data-radix-scroll-area-viewport]::-webkit-scrollbar { display: none; }
            `}</style>

            <div ref={viewportRef} data-radix-scroll-area-viewport className="size-full rounded-[inherit] outline-none" style={{ overflow: 'auto' }}>
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="flex flex-col space-y-10 md:space-y-16 px-4 md:px-12 py-6">
                  <div ref={aboutRef} className="animate-in" style={{ animationDelay: '0s' }}><About /></div>
                  <div ref={skillsRef} className="animate-in" style={{ animationDelay: '0.1s' }}><Skills /></div>
                  <div ref={projectRef} className="animate-in" style={{ animationDelay: '0.2s' }}><Project /></div>
                  <div ref={contactRef} className="animate-in" style={{ animationDelay: '0.3s' }}><Contact /></div>
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






