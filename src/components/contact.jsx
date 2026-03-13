import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-6 text-white pb-12">
      <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-2">
        <span className="w-8 h-px bg-accent-blue" />
        Contact Me
      </h2>

      <div className="glass-card rounded-[24px] p-8 md:p-12 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-xl mx-auto flex flex-col gap-8 relative z-10">
          <div className="text-center space-y-2 mb-2">
            <h3 className="text-2xl font-semibold text-white">Let's work together</h3>
            <p className="text-secondary text-sm">Fill out the form below and I'll get back to you shortly.</p>
          </div>

          <form
            action="https://formspree.io/f/myzjdbqj"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-secondary ml-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full p-3.5 rounded-xl bg-surface-base/50 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-secondary ml-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3.5 rounded-xl bg-surface-base/50 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-secondary ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3.5 rounded-xl bg-surface-base/50 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all resize-none"
                placeholder="Hi Nilesh, I'd like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 group w-full flex items-center justify-center gap-2 bg-white text-surface-base font-semibold py-4 rounded-xl hover:bg-white/90 transition-all duration-300"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;