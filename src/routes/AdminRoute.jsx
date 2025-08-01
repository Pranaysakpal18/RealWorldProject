import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const {user, isAuthenticated} =useSelector((state)=>state.user)

    if(!isAuthenticated){
        return <Navigate to='/login'/>
    }

    else if(user.role !== "admin"){
        return <Navigate to="/unauthorized"/>
    }

    return children;


}

export default AdminRoute
