import React from 'react'
import { FaTasks } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const DashBoard = () => {

  const Stats =[
    {title:"Tasks" , value :200,icon:<FaTasks/>},
    {title:"Employees" ,value:45,icon:<FaUser/>},
    {title:"Reports" ,value:35, icon:<TbReportSearch />}
    


  ]





  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>DashBoard OverView</h1>

    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Stats.map((item,index)=>{
        return(
          <div className='border-2 bg-white shadow-md p-6 rounded-md flex flex-col items-center gap-6' key={index}>
            {/* <div>{item.icon}</div> */}
            <div className='flex items-center text-2xl font-bold gap-3'>
              <span>{item.icon}</span>{item.title}
              </div>
            <div className='text-xl font-semibold'>{item.value}</div>

          </div>
        )
      })}
      
    </div>
    </div>
  )
}

export default DashBoard
