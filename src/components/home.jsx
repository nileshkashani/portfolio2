import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, MapPin, Download } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'About', refName: 'about' },
  { name: 'Skills', refName: 'skills' },
  { name: 'Projects', refName: 'project' },
  { name: 'Contact', refName: 'contact' },
];

const Home = () => {
  const refs = {
    about: useRef(null),
    skills: useRef(null),
    project: useRef(null),
    contact: useRef(null),
  };

  const viewportRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      if (!viewportRef.current) return;
      const scrollPosition = viewportRef.current.scrollTop;
      
      let currentSection = 'about';
      for (const [key, ref] of Object.entries(refs)) {
        if (ref.current && ref.current.offsetTop - 100 <= scrollPosition) {
          currentSection = key;
        }
      }
      setActiveSection(currentSection);
    };

    const viewport = viewportRef.current;
    if (viewport) {
      viewport.addEventListener('scroll', handleScroll);
    }
    return () => viewport?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionKey) => {
    const target = refs[sectionKey]?.current;
    if (!target) return;

    if (viewportRef.current) {
      viewportRef.current.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth',
      });
      setActiveSection(sectionKey);
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="w-full min-h-screen h-full p-4 lg:p-8 flex justify-center items-center bg-[#000000] text-white relative overflow-hidden">
      
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-cyan/10 blur-[120px] mix-blend-screen" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPgo8L3N2Zz4=')] opacity-50 z-0"></div>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row justify-center items-start gap-6 max-w-[1400px] z-10">

        {/* LEFT COLUMN: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[350px] lg:w-[400px] xl:w-[450px] flex-shrink-0 flex flex-col gap-6 md:sticky md:top-8 h-auto"
        >
          <div className="glass-card rounded-[24px] p-8 flex flex-col h-full items-center md:items-start relative overflow-hidden group">
            
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/5 to-transparent z-0" />

            <div className="relative z-10 w-full flex flex-col items-center md:items-start">
              {/* Profile Image with Motion */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative mb-8"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-blue via-accent-cyan to-transparent opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
                <img
                  className="w-32 h-32 rounded-full border border-white/20 shadow-2xl object-cover relative z-10 transition-all duration-300 group-hover:border-white/40"
                  src="/be5030e5-7f6a-40ed-9eb4-d3ec33de60d7.jpg"
                  alt="Nilesh Kashani"
                />
              </motion.div>

              {/* Name & Title */}
              <div className="flex flex-col gap-2 text-center md:text-left w-full mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1">
                  Nilesh Kashani
                </h1>
                <h2 className="text-secondary text-sm lg:text-base font-medium leading-relaxed">
                  Software Engineer · Full Stack Web Developer · Problem Solver
                </h2>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-secondary mb-8 hover:bg-white/10 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Pune, Maharashtra, India</span>
              </div>

              {/* Navigation (Desktop Pinned inside card or horizontal on mobile) */}
              <div className="hidden md:flex flex-col w-full gap-2 mb-8 mt-auto">
                {navItems.map((item) => (
                  <button
                    key={item.refName}
                    onClick={() => scrollToSection(item.refName)}
                    className={cn(
                      "group flex items-center justify-between w-full p-3 rounded-lg text-sm font-medium transition-all duration-300",
                      activeSection === item.refName 
                        ? "bg-white/10 text-white shadow-sm" 
                        : "text-secondary hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn(
                        "w-1 h-4 rounded-full transition-all duration-300",
                        activeSection === item.refName ? "bg-accent-blue" : "bg-transparent group-hover:bg-white/20"
                      )} />
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Social Links & Resume */}
              <div className="w-full flex flex-col gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="flex justify-center md:justify-start gap-4">
                  <SocialLink href="https://github.com/nileshkashani" icon={<Github className="w-5 h-5" />} />
                  <SocialLink href="https://www.linkedin.com/in/nilesh-kashani" icon={<Linkedin className="w-5 h-5" />} />
                  <SocialLink href="https://www.leetcode.com/nilesh_____45" icon={<SiLeetcode className="w-5 h-5" />} />
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Nilesh Kashani - Full Stack Web Dev.pdf"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 mt-2"
                >
                  Download Resume
                  <Download className="w-4 h-4 ml-1 opacity-70" />
                </motion.a>
              </div>

            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Scrolling Content Area */}
        <div className="w-full flex flex-col flex-1 gap-6 min-w-0 md:h-[calc(100vh-4rem)] relative z-10">

          {/* Mobile Top Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass rounded-xl p-2 sticky top-4 z-50 shadow-2xl overflow-x-auto no-scrollbar border-white/10"
          >
            <div className="flex gap-2 min-w-max">
              {navItems.map((item) => (
                <button
                  key={item.refName}
                  onClick={() => scrollToSection(item.refName)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    activeSection === item.refName 
                      ? "bg-white/10 text-white border border-white/10" 
                      : "text-secondary hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Scrollable Main Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full md:overflow-y-auto custom-scrollbar md:pr-4 pb-20 md:pb-0"
            ref={viewportRef}
          >
            <div className="flex flex-col gap-24 pt-4 md:pt-0">
              <section ref={refs.about} id="about" className="scroll-mt-6">
                <About />
              </section>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <section ref={refs.skills} id="skills" className="scroll-mt-6">
                <Skills />
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <section ref={refs.project} id="project" className="scroll-mt-6">
                <Project />
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <section ref={refs.contact} id="contact" className="scroll-mt-6 mb-24 md:mb-12">
                <Contact />
              </section>
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
};

// Reusable Social Link component
const SocialLink = ({ href, icon }) => (
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-base border border-white/10 text-secondary hover:text-white hover:border-white/30 hover:bg-white/5 transition-all shadow-sm"
  >
    {icon}
  </motion.a>
);

export default Home;







