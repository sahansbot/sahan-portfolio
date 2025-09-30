import React from "react";

const SkillsPage: React.FC = () => {
  const technicalSkills = [
    { category: "Programming Languages", items: ["Python", "Java", "C", "OOP"] },
    { category: "Frontend Development", items: ["HTML / CSS / JS", "ReactJS", "JavaFX", "Angular"] },
    { category: "Backend Development", items: ["Spring Boot", "Node.js"] },
    { category: "Databases", items: ["SQL", "MongoDB"] },
    { category: "UI Design", items: ["Figma"] },
    { category: "APIs", items: ["RESTful APIs"] },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication and Presentation",
    "Adaptability",
    "Collaborative Team Work",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-transparent dark:bg-transparent transition-colors duration-300 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
          My <span className="text-purple-600 dark:text-purple-400">Skills</span>
        </h2>

        {/* Technical Skills Grid */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {technicalSkills.map((skill) => (
            <div
              key={skill.category}
              className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-300 hover:bg-purple-100 shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"
            >
              <h4 className="text-xl font-semibold mb-4 text-black dark:text-black">
                {skill.category}
              </h4>
              <ul className="text-gray-950 dark:text-gray-950 space-y-1">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="before:content-['•'] before:text-purple-600 before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft Skills Grid */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Soft Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {softSkills.map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {skill}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
