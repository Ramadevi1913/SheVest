import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderRepaymentManagement = () => {
    const [repayments, setRepayments] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchRepayments = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/repayments', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setRepayments(response.data);
            } catch (error) {
                console.error('Error fetching repayments:', error);
            }
        };

        const fetchTransactions = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/transactions', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchRepayments();
        fetchTransactions();
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar userRole="lender" />
            <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Repayment Management</h2>
                {repayments.length === 0 ? (
                    <p className="text-gray-500">No repayments found.</p>
                ) : (
                    <table className="w-full border-collapse bg-white shadow-md">
                        <thead className="bg-green-500 text-white">
                            <tr>
                                <th className="py-3 px-4">Loan ID</th>
                                <th className="py-3 px-4">Borrower</th>
                                <th className="py-3 px-4">Amount Repaid</th>
                                <th className="py-3 px-4">Repayment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repayments.map((repayment) => (
                                <tr key={repayment.id} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{repayment.loanId}</td>
                                    <td className="py-3 px-4">{repayment.borrowerName}</td>
                                    <td className="py-3 px-4">${repayment.amount}</td>
                                    <td className="py-3 px-4">{new Date(repayment.repaymentDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <h2 className="text-3xl font-bold text-green-800 mt-10 mb-6">Transaction History</h2>
                {transactions.length === 0 ? (
                    <p className="text-gray-500">No transactions found.</p>
                ) : (
                    <table className="w-full border-collapse bg-white shadow-md">
                        <thead className="bg-green-500 text-white">
                            <tr>
                                <th className="py-3 px-4">Transaction ID</th>
                                <th className="py-3 px-4">Type</th>
                                <th className="py-3 px-4">Amount</th>
                                <th className="py-3 px-4">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{transaction.id}</td>
                                    <td className="py-3 px-4">{transaction.type}</td>
                                    <td className="py-3 px-4">${transaction.amount}</td>
                                    <td className="py-3 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default LenderRepaymentManagement;