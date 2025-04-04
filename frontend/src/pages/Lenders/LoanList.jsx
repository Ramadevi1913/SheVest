import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderLoanList = () => {
    const [loans, setLoans] = useState([]);
    const [filteredLoans, setFilteredLoans] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTerm, setSelectedTerm] = useState('');
    const [riskLevel, setRiskLevel] = useState('');

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const token = localStorage.getItem('token'); 
                const response = await axios.get('http://localhost:5000/api/loans', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setLoans(response.data);
                setFilteredLoans(response.data);
            } catch (error) {
                console.error('Error fetching loans:', error);
            }
        };

        fetchLoans();
    }, []);

    useEffect(() => {
        const filterLoans = () => {
            let filtered = loans.filter(loan => 
                loan.amount.toString().includes(searchTerm) &&
                (selectedTerm === '' || loan.term === selectedTerm) &&
                (riskLevel === '' || loan.riskLevel === riskLevel)
            );
            setFilteredLoans(filtered);
        };

        filterLoans();
    }, [searchTerm, selectedTerm, riskLevel, loans]);

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar userRole="lender" />
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">Browse Loans</h2>

                {/* Search & Filters */}
                <div className="mb-6 flex flex-wrap justify-center gap-4">
                    <input
                        type="text"
                        placeholder="Search by amount"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition outline-none"
                    />
                    <select
                        value={selectedTerm}
                        onChange={(e) => setSelectedTerm(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition outline-none"
                    >
                        <option value="">All Terms</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                    </select>
                    <select
                        value={riskLevel}
                        onChange={(e) => setRiskLevel(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition outline-none"
                    >
                        <option value="">All Risk Levels</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                {/* Loan Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLoans.map((loan) => (
                        <div 
                            key={loan.id} 
                            className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105 border-t-4 border-green-500"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-green-700">Loan Amount: ${loan.amount}</h3>
                            <p className="mb-1"><strong>Interest Rate:</strong> {loan.interestRate}%</p>
                            <p className="mb-1"><strong>Term:</strong> {loan.term} months</p>
                            <p className="mb-1"><strong>Purpose:</strong> {loan.purpose}</p>
                            <p className="mb-1"><strong>Borrower:</strong> {loan.borrowerName}</p>
                            <p className="mb-1">
                                <strong>Risk Level:</strong> 
                                <span className={`font-bold ml-1 ${loan.riskLevel === 'High' ? 'text-red-600' : loan.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>
                                    {loan.riskLevel}
                                </span>
                            </p>
                            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300 ease-in-out">
                                Fund Loan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LenderLoanList;
