import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaUser,
  FaEnvelope,
  FaDollarSign,
  FaChartBar,
  FaArrowLeft,
} from "react-icons/fa";

const Sidebar = ({ userRole, unreadCount }) => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const [showTooltip, setShowTooltip] = useState(false);

  const navItems = [
    { to: "/lender/dashboard", label: "Dashboard", icon: <FaHome /> },
    { to: "/lender/investing-loan", label: "My Investments", icon: <FaDollarSign /> },
    { to: "/lender/loan-list", label: "Browse Loans", icon: <FaTasks /> },
    { to: "/lender/repayment", label: "Repayments", icon: <FaChartBar /> },
    { to: "/lender/profile", label: "Profile", icon: <FaUser /> },
    { to: "/lender/support", label: "Support Requests", icon: <FaEnvelope /> },
  ];

  // Show tooltip on hover
  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  // Handle Exit Button Click and show confirmation
  const handleExitClick = () => {
    const isConfirmed = window.confirm("Do you want to save changes before exiting?");
    if (isConfirmed) {
      // Implement your save changes logic here
      alert("Changes saved!");
      navigate("/");
    } else {
      // Navigate to the landing page without saving
      navigate("/");
    }
  };

  return (
    <div className="bg-[#10291E] text-white w-60 min-h-screen flex flex-col shadow-lg relative">
      {/* Branding */}
      <div className="flex items-center justify-center h-16 bg-[#0B1E14] shadow-md opacity-90">
        <h1 className="text-xl font-semibold">Welcome!</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          {userRole === "lender" &&
            navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className={`flex items-center p-3 rounded-lg mx-3 transition-all duration-300
                    ${
                      location.pathname === item.to
                        ? "bg-[#183D2B] opacity-90"
                        : "hover:bg-[#1F4A33] opacity-80"
                    }
                  `}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      {/* Exit Button with Tooltip */}
      <div
        className="absolute bottom-4 left-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleExitClick}
          className="flex items-center justify-center p-3 rounded-full bg-[#183D2B] text-white hover:bg-[#1F4A33] transition-all duration-300"
        >
          <FaArrowLeft className="text-xl" />
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div
            className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-[#333] text-white text-xs p-2 rounded-md shadow-lg z-10"
          >
            Exit
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
