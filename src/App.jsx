import React, { lazy, Suspense } from 'react'

// import DashboardLayout from './layouts/DAshboardLayout'
const DashboardLayout =lazy(()=>import('./layouts/DashboardLayout'))
import { Route, Router, Routes } from 'react-router-dom'
// import Users from './pages/Users'
const Users=lazy(()=>import('./pages/Users'))
// import Reports from './pages/Reports'
const Reports =lazy(()=>import('./pages/Reports'))
// import Settings from './pages/Settings'
const Settings =lazy(()=>import('./pages/Settings'))

// import AuthLayout from './layouts/AuthLayout'
const AuthLayout =lazy(()=>import('./layouts/AuthLayout'))


// import Login from './pages/Login'
const Login=lazy(()=>import('./pages/Login'))


// import DashBoard from './pages/DashBoard'
const DashBoard =lazy(()=>import('./pages/DashBoard'))


// import Jobpost from './pages/Jobpost'
const Jobpost =lazy(()=>import('./pages/JobPost'))


// import CreateUser from './pages/CreateUser'
const CreateUser =lazy(()=>import('./pages/CreateUser'))


import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './routes/AdminRoute'

// import Unauthorized from './pages/Unauthorized'
const Unauthorized =lazy(()=>import('./pages/Unauthorized'))



const Loader =()=> {
  return(
    <div className='text-center p-5 text-blue-500'>
    Loading...

  </div>

  )
  
}

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>

      <Routes>

        <Route path='/'
        element={
          <ProtectedRoute>
            <DashboardLayout/>
          </ProtectedRoute>
        }
        
        >
        <Route index element={<DashBoard/>}/>

         <Route path='dashboard' element={<DashBoard />} />

        <Route path='users' element={<Users/>}/>

        <Route path='reports' element={<Reports/>}/>

        <Route path='settings' element={<Settings/>}/>

        {/* <Route path='job-post' element={<Jobpost/>}/>

        <Route path='create-user' element={<CreateUser/>}/> */}

        <Route path='job-post' element={
          <AdminRoute>
            <Jobpost/>
          </AdminRoute>
        }
        
        />

        <Route path='create-user' element={
          <AdminRoute>
            <CreateUser/>
          </AdminRoute>
        }
        
        />

        <Route path='/unauthorized' element={<Unauthorized/>} />



        </Route>

        

        <Route path='/login' element={
          <AuthLayout>
            <Login/>
          </AuthLayout>

        }/>

     
      </Routes>

      </Suspense>
    </div>
  )
}

export default App
