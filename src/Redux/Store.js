import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/UserSlice'
import userFormReducer from '../Redux/UserFormSlice'


const store =configureStore({
    reducer:{
        user:userReducer,
        userForm:userFormReducer,
        
    }
})

export default store;