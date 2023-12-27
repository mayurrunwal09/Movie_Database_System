import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDirector, deleteDirector, getAllDirectors, updateDirector } from "../../BaseUrl/BaseUrl";



export const FetchAllDirectors = createAsyncThunk('director/FetchAllDirectors',async()=>{
    const response = await getAllDirectors();
    console.log(response);
    return response;
});
export const addDirectorAsync = createAsyncThunk('director/addDirectorAsyncs', async (data) => {
    const response = await addDirector(data);
    console.log(response);
    return response;
  });
  
  export const updateDirectorAsync = createAsyncThunk('director/updateDirectorAsync', async (data) => {
    const response = await updateDirector(data);
    console.log(response);
    return response;
  });
  
  export const deleteDirectorAsync = createAsyncThunk('director/deleteDirectorAsync', async (id) => {
    const response = await deleteDirector(id);
    console.log(response);
    return response;
  });
const directorSlice = createSlice({
    name: 'director',
    initialState:{
        directors:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllDirectors.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllDirectors.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.directors = action.payload;
            })
            .addCase(FetchAllDirectors.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default directorSlice.reducer;







   
  








