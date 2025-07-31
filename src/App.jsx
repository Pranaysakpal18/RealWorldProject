import React from 'react'

import DashboardLayout from './layouts/DAshboardLayout'
import { Route, Router, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import Jobpost from './pages/Jobpost'
import CreateUser from './pages/CreateUser'



const App = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<DashboardLayout/>}>
        <Route index element={<DashBoard/>}/>

         <Route path='dashboard' element={<DashBoard />} />

        <Route path='users' element={<Users/>}/>

        <Route path='reports' element={<Reports/>}/>

        <Route path='settings' element={<Settings/>}/>

        <Route path='job-post' element={<Jobpost/>}/>

        <Route path='/create-user' element={<CreateUser/>}/>

        </Route>

        <Route path='/login' element={
          <AuthLayout>
            <Login/>
          </AuthLayout>

        }/>


        

      </Routes>


      
      
      
    </div>
  )
}

export default App
