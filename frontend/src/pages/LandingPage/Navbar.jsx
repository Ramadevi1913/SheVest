import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVGLOGO from "../../assets/SVGLOGO.jpeg";
import { FaGlobe } from "react-icons/fa";  // Importing Globe icon

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Implement logic to change the app's language here.
    setDropdownOpen(false);  // Close dropdown after selection
  };

  return (
    <nav className="bg-[#050606] opacity-90 text-white fixed w-full z-10 shadow-lg">
      <div className="flex justify-between items-center max-w-full px-8 md:px-16 py-4">
        
        {/* Logo Section */}
        <div>
          <Link to="/" className="hover:opacity-85 transition-all duration-300">
            <div className="w-[200px] h-[72px] overflow-hidden">
              <img
                src={SVGLOGO}
                alt="Logo"
                className="w-[260px] h-[90px] object-cover object-center -mt-2"
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg mr-16 font-medium tracking-wide">
          <Link to="/" onClick={() => scrollToSection("hero")} className="hover:text-[#2E3736] transition-all duration-300">
            Home
          </Link>
          <Link to="/" onClick={() => scrollToSection("services")} className="hover:text-[#2E3736] transition-all duration-300">
            Services
          </Link>
          <Link to="/" onClick={() => scrollToSection("about")} className="hover:text-[#2E3736] transition-all duration-300">
            About
          </Link>
          <Link to="/" onClick={() => scrollToSection("contact")} className="hover:text-[#2E3736] transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Language Dropdown Button */}
        <div className="relative flex items-center">
          {/* Language Dropdown Button (English | Bhasha Badaliye) */}
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-sm text-white flex items-center mr-4 p-2 hover:bg-[#2E3736] rounded"
          >
            <FaGlobe className="text-2xs mr-2" /> {/* Globe icon */}
            {language} <span className="ml-2 text-2xs">| भाषा बदलिए</span>
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-[#F5F7F2] text-black p-2 rounded shadow-lg">
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => handleLanguageChange("English")} className="hover:text-[#2E3736] transition-all duration-300">
                    English
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange("मराठी")} className="hover:text-[#2E3736] transition-all duration-300">
                    मराठी
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange("ਪੰਜਾਬੀ")} className="hover:text-[#2E3736] transition-all duration-300">
                    ਪੰਜਾਬੀ
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange("தமிழ்")} className="hover:text-[#2E3736] transition-all duration-300">
                    தமிழ்
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
