import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const userId = 10; // Replace with dynamic user ID

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    `http://localhost:5000/api/borrower-notification/${userId}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };
        fetchNotifications();
    }, []);

    const markAsRead = async (notificationId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(
                `http://localhost:5000/api/borrower-notification/${notificationId}`,
                { status: 'read' },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNotifications((prev) =>
                prev.map((n) => (n.id === notificationId ? { ...n, status: 'read' } : n))
            );
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar userRole="lender" />
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Notifications</h2>
                {notifications.length === 0 ? (
                    <p className="text-gray-500">No new notifications.</p>
                ) : (
                    <ul className="space-y-4">
                        {notifications.map((notification) => (
                            <li
                                key={notification.id}
                                className={`p-4 border rounded-lg shadow-md transition-all duration-300 ${
                                    notification.status === 'read' 
                                        ? 'bg-green-50 text-gray-500' 
                                        : 'bg-white hover:bg-green-50'
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold text-green-900">{notification.message}</p>
                                        <span className="text-sm text-gray-500">
                                            {new Date(notification.createdAt).toLocaleString()}
                                        </span>
                                    </div>
                                    {notification.status !== 'read' && (
                                        <button
                                            onClick={() => markAsRead(notification.id)}
                                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                        >
                                            Mark as Read
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LenderNotifications;
