import React from "react";
import HeroSection from "./HeroSection";
import Navbar from './Navbar';
import FeatureSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

const Home = () => {
  return (
    
    <div className="bg-[#F5F7F2]">
      <Navbar /> 
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <FeatureSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
