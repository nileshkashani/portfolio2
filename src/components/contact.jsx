import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full md:min-h-screen p-6 bg-[#0A0A0C] text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl lg:text-4xl font-semibold text-white border-b-2 border-[#00A3FF] pb-2 mb-12 text-center">
        Contact Me
      </h2>

      <form
        action="https://formspree.io/f/myzjdbqj"
        method="POST"
        className="w-full max-w-lg bg-[#13131A] border border-[#2A2A3A] p-8 rounded-xl shadow-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="p-3 rounded-md bg-[#0F1720] text-white border border-[#2A2A3A] focus:outline-none focus:ring-2 focus:ring-[#00A3FF] placeholder-gray-400"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="p-3 rounded-md bg-[#0F1720] text-white border border-[#2A2A3A] focus:outline-none focus:ring-2 focus:ring-[#00A3FF] placeholder-gray-400"
        />

        <textarea
          name="message"
          required
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-md bg-[#0F1720] text-white border border-[#2A2A3A] focus:outline-none focus:ring-2 focus:ring-[#00A3FF] placeholder-gray-400"
        ></textarea>

        <button
          type="submit"
          className="bg-[#00A3FF] hover:bg-[#3DB4FF] text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;