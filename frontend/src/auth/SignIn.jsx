import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../assets/login.jpg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      if (response.data.token && response.data.role) {
        const token = response.data.token;
        const userRole = response.data.role;

        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);

        toast.success('Login successful!');
        if (userRole === 'admin') navigate('/admin/dashboard');
        else if (userRole === 'lender') navigate('/lender/dashboard');
        else navigate('/borrower/dashboard');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
      console.error('SignIn failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F7F2]">

      <div className="flex flex-col md:flex-row items-center bg-white backdrop-blur-lg rounded-3xl shadow-xl p-10 md:p-16 w-[95%] max-w-5xl">
        <div className="md:w-1/2 w-full flex items-center justify-center p-6">
          <img src={login} alt="Sign In" className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[400px]" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center p-8 md:p-12 bg-white rounded-3xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Welcome Back!</h2>
          <form onSubmit={handleSignIn} className="w-full space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="********"
              />
            </div>
            <button className="w-full py-3 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/register" className="text-green-700 text-sm hover:underline">Don't have an account? Register</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
