import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Borrowers/BorrowerSidebar";

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/borrower-notification/${userId}`
        );
        setNotifications(response.data);
      } catch (error) {
        // Removed error toast
      }
    };

    fetchNotifications();
  }, [userId]);

  const handleMarkAsRead = async (notificationId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/borrower-notification/${notificationId}`,
        { status: "read" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotifications(
        notifications.map((n) =>
          n.id === notificationId ? { ...n, status: "read" } : n
        )
      );
      toast.success("Notification marked as read");
    } catch (error) {
      // Removed error toast
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar userRole="borrower" />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-[#004d00] mb-6">
          Your Notifications
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center">No notifications yet.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-4 flex justify-between items-center rounded-lg transition-all ${
                    notification.status === "read"
                      ? "bg-gray-200 text-gray-600"
                      : "bg-[#E3FCEF] text-[#057A55]"
                  }`}
                >
                  <span className="flex-1">{notification.message}</span>
                  {notification.status !== "read" && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="ml-4 px-4 py-1 text-sm font-medium text-white bg-[#057A55] rounded-md shadow-md hover:bg-[#056A4A] transition-all"
                    >
                      Mark as Read
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Notifications;
