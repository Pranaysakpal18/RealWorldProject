import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '../Redux/UserSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginStart());

    const fakeToken ="abc123tocken";

    if (
      (email === 'admin@gmail.com' && password === 'admin123') ||
      (email === 'user@gmail.com' && password === 'user123')
    ) {
      const userRole = email === 'admin@gmail.com' ? 'admin' : 'user';
    
      const userData = {
        email,
        name: userRole === 'admin' ? 'Admin Pranay' :'User Pranay',
        role:userRole,
      };

      localStorage.setItem('token',fakeToken)
      localStorage.setItem('user',JSON.stringify(userData));

      dispatch(loginSuccess(userData));
      navigate('/dashboard');
    } else {
      dispatch(loginFailure('Invalid Email or Password'));
    }
  
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-5 text-center">Login</h1>

      <form onSubmit={handleLogin} autoComplete="off">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
