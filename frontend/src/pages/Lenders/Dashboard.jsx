import React from "react";
import Sidebar from "../Lenders/LenderSidebar";
import { DollarSign, Mail, Briefcase, Users, Globe, TrendingUp } from "lucide-react";

const LenderDashboard = () => {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#f6fff6' }}>
      <Sidebar userRole="lender" />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-green-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Total Lent Amount", value: "$10,000", color: "bg-blue-500", icon: DollarSign },
            { title: "New Messages", value: "3", color: "bg-green-500", icon: Mail },
            { title: "Loan Requests", value: "7", color: "bg-purple-500", icon: Briefcase },
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

        <h2 className="text-xl font-semibold text-gray-900 mt-12 text-center">Who Helps Us Lend Money?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { 
              title: "Small Loan Groups", 
              description: "Community-based lenders helping people with small, accessible loans.",
              details: "They support small businesses, farmers, and individuals. Quick and flexible loan options with low barriers to entry.",
              icon: Users 
            },
            { 
              title: "Member-Owned Lenders", 
              description: "Financial cooperatives where members lend to each other.",
              details: "Lower interest rates, flexible repayment plans, and community-driven financial solutions.",
              icon: Globe 
            },
            { 
              title: "Online Loan Platforms", 
              description: "Fast, paperless loans through digital platforms.",
              details: "Easy applications, instant approvals, and seamless transactions for both lenders and borrowers.",
              icon: Mail 
            },
            { 
              title: "Local Business Funders", 
              description: "Funding for small businesses to grow and thrive.",
              details: "Loans for hiring, equipment, and expansion, with personalized support and guidance.",
              icon: Briefcase 
            },
            { 
              title: "Venture Capital Investors", 
              description: "Investors who fund high-growth startups.",
              details: "They offer money, mentorship, and networking opportunities to businesses with strong potential.",
              icon: TrendingUp 
            },
          ].map((lender, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-2 bg-blue-500 text-white rounded-full w-fit">
                <lender.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mt-3">{lender.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{lender.description}</p>
              <p className="text-xs text-gray-500 mt-1">{lender.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;
