import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-black text-purple-600 dark:text-purple-600 px-6 py-4 flex justify-between items-center shadow-md transition-colors duration-300">
      {/* Animated Name */}
      <h1 className="text-2xl font-bold animate-shine">Sahan Sudeepa</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="relative group text-black dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-600 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 dark:bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle (Desktop) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:block ml-6 px-4 py-2 rounded-md bg-black text-white dark:bg-yellow-400 dark:text-black transition-transform transform hover:scale-105"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        {/* Dark mode toggle mobile */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 rounded-md bg-black text-white dark:bg-yellow-400 dark:text-black transition-transform transform hover:scale-105"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-black dark:text-gray-300"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu + Blur Background */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background Overlay with Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Dropdown */}
          <div className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-black flex flex-col items-center gap-6 py-6 shadow-lg z-50">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-black dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-600 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
