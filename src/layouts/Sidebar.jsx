import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  // const {isLoggedIn} =useSelector(state=>state.auth);

  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <div className='h-screen w-64 fixed bg-gray-900 text-white p-2 text-2xl'>

        <h1 className='mb-10 text-3xl font-bold text-center'>My DashBoard</h1>


        <nav>

            <Link to="dashboard" className='block hover:bg-gray-700 py-2 rounded'>DashBoard</Link>
            <Link to="users" className='block hover:bg-gray-700 py-2 rounded'>Users</Link>
            <Link to="reports" className='block hover:bg-gray-700 py-2 rounded'>Report</Link>
            <Link to="settings" className='block hover:bg-gray-700 py-2 rounded'>Settings</Link>

            <Link to="job-post" className='block hover:bg-gray-700 py-2 rounded'>Job Post</Link>

            <Link to='/create-user' className='block hover:bg-gray-700 py-2 rounded'>create user</Link>

            {!isAuthenticated && (

              <Link to="/login" className='block hover:bg-gray-700 py-2 rounded'>Login</Link>
            )}
            




        </nav>
      
    </div>
  )
}

export default Sidebar
