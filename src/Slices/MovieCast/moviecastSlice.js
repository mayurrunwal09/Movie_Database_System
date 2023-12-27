import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllmovieCast,AddMovieCast,UpdateMovieCast,DeleteMovieCast } from "../../BaseUrl/BaseUrl";


export const FetchAllMovieCast = createAsyncThunk('moviecast/FetchAllMovies',async()=>{
    const response = await getAllmovieCast();
    console.log(response);
    return response;
});
export const addMovieCastAsync = createAsyncThunk('moviecast/addMovieAsync', async (data) => {
    const response = await AddMovieCast(data);
    console.log(response);
    return response;
  });
  
  export const updateMovieCastAsync = createAsyncThunk('moviecast/updateMovieAsync', async (data) => {
    const response = await UpdateMovieCast(data);
    console.log(response);
    return response;
  });
  
  export const deleteMovieCastAsync = createAsyncThunk('moviecast/deleteMovieAsync', async (id) => {
    const response = await DeleteMovieCast(id);
    console.log(response);
    return response;
  });



const moviecastSlice = createSlice({
    name: 'moviecast',
    initialState:{
        moviecasts:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllMovieCast.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllMovieCast.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.moviecasts = action.payload;
            })
            .addCase(FetchAllMovieCast.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default moviecastSlice.reducer;







   
  








