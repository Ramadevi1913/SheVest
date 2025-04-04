import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';

const RepaymentManagement = () => {
  const [repayments, setRepayments] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [loanId, setLoanId] = useState('');
  const [borrowerId, setBorrowerId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRepaymentHistory();
  }, []);

  const fetchRepaymentHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/borrower-repayment/${borrowerId}`);
      setRepayments(response.data);
    } catch (error) {
      console.error('Error fetching repayment history:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar userRole="borrower" />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-[#004d00] mb-6">Repayment Management</h2>

        {/* Repayment Form */}
        <form className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make a Repayment</h3>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="amount" className="block text-gray-700 font-medium">Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label htmlFor="loanId" className="block text-gray-700 font-medium">Loan ID</label>
              <input
                type="number"
                id="loanId"
                value={loanId}
                onChange={(e) => setLoanId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="borrowerId" className="block text-gray-700 font-medium">Borrower ID</label>
              <input
                type="number"
                id="borrowerId"
                value={borrowerId}
                onChange={(e) => setBorrowerId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end mt-6">
            <Link
              to="/pay-stack-payment"
              className="ml-4 bg-green-800 opacity-95 hover:opacity-100 text-white font-semibold px-4 py-2 rounded-xl shadow"
            >
              Pay
            </Link>
          </div>
        </form>

        {/* Repayment History */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Repayment History</h3>
          <table className="w-full bg-white shadow-md rounded-lg border">
            <thead className="bg-[#004d00] text-white">
              <tr>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Loan ID</th>
                <th className="py-2 px-4">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {repayments.map((repayment) => (
                <tr key={repayment.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{repayment.amount}</td>
                  <td className="py-2 px-4">{repayment.date}</td>
                  <td className="py-2 px-4">{repayment.loanId}</td>
                  <td className="py-2 px-4">{repayment.remainingBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RepaymentManagement;



