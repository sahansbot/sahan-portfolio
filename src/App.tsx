import React from "react";
import Navbar from "./components/navbar/navItem";
import Home from "./components/ui/home";
import Aboutus from "./components/ui/Aboutus";
import Skills from "./components/ui/Skills";
import Project from "./components/ui/Project";
import Contactus from "./components/ui/Contactus";
import Footer from "./components/ui/Footer";
import LiquidEther from "./components/LiquidEther"; 

const App: React.FC = () => {
  return (
    <div className="font-sans relative z-10 bg-transparent">
      {/* Global Background Animation */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
  mouseForce={10}
  cursorSize={60}
  isViscous={false}
  viscous={20}
  iterationsViscous={16}
  iterationsPoisson={16}
  resolution={0.25}
  isBounce={false}
  autoDemo={true}
  autoSpeed={0.8}
  autoIntensity={1.5}
  takeoverDuration={0.25}
  autoResumeDelay={3000}
  autoRampDuration={0.6}
/>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Aboutus />
        <Skills />
        <Project />
        <Contactus />
        <Footer />
      </div>
    </div>
  );
};

export default App;
