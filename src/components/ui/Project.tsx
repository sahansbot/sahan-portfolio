import React from "react";

interface Project {
  title: string;
  description: string;
}

const ProjectsPage: React.FC = () => {
  const groupProjects: Project[] = [
    {
      title: "Software Development Group Project",
      description:
        "B2B Resource Exchange Platform for Circular Economy with online bidding system. React, NodeJS, MongoDB, RESTful APIs",
    },
    {
      title: "Web Design and Development Group Project",
      description:
        "Create Good Health and Well-Being website using HTML, CSS, and JavaScript (2024)",
    },
    {
      title: "HCI Group Project",
      description: "“ECOTRACK” App design for sustainable development 12 (2024)",
    },
  ];

  const individualProjects: Project[] = [
    {
      title: "OOP Real Time Ticketing System",
      description:
        "Simple ticketing system using Spring Boot (backend) and React (frontend) allowing users to buy tickets and vendors to add tickets. (2025)",
    },
    {
      title: "Plane Management System",
      description: "Java project",
    },
    {
      title: "Rural Hands (Smart E-Commerce Platform)",
      description:
        "Connect Sri Lankan rural sellers and buyers. Built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
    },
    {
      title: "Simple Quiz App",
      description: "Basic quiz application built with HTML, CSS, and JavaScript",
    },
    {
      title: "WattDeal",
      description:
        "B2B Resource Exchange Platform for Electrical Industry promoting circular economy. Features: marketplace, bidding system, trend analysis",
    },
    {
      title: "DiveGo (UI/UX Project)",
      description:
        "UI/UX project designed using Figma to support user engagement in marine tourism and diving center discovery initiatives",
    },
    {
      title: "Inky-Pinky-Poly Game",
      description: "Created using Python",
    },
    {
      title: "Student Progress Prediction System",
      description:
        "Python application to predict student marks, show credits, and visualize results with histogram",
    },
  ];

  const renderProjects = (projects: Project[]) => {
    return projects.map((proj) => (
      <div
        key={proj.title}
        className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-400 text-black p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:via-purple-400 hover:to-purple-400"
      >
        <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
        <p className="text-sm">{proj.description}</p>
      </div>
    ));
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent dark:bg-transparent px-6 py-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
          My <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </h2>

        {/* Group Projects */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Group Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {renderProjects(groupProjects)}
        </div>

        {/* Individual Projects */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Individual Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {renderProjects(individualProjects)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
