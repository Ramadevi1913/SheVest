import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUser, FaEnvelope, FaDollarSign, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ userRole }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`fixed left-0 top-0 h-screen bg-[#F5F7F2] text-white shadow-xl transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Sidebar Toggle Button */}
      <div className="flex justify-between items-center p-4">
        <h1 className={`text-2xl font-bold transition-all ${isCollapsed ? 'hidden' : 'block'}`}>AppName</h1>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
          {isCollapsed ? <FaBars size={22} /> : <FaTimes size={22} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-6">
        <ul className="space-y-3">
          {userRole === 'admin' && (
            <>
              <SidebarItem to="/admin/dashboard" icon={<FaHome />} label="Dashboard" isCollapsed={isCollapsed} />
              <SidebarItem to="/admin/user-management" icon={<FaUser />} label="Users" isCollapsed={isCollapsed} />
              <SidebarItem to="/admin/loan-management" icon={<FaTasks />} label="Loan Management" isCollapsed={isCollapsed} />
              <SidebarItem to="/admin/report" icon={<FaChartBar />} label="Reports" isCollapsed={isCollapsed} />
              <SidebarItem to="/admin/platform-settings" icon={<FaChartBar />} label="Settings" isCollapsed={isCollapsed} />
              <SidebarItem to="/admin/support-management" icon={<FaEnvelope />} label="Support" isCollapsed={isCollapsed} />
            </>
          )}

          {userRole === 'borrower' && (
            <>
              <SidebarItem to="/borrower/dashboard" icon={<FaHome />} label="Dashboard" isCollapsed={isCollapsed} />
              <SidebarItem to="/borrower/loan-request-form" icon={<FaTasks />} label="Loan Request" isCollapsed={isCollapsed} />
              <SidebarItem to="/borrower/profile" icon={<FaUser />} label="Profile" isCollapsed={isCollapsed} />
              <SidebarItem to="/borrower/notifications" icon={<FaEnvelope />} label="Notifications" isCollapsed={isCollapsed} />
              <SidebarItem to="/borrower/loan-list" icon={<FaDollarSign />} label="My Loans" isCollapsed={isCollapsed} />
            </>
          )}

          {userRole === 'lender' && (
            <>
              <SidebarItem to="/lender/dashboard" icon={<FaHome />} label="Dashboard" isCollapsed={isCollapsed} />
              <SidebarItem to="/lender/investing-loan" icon={<FaDollarSign />} label="My Investments" isCollapsed={isCollapsed} />
              <SidebarItem to="/lender/notifications" icon={<FaEnvelope />} label="Notifications" isCollapsed={isCollapsed} />
              <SidebarItem to="/lender/profile" icon={<FaUser />} label="Profile" isCollapsed={isCollapsed} />
              <SidebarItem to="/lender/loan-list" icon={<FaTasks />} label="Loan List" isCollapsed={isCollapsed} />
              <SidebarItem to="/lender/repayment" icon={<FaDollarSign />} label="Repayments" isCollapsed={isCollapsed} />
              <SidebarItem to="/lender/support" icon={<FaEnvelope />} label="Support Requests" isCollapsed={isCollapsed} />
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ to, icon, label, isCollapsed }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center p-3 mx-2 rounded-lg bg-[#F5F7F2] transition-all duration-300 hover:bg-[#003D1F] hover:shadow-md"
      >
        <span className="text-xl">{icon}</span>
        <span className={`ml-3 text-base transition-all duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
