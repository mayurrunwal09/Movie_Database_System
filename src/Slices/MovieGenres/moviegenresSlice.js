import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddMovieGenres, deleteMovieGenres, getAllMovieGenres, updateMovieGenres } from "../../BaseUrl/BaseUrl";



export const FetchAllMoviegenres = createAsyncThunk('moviegenres/FetchAllMoviegenres',async()=>{
    const response = await getAllMovieGenres();
    console.log(response);
    return response;
});
export const addMoviegenresAsync = createAsyncThunk('moviegenres/addMovieAsync', async (data) => {
    const response = await AddMovieGenres(data);
    console.log(response);
    return response;
  });
  
  export const updateMoviegenresAsync = createAsyncThunk('moviegenres/updateMovieAsync', async (data) => {
    const response = await updateMovieGenres(data);
    console.log(response);
    return response;
  });
  
  export const deleteMoviegenresAsync = createAsyncThunk('moviegenres/deleteMovieAsync', async (id) => {
    const response = await deleteMovieGenres(id);
    console.log(response);
    return response;
  });



const moviegenresSlice = createSlice({
    name: 'moviegenres',
    initialState:{
        moviegenreses:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllMoviegenres.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllMoviegenres.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.moviegenreses = action.payload;
            })
            .addCase(FetchAllMoviegenres.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default moviegenresSlice.reducer;







   
  








