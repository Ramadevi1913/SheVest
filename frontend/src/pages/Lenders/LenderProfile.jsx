import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from '../Lenders/LenderSidebar';

const LenderProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    bio: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/lender-profile');
        setProfile(response.data);
      } catch (error) {
        toast.error('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/lender-profile', profile);
      toast.success('Profile updated successfully');
      setProfile(response.data);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar userRole="lender" />

      {/* Profile Form Section */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-green-800 mb-4">Edit Profile</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                rows="2"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LenderProfile;
