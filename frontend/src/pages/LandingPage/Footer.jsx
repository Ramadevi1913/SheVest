import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#1D2B36] to-[#2F3E2E] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h3 className="text-2xl font-semibold text-[#D9E3DA] mb-3">
          Empowering women entrepreneurs
        </h3>
        <p className="text-[#C2D1BD] mb-6">
          Secure your financial future with trusted loan solutions.
        </p>

        {/* Register & Sign In Buttons */}
        <div className="space-x-4 mb-6">
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition">
              Register Now
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg transition">
              Sign In
            </button>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="https://facebook.com" className="text-[#C2D1BD] hover:text-white transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-[#C2D1BD] hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="text-[#C2D1BD] hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="text-sm text-[#C2D1BD]">
          © {new Date().getFullYear()} Loan Management System for Women Entrepreneurs. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
