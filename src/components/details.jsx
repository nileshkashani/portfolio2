import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, Github, ExternalLink } from 'lucide-react';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-background text-white p-6">
        <div className="max-w-md w-full glass-card rounded-2xl p-10 text-center flex flex-col items-center gap-6">
          <p className="text-secondary">Project details not found.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-white text-surface-base rounded-full font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const projectImages = {
    'School Club Management App': ['sc-45.png', 'sc-44.png', 'sc-46.png', 'sc-47.png', 'sc-48.png', 'sc-49.png', 'sc-50.png', 'sc-51.png'],
    'AI Fitness App': ['link1.3.png', 'link0.1.png', 'link1.1.png', 'link1.2.png', 'link1.4.png']
  };

  const images = projectImages[project.title] || [];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setIndex((prev) => (images.length ? (prev + 1) % images.length : 0));
  };
  
  const prevImage = () => {
    setDirection(-1);
    setIndex((prev) => (images.length ? (prev - 1 + images.length) % images.length : 0));
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full min-h-screen p-4 md:p-8 lg:p-12 bg-background text-white flex justify-center pb-24"
    >
      <div className="w-full max-w-6xl flex flex-col gap-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-6 items-start">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-white transition-colors group px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
            
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h1>
              <p className="text-secondary max-w-3xl text-lg leading-relaxed">
                {project.summary}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-surface-base font-semibold rounded-full hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>

        {/* Carousel */}
        {images.length > 0 ? (
          <div className="glass-card rounded-[32px] p-4 md:p-8 flex flex-col items-center">
            <div className="relative w-full aspect-video md:aspect-[21/9] flex items-center justify-center overflow-hidden rounded-[20px] bg-surface-base border border-white/5">
              
              {/* Prev Button */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-surface-base/80 backdrop-blur-md border border-white/10 text-white rounded-full hover:scale-110 hover:bg-white/10 transition z-20"
                >
                  <ChevronLeft className="w-6 h-6 ml-[-2px]" />
                </button>
              )}

              {/* Image Frame */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={index}
                    src={`/${images[index]}`}
                    alt={`${project.title} screenshot ${index + 1}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute w-full h-full object-contain drop-shadow-2xl rounded-lg"
                    onError={(e) => {
                      // fallback logic handling broken image paths elegantly
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += '<div class="text-secondary text-sm">Image not found</div>';
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-surface-base/80 backdrop-blur-md border border-white/10 text-white rounded-full hover:scale-110 hover:bg-white/10 transition z-20"
                >
                  <ChevronRight className="w-6 h-6 mr-[-2px]" />
                </button>
              )}
            </div>

            {/* Pagination Dots */}
            {images.length > 1 && (
              <div className="flex items-center justify-center mt-6 gap-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === i ? 'w-8 bg-accent-blue' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="glass-card rounded-[32px] p-12 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <ExternalLink className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-secondary font-medium">No screenshots available for this project.</p>
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default Details;
