import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DashBoard from '../pages/DashBoard'

const DashboardLayout = () => {
  return (
    <div className='flex h-screen'>

        
            <Sidebar/>

            <div className='flex-1 flex flex-col ml-64 min-h-screen bg-gray-100'>
                <Header/>

                <main className='p-4'>
                    <DashBoard/>
                </main>
            </div>
        </div>
      
    
  )
}

export default DashboardLayout
