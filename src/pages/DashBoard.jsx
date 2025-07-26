import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaTasks } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const DashBoard = () => {

  const Stats =[
    {title:"Tasks" , value :200,icon:<FaTasks/>},
    {title:"Employees" ,value:45,icon:<FaUser/>},
    {title:"Reports" ,value:35, icon:<TbReportSearch />}
    


  ]

  const [user,setUSer]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')

  useEffect(()=>{
    setLoading(true)
    setError('')
    const fetchUsers=async()=>{
      try{
        const res= await axios.get('https://jsonplaceholder.typicode.com/users')

        setUSer(res.data)
      }catch(err){
        setError("Failed to fetch users. Please try again Later")

      }finally{
        setLoading(false)
      }

    }
    fetchUsers()
  },[])





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

    <div className='text-center mt-10'>
      <h2 className='text-xl font-semibold mb-4'>User List</h2>

     {
      loading ? (
        <p className='text-blue-500'>Loading Users</p>
      ) : error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {user.map((items)=>{
            return(
              <div className='bg-white p-4 rounded shadow' key={items.id}>
                <p className='font-bold text-lg'>{items.name}</p>
                <p>{items.email}</p>
                <p className='text-sm text-gray-500'>{items.address.city}</p>

              </div>
            )

          })}
        </div>
      )




     }




    </div>






    </div>
  )
}

export default DashBoard
