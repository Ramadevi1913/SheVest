import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Borrowers/BorrowerSidebar";
import ReCAPTCHA from "react-google-recaptcha";
import { FaInfoCircle } from "react-icons/fa"; // Importing the Info Circle Icon

const LoanRequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    amount: "",
    term: "",
    purpose: "",
    interestRate: "",
    preferredRepaymentType: "",
    employmentStatus: "",
    annualIncome: "",
    existingDebt: "",
    typeOfLoan: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("User not authenticated. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/borrower-loan",
        {
          ...formData,
          recaptchaToken,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Loan request submitted successfully!");

    } catch (error) {
      console.error("Error submitting loan request:", error);
      alert("Error submitting loan request.");
    }
  };

  return (
    <div className="flex h-screen bg-green-100">
      {/* Sidebar */}
      <Sidebar userRole="borrower" />

      {/* Form Container */}
      <div className="flex flex-col justify-center items-center w-full p-6 mb-6">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-[#004d00] mb-6 text-center ">
            Request a Loan
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto p-2">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Type of Loan */}
            <div>
              <label className="block text-gray-700">Type of Loan</label>
              <select
                name="typeOfLoan"
                value={formData.typeOfLoan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Loan Type</option>
                <option value="Startup Loan">Startup Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Education Loan">Education Loan</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-gray-700">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Employment Status */}
            <div>
              <label className="block text-gray-700">Employment Status</label>
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
              </select>
            </div>

            {/* Annual Income */}
            <div>
              <label className="block text-gray-700">Annual Income</label>
              <input
                type="number"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Existing Debt */}
            <div>
              <label className="block text-gray-700">Existing Debt (if any)</label>
              <input
                type="text"
                name="existingDebt"
                value={formData.existingDebt}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-gray-700">Interest Rate (%)</label>
              <select
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Interest Rate</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
              </select>
            </div>

            {/* Preferred Repayment Type */}
            <div>
              <label className="block text-gray-700">Preferred Repayment Type</label>
              <select
                name="preferredRepaymentType"
                value={formData.preferredRepaymentType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Repayment Type</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            {/* Recaptcha */}
            <div className="flex justify-center">
              <ReCAPTCHA sitekey="6LcAWu0qAAAAAFPwODZ089Y9Nncusyt-WNsetaeW" onChange={handleRecaptcha} />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
              Submit Request
            </button>
          </form>
        </div>

        {/* Disclaimer about additional charges */}
        <p className="mt-auto text-center text-xs text-gray-400 py-2 flex items-center justify-center space-x-2">
        <FaInfoCircle className="text-yellow-500" />
        <span>Please note that we charge a fee for requesting a loan through our portal.</span>
      </p>

      </div>
    </div>
  );
};

export default LoanRequestForm;
