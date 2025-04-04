import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../assets/login.jpg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('borrower');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        phone,
        password,
        role,
      });

      if (response.data.token) {
        toast.success('Registration successful!');
        if (role === 'admin') navigate('/admin/dashboard');
        else if (role === 'lender') navigate('/lender/dashboard');
        else navigate('/borrower/dashboard');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F7F2]">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl p-6 md:p-8 w-[90%] max-w-4xl">
        <div className="md:w-1/2 w-full flex items-center justify-center p-6">
          <img src={login} alt="Register" className="rounded-xl shadow-md object-cover w-full max-h-[350px]" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Create Account</h2>
          <form onSubmit={handleRegister} className="w-full space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="********"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="123-456-7890"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="borrower">Borrower</option>
                <option value="lender">Lender</option>
              </select>
            </div>
            <button className="w-full py-2 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200">
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/signin" className="text-green-700 text-sm hover:underline">Already have an account? Login</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
