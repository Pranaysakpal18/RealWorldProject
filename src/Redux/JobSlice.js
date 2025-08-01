import { createSlice } from "@reduxjs/toolkit";
import JobPost from "../pages/Jobpost";

const jobSlice = createSlice({
    name:'job',
    initialState:{
        jobPosts:[],
    },
    reducers:{
        addJobPost :(state,action)=>{
            state.jobPosts.push(action.payload);
        }
    }
})

export const {addJobPost}=jobSlice.actions;
export default jobSlice.reducer;