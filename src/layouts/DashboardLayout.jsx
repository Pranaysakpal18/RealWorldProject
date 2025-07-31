import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DashboardLayout = () => {
  // const{isLoggedIn} =useSelector(state =>state.auth);
  const {isAuthenticated} =useSelector(state =>state.user);



  if(!isAuthenticated){
    return <Navigate to="/login"/>
  }



  return (
    <div className='flex h-screen'>

        
            <Sidebar/>

            <div className='flex-1 flex flex-col ml-64 min-h-screen bg-gray-100 overflow-y-auto'>
                <Header/>

                <main className='p-4'>

                    <Outlet/>
                </main>
            </div>
        </div>
      
    
  )
}

export default DashboardLayout
