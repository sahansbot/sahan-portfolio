import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import LiquidEther from "../LiquidEther";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-transparent dark:bg-transparent transition-colors duration-300 px-4"
    >
      <div className="absolute inset-0">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="absolute 2xl:top-100 top-30 flex flex-col justify-center items-center mx-auto px-auto">
            <h1 className="text-8xl font-extrabold mb-4 text-black dark:text-white">
              Hi, I'm{" "}
              <span className="text-purple-600 dark:text-purple-800">Sahan</span>
            </h1>

            {/* Animated Gradient Subtitle */}
            <TypeAnimation
              sequence={[
                "Passionate Full Stack Developer",
                2000,
                "Creative Front-End Designer",
                2000,
                "Back-End Specialist",
                2000,
                "UI/UX Enthusiast",
                2000
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              speed={50}
              className="text-4xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-800 to-indigo-500"
            />

            {/* Download Button */}
            <a
              href="/Sahan_CV.pdf"
              download="/Sahan_CV.pdf"
              className="mt-6 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
