import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderSupport = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [faqs, setFaqs] = useState([
  { 
    question: 'How do I track my repayments?', 
    answer: 'You can track your repayments through the Repayment Management section. Here you can view your repayment schedule and history.', 
    open: false 
  },
  { 
  question: 'How do I contact support?', 
  answer: 'You can contact support by submitting a request through the form on this page. Alternatively, you can reach us at our support number: +1 (800) 123-4567 or via email at support@example.com.', 
  open: false 
},
]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/support', { message });
            setStatus({ type: 'success', text: 'Your message has been sent successfully.' });
            setMessage('');
        } catch (error) {
            setStatus({ type: 'error', text: 'Failed to send your message. Please try again.' });
        }
    };

    const toggleFAQ = (index) => {
        setFaqs((prevFaqs) => prevFaqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
    };

    return (
        <div className="flex">
            <Sidebar userRole="lender" />
            <div className="container mx-auto p-6">
                <h2 className="text-3xl text-green-800 font-bold mb-6">Support</h2>
                
                {/* FAQ Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4 border-b pb-2">
                                <button
                                    className="w-full text-left font-semibold text-lg flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    <span>{faq.open ? '▲' : '▼'}</span>
                                </button>
                                {faq.open && <p className="text-gray-700 mt-2">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Form */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Submit a Support Request</h3>
                    {status && (
                        <p className={`mb-4 p-2 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {status.text}
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-green-500 focus:border-green-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LenderSupport;
