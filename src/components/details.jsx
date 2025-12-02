import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#0A0A0C] text-white p-6">
        <div className="max-w-lg w-full bg-[#13131A] border border-[#2A2A3A] rounded-xl p-8 text-center">
          <p className="text-gray-300">No details found. Please go back and try again.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-4 py-2 bg-[#00A3FF] text-white rounded-full font-semibold hover:bg-[#3DB4FF] transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const projectImages = {
    'Club Matrix': ['sc-45.png', 'sc-44.png', 'sc-46.png', 'sc-47.png', 'sc-48.png', 'sc-49.png', 'sc-50.png', 'sc-51.png'],
    'AI Fitness App': ['ai-1.png', 'ai-2.png', 'ai-3.png', 'ai-4.png']
  };

  const images = projectImages[project.title] || [];
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const nextImage = () => setIndex((prev) => (images.length ? (prev + 1) % images.length : 0));
  const prevImage = () => setIndex((prev) => (images.length ? (prev - 1 + images.length) % images.length : 0));

  return (
    <div className="w-full min-h-screen p-6 lg:p-10 bg-[#0A0A0C] text-white flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col space-y-8">

        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            {/* Title with underline directly under the text only */}
            <h2 className="inline-block text-3xl sm:text-4xl font-bold text-white border-b-2 border-[#00A3FF] pb-1">
              {project.title}
            </h2>

            <p className="text-gray-300 mt-2 max-w-3xl">{project.summary}</p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-[#13131A] border border-[#2A2A3A] rounded-full hover:bg-[#17171b] transition text-white"
            >
              Back
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#00A3FF] text-white font-semibold rounded-full hover:bg-[#3DB4FF] transition"
            >
              View Source
            </a>
          </div>
        </div>

        {/* CAROUSEL */}
        {images.length > 0 ? (
          <div className="bg-[#13131A] border border-[#2A2A3A] rounded-xl p-6 shadow-lg">
            <div className="relative w-full flex items-center justify-center">

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0F1720] border border-[#23232A]
                text-white rounded-full p-2 hover:scale-105 transition z-20"
              >
                ◀
              </button>

              {/* Image */}
              <div
                onClick={() => setZoomed((z) => !z)}
                className={`mx-auto transition-transform duration-500 ${zoomed ? 'scale-150' : 'scale-100'} cursor-zoom-in`}
                style={{ maxWidth: '100%', overflow: 'hidden' }}
              >
                <img
                  src={images[index]}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-2xl shadow-lg w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]
                  h-auto object-contain transition-all duration-500"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0F1720] border border-[#23232A]
                text-white rounded-full p-2 hover:scale-105 transition z-20"
              >
                ▶
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center mt-6 space-x-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-transform
                    ${index === i ? 'bg-[#00A3FF] scale-110' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-[#13131A] border border-[#2A2A3A] rounded-xl p-8 shadow-lg flex flex-col items-center">
            <div className="w-full max-w-3xl h-64 rounded-2xl bg-[#0F1720] border border-[#23232A] flex items-center justify-center">
              <p className="text-gray-400">No screenshots available</p>
            </div>
          </div>
        )}

        {/* Details Box */}
        <div className="bg-[#13131A] border border-[#2A2A3A] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-[#00A3FF] mb-3">Project Details</h3>
          <p className="text-gray-300">
            {project.details || 'No additional details provided.'}
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#00A3FF] text-white font-semibold rounded-full hover:bg-[#3DB4FF] transition"
          >
            View Source Code
          </a>

          <button
            onClick={() => navigate('/')}
            className="px-5 py-2 bg-[#13131A] border border-[#2A2A3A] text-white rounded-full hover:bg-[#17171b] transition"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default Details;
