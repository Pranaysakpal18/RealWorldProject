import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/UserSlice'
import userFormReducer from '../Redux/UserFormSlice'
import jobReducer from '../Redux/JobSlice'


const store =configureStore({
    reducer:{
        user:userReducer,
        userForm:userFormReducer,
        job:jobReducer,
        
    }
})

export default store;