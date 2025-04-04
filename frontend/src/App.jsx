import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Register from './auth/Register';
import SignIn from './auth/SignIn';

// admin
import AdminDashboard from './pages/admin/AdminDashboard';
import LoanManagement from './pages/admin/LoanManagement';
import PlatformSettings from './pages/admin/PlatformSettings';
import Report from './pages/admin/Report';
import SupportManagement from './pages/admin/SupportManagement';
import UserManagement from './pages/admin/userManagement';
import AdminNotifications from './pages/admin/AdminNotifications'

//borrower
import GovernmentSchemes from "./pages/Borrowers/GovernmentSchemes";
import BorrowerDashboard from './pages/Borrowers/Dashboard';
import UserProfile from './pages/Borrowers/BorrowerUserProfile';
import LoanList from './pages/Borrowers/LoanList';
import LoanRequestForm from './pages/Borrowers/LoanRequestForm';
import Notifications from './pages/Borrowers/Notifications';
import RegisterUser from './pages/Borrowers/RegisterUser';
import RepaymentManagement from './pages/Borrowers/RepaymentManagement';
import SupportRequests from './pages/Borrowers/SupportRequests';
import BorrowerUserManagement from './pages/Borrowers/UserManagement';
import PaystackPayment from './pages/Borrowers/PaystackPayment';

//lender
import LenderDashboard from './pages/Lenders/Dashboard';
import InvestIngLoan from './pages/Lenders/InvestIngLoan';
import LenderNotifications from './pages/Lenders/LenderNotifications';
import LenderProfile from './pages/Lenders/LenderProfile';
import LenderLoanList from './pages/Lenders/LoanList';
import LenderRepaymentManagement from './pages/Lenders/RepaymentManagement';
import LenderSupport from './pages/Lenders/Support';

const App = () => {
  useEffect(() => {
    // Adding Watson Assistant Chat script dynamically
    window.watsonAssistantChatOptions = {
      integrationID: "346cadb5-9670-49e1-bd55-ce143e94157c", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "91afbf3a-9823-4361-b18b-cf0d813490d7", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };
    
    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <Router>
      <div style={{ cursor: 'default' }} className="flex">
        <div className="flex-1 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Borrower */}
            <Route path="/borrower/dashboard" element={<BorrowerDashboard />} />
            <Route path="/borrower/government-schemes" element={<GovernmentSchemes />} />
            <Route path="/borrower/profile" element={<UserProfile />} />
            <Route path="/borrower/loan-list" element={<LoanList />} />
            <Route path="/borrower/loan-request-form" element={<LoanRequestForm />} />
            <Route path="/borrower/notifications" element={<Notifications />} />
            <Route path="/borrower/register-user" element={<RegisterUser />} />
            <Route path="/borrower/repayment" element={<RepaymentManagement />} />
            <Route path="/borrower/support-request" element={<SupportRequests />} />
            <Route path="/borrower/user-management" element={<BorrowerUserManagement />} />
            <Route path="/pay-stack-payment" element={<PaystackPayment />} />

            {/* lender */}
            <Route path="/lender/dashboard" element={<LenderDashboard />} />
            <Route path="/lender/investing-loan" element={<InvestIngLoan />} />
            <Route path="/lender/notifications" element={<LenderNotifications />} />
            <Route path="/lender/profile" element={<LenderProfile />} />
            <Route path="/lender/loan-list" element={<LenderLoanList />} />
            <Route path="/lender/repayment" element={<LenderRepaymentManagement />} />
            <Route path="/lender/support" element={<LenderSupport />} />

            {/* admin */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/loan-management" element={<LoanManagement />} />
            <Route path="/admin/platform-settings" element={<PlatformSettings />} />
            <Route path="/admin/report" element={<Report />} />
            <Route path="/admin/support-management" element={<SupportManagement />} />
            <Route path="/admin/user-management" element={<UserManagement />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
