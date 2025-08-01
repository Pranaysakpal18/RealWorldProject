import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* 🔹 Mobile hamburger */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="md:hidden text-xl"
      >
        ☰
      </button>

      {/* 🔹 Desktop Dropdown */}
      {isAuthenticated && (
        <div className="hidden md:flex items-center gap-3 relative">
          <span onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer">
            {user?.name} ⬇️
          </span>

          {showDropdown && (
            <div className="absolute top-10 right-0 bg-white text-black rounded shadow w-32 z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* 🔹 Mobile dropdown menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white text-black p-4 flex flex-col gap-3 md:hidden z-20">
          <span>{user?.name}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
