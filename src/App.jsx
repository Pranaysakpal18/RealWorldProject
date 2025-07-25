import React from 'react'

import DashboardLayout from './layouts/DAshboardLayout'
import { Route, Router, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'



const App = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<DashboardLayout/>}>

        <Route path='users' element={<Users/>}/>

        <Route path='reports' element={<Reports/>}/>

        <Route path='settings' element={<Settings/>}/>

        </Route>




      </Routes>


      
      
      
    </div>
  )
}

export default App
