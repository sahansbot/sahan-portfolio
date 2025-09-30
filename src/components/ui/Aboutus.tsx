import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-transparent dark:bg-transparent transition-colors duration-300 px-6 py-16"
    >
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
        About <span className="text-purple-600 dark:text-purple-400">Me</span>
      </h2>

      {/* Profile Image with Hover Animation */}
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl mb-6 transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src="/CV Image.webp" 
          alt="Sahan - Full Stack Developer"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      <p className="max-w-5xl text-black dark:text-gray-300 text-lg leading-relaxed mb-4">
        I'm <span className="font-semibold">Sahan Sudeepa</span>, a highly motivated
        Full Stack Developer with a strong eye for design and a deep passion for
        building impactful, user-friendly web applications. I have over 3 years
        of hands-on experience crafting full-stack solutions that seamlessly
        combine creativity with functionality.
        <br />
        <br />
        I enjoy exploring emerging technologies, contributing to open-source
        projects, and collaborating with developers to push boundaries. My
        mission is to write clean, scalable code and deliver solutions that
        create lasting value.
      </p>

      <a
        href="#contact"
        className="px-6 py-3 bg-purple-600 dark:bg-purple-400 text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
      >
        Contact Me
      </a>
    </section>
  );
};

export default About;
