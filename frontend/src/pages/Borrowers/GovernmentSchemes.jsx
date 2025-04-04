import React, { useState } from "react";
import { FaIndustry, FaHandshake, FaUsers, FaTimes, FaInfoCircle } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom"; // Importing useNavigate

const GovernmentSchemes = () => {
  const [showSchemes, setShowSchemes] = useState(true); // State to toggle visibility of schemes
  const navigate = useNavigate(); // Hook for navigation

  const schemes = [
    {
      id: 1,
      name: "Startup India Women Entrepreneurship Program",
      url: "https://www.startupindia.gov.in/content/sih/en/women_entrepreneurs.html",
      icon: <FaUsers className="text-3xl text-green-600" />,
    },
    {
      id: 2,
      name: "Mudra Yojana Scheme",
      url: "https://www.mudra.org.in/",
      icon: <FaIndustry className="text-3xl text-green-600" />,
    },
    {
      id: 3,
      name: "Annapurna Scheme",
      url: "https://www.india.gov.in/annapurna-scheme",
      icon: <FaHandshake className="text-3xl text-green-600" />,
    },
  ];

  const handleExit = () => {
    navigate("/borrower/dashboard"); // Navigate to the landing page (root route)
  };

  return (
    <>
      {showSchemes && (
        <div className="min-h-screen bg-green-50 p-6 relative flex flex-col">
          <button
            onClick={handleExit}
            className="absolute top-4 right-4 text-3xl text-red-600 hover:text-red-800"
          >
            <FaTimes />
          </button>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Government Schemes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {schemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    {scheme.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{scheme.name}</h3>
                  <a
                    href={scheme.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline text-lg"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* The note at the bottom with an icon */}
          <p className="mt-auto text-center text-sm text-gray-600 py-4 flex items-center justify-center space-x-2">
            <FaInfoCircle className="text-yellow-500" />
            <span>Please note that we charge an additional fee for applying through our portal.</span>
          </p>
        </div>
      )}
    </>
  );
};

export default GovernmentSchemes;
