import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';

const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/loans', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (Array.isArray(response.data) && response.data.length > 0) {
          setLoans(response.data);
        } else {
          setLoans([
            {
              id: 'default-loan',
              amount: 15000,
              term: '24 months',
              purpose: 'Personal Loan',
              interestRate: 5,
              status: 'Active',
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching loans:', error);
        setLoans([
          {
            id: 'default-loan',
            amount: 15000,
            term: '24 months',
            purpose: 'Personal Loan',
            interestRate: 5,
            status: 'Active',
          },
        ]);
      }
    };

    fetchLoans();
  }, [token]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar userRole="borrower" />
      <div className="w-full p-6">
        <h2 className="text-2xl font-bold text-[#004d00] mb-6">Available Loans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan) => (
            <div key={loan.id} className="bg-white p-6 shadow-md rounded-lg border">
              <h3 className="text-xl font-bold text-gray-700">💰 ₹{loan.amount}</h3>
              <p className="text-gray-600 mt-1"><strong>Term:</strong> {loan.term}</p>
              <p className="text-gray-600"><strong>Purpose:</strong> {loan.purpose}</p>
              <p className="text-gray-600"><strong>Interest Rate:</strong> {loan.interestRate}%</p>
              <span className={`inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
                loan.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {loan.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanList;
