import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const {user, isAuthenticated}=useSelector(state=>state.user);



  const handleLogout =()=>{
    dispatch(logout())
    navigate('/login');
  }



  return (
    <div className='p-4 bg-blue-100 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Dashboard</h1>

        {isAuthenticated? (
          <div className='flex gap-3 items-center'>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout} className='bg-red-500 text-white px-3 py-1 rounded'>LogOut</button>
          </div>
        ) : (
          <span>Please Login</span>
        )}
      
    </div>
  )
}

export default Header
