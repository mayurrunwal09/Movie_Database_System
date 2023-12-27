import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies,AddMovies,UpdateMovies,Deletemovie } from "../../BaseUrl/BaseUrl";


export const FetchAllMovies = createAsyncThunk('movie/FetchAllMovies',async()=>{
    const response = await getAllMovies();
    console.log(response);
    return response;
});
export const addMovieAsync = createAsyncThunk('movie/addMovieAsync', async (data) => {
    const response = await AddMovies(data);
    console.log(response);
    return response;
  });
  
  export const updateMovieAsync = createAsyncThunk('movie/updateMovieAsync', async (data) => {
    const response = await UpdateMovies(data);
    console.log(response);
    return response;
  });
  
  export const deleteMovieAsync = createAsyncThunk('movie/deleteMovieAsync', async (id) => {
    const response = await Deletemovie(id);
    console.log(response);
    return response;
  });



const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        movies:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllMovies.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllMovies.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(FetchAllMovies.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default movieSlice.reducer;







   
  








