import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        businessName: '',
        businessType: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:5000/api/users/profile', user, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Profile updated successfully');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User data not found</div>;

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar userRole="borrower" />
            <div className="flex-1 flex justify-center items-center p-6">
                <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Edit Profile</h2>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {['name', 'email', 'phone', 'address', 'businessName', 'businessType'].map((field, index) => (
                            <div key={index} className="grid grid-cols-1">
                                <label className="text-sm font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={user[field] || ''}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
