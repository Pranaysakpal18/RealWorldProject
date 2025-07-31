import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user : JSON.parse(localStorage.getItem('user')) || null,

    isAuthenticated : !!localStorage.getItem('user'),
    loading:false,
    error:'',
}






const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading =true
            state.error=""
        },
        loginSuccess:(state,action)=>{
            state.loading=false,
            state.user=action.payload
            state.isAuthenticated=true
            localStorage.setItem('user',JSON.stringify(action.payload))

        },
        loginFailure:(state,action)=>{
            state.loading=false
            state.error =action.payload
        },
        logout:(state)=>{
            state.user =null
            state.isAuthenticated=false
            localStorage.removeItem('user')

        }
    }
})

export const {loginStart,loginFailure,loginSuccess,logout} =userSlice.actions

export default userSlice.reducer