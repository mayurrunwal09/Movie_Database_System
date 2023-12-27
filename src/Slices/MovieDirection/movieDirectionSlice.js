import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllmovieDirection,AddMovieDirection,deleteMovieDirection, UpdateMovieDirection1 } from "../../BaseUrl/BaseUrl";




export const FetchAllMovieDirection = createAsyncThunk('genres/FetchAllMovieDirection',async()=>{
    const response = await getAllmovieDirection();
    console.log(response);
    return response;
});
export const addMovieDirection = createAsyncThunk('moviedir/addMovieDirection', async (data) => {
    const response = await AddMovieDirection(data);
    console.log(response);
    return response;
  });
  
  export const updateMovieDirectionAsync = createAsyncThunk('moviedir/updateMovieDirection', async (data) => {
    const response = await updateMovieDirectionAsync(data);
    console.log(response);
    return response;
  });
  
  export const deleteMovieDirectionAsync = createAsyncThunk('moviedir/deleteMovieDirection', async (id) => {
    const response = await deleteMovieDirection(id);
    console.log(response);
    return response;
  });
const movieDirectionSlice = createSlice({
    name: 'moviedir',
    initialState:{
        moviedirs:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllMovieDirection.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllMovieDirection.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.moviedirs = action.payload;
            })
            .addCase(FetchAllMovieDirection.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default movieDirectionSlice.reducer;







   
  








