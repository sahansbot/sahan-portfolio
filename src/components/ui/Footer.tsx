import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent dark:bg-transparent text-gray-300 dark:text-gray-900 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">

        {/* Logo / Name + Tagline */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-600">
            Sahan Sudeepa
          </div>
          <p className="text-sm text-black dark:text-gray-400 mt-1 max-w-xs">
            Full Stack Developer passionate about creating beautiful, <br />functional digital experiences that make a difference.
          </p>
        </div>

        {/* Quick Navigation Links in 2 Columns */}
        <div className="grid grid-cols-2 gap-4 font-semibold text-sm justify-items-center md:justify-items-start">
          <a href="#home" className="hover:text-purple-600 text-black dark:text-gray-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-purple-600  text-black dark:text-gray-400 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-purple-600 text-black dark:text-gray-400 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-purple-600 text-black dark:text-gray-400 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-purple-600 text-black dark:text-gray-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center md:justify-end text-2xl text-black dark:text-white mt-6 md:mt-0">
          <a href="https://github.com/sahansbot" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="http://linkedin.com/in/sahan-gunawardhana-961256302" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/sahan.sudeepa.39" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/shenuu._x_?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://wa.me/94766428635" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors duration-300">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-black dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sahan Sudeepa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
