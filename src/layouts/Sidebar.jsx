import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen w-64 fixed bg-gray-900 text-white p-2 text-2xl'>

        <h1 className='mb-10 text-3xl font-bold text-center'>My DashBoard</h1>


        <nav>

            <a href="" className='block hover:bg-gray-700 py-2 rounded'>DashBoard</a>
            <a href="" className='block hover:bg-gray-700 py-2 rounded'>Users</a>
            <a href="" className='block hover:bg-gray-700 py-2 rounded'>Report</a>
            <a href="" className='block hover:bg-gray-700 py-2 rounded'>Settings</a>




        </nav>
      
    </div>
  )
}

export default Sidebar
