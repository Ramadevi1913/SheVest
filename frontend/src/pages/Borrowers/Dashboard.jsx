import React from "react";
import Sidebar from "../Borrowers/BorrowerSidebar";
import { DollarSign, Mail, Briefcase, Users, Globe, TrendingUp } from "lucide-react";

const BorrowerDashboard = () => {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#f6fff6' }}>
      <Sidebar userRole="borrower" />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-green-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Total Borrowed Amount", value: "$5,000", color: "bg-blue-500", icon: DollarSign },
            { title: "Pending Approvals", value: "2", color: "bg-green-500", icon: Mail },
            { title: "Active Loans", value: "3", color: "bg-purple-500", icon: Briefcase },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4 transition-transform transform hover:scale-105"
            >
              <div className={`p-2 rounded-full text-white ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-gray-700">{item.title}</h3>
                <p className="text-xl font-bold text-gray-800 mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-12 text-center">Who Can You Borrow From?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { 
              title: "Microfinance Institutions", 
              description: "Small-scale loans for individuals and businesses.",
              details: "Flexible repayment plans with lower interest rates for eligible borrowers.",
              icon: Users 
            },
            { 
              title: "Peer-to-Peer Lending", 
              description: "Borrow directly from individual investors.",
              details: "Lower fees and competitive interest rates compared to traditional banks.",
              icon: Globe 
            },
            { 
              title: "Traditional Banks", 
              description: "Reliable loans from well-established banks.",
              details: "Higher loan limits, structured repayment plans, and long-term support.",
              icon: Briefcase 
            },
            { 
              title: "Credit Unions", 
              description: "Community-driven financial institutions.",
              details: "Member-based lending with personalized interest rates and flexible terms.",
              icon: Mail 
            },
            { 
              title: "Government Loan Programs", 
              description: "Specialized loans backed by government initiatives.",
              details: "Low-interest loans for students, small businesses, and startups.",
              icon: TrendingUp 
            },
          ].map((source, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-2 bg-blue-500 text-white rounded-full w-fit">
                <source.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mt-3">{source.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{source.description}</p>
              <p className="text-xs text-gray-500 mt-1">{source.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashboard;
