import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-full w-64 fixed bg-gray-900 text-white p-2 text-2xl text-center'>

        <h1 className='mb-10 text-3xl'>My DashBoard</h1>


        <div className=''>

        <ul className='mb-3'>
            <li><a href="">DashBoard</a></li>
        </ul>

        <ul className='mb-3'>
            <li><a href="">Users</a></li>
        </ul>

        <ul className='mb-3'>
            <li><a href="">Report</a></li>
        </ul>

        <ul className='mb-3'>
            <li><a href="">Settings</a></li>
        </ul>

        </div>

      
    </div>
  )
}

export default Sidebar
