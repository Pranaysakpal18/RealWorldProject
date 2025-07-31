import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitUserFormToAPI=createAsyncThunk(
    'userForm/submitUserFormToAPI',

    async (formData , thunkAPI)=>{
        try{
            const response = await fetch ("https://jsonplaceholder.typicode.com/users" , {
                method:'POST',
                body:JSON.stringify(formData),

                headers:{
                    'content-type':'application/json; charset=UTF-8',
                }
            });

            if(!response.ok){
                throw new Error('Failed to submit user');
            }

            const data =await response.json();

            return data;

        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }

    

);

const userFormSlice=createSlice({
    name:"userForm",
    initialState:{
        users:[],
        loading:false,
        error:'',
        

    },
    reducers:{
        submitUserForm:(state,action)=>{
            state.users.push(action.payload);
        },
    },
    extraReducers: (builder) => {
    builder
      .addCase(submitUserFormToAPI.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(submitUserFormToAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // API response add ho gaya
      })
      .addCase(submitUserFormToAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
    }

});

export const {submitUserForm} =userFormSlice.actions;

export default userFormSlice.reducer;