import React from 'react'
import { FaTasks } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const DashBoard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        <div className='bg-white shadow-md p-6 rounded-md flex items-center gap-7'><span className='text-5xl'><FaTasks/></span>Tasks</div>
        <div className='bg-white shadow-md p-6 rounded-md flex items-center gap-7'><span className='text-5xl'><FaUser/></span>Employees</div>
        <div className='bg-white shadow-md p-6 rounded-md flex items-center gap-7'><span className='text-5xl'><TbReportSearch /></span>Reports</div>
      
    </div>
  )
}

export default DashBoard
