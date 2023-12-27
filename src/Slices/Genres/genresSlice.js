import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddGenres,getAllGenres,UpdateGenres,DeleteGenres } from "../../BaseUrl/BaseUrl";



export const FetchAllDirectors = createAsyncThunk('genres/FetchAllDirectors',async()=>{
    const response = await getAllGenres();
    console.log(response);
    return response;
});
export const addDirectorAsync = createAsyncThunk('genres/addDirectorAsyncs', async (data) => {
    const response = await AddGenres(data);
    console.log(response);
    return response;
  });
  
  export const updateDirectorAsync = createAsyncThunk('genres/updateDirectorAsync', async (data) => {
    const response = await UpdateGenres(data);
    console.log(response);
    return response;
  });
  
  export const deleteDirectorAsync = createAsyncThunk('genres/deleteDirectorAsync', async (id) => {
    const response = await DeleteGenres(id);
    console.log(response);
    return response;
  });
const genresSlice = createSlice({
    name: 'genres',
    initialState:{
        genreses:[],
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
                state.genreses = action.payload;
            })
            .addCase(FetchAllDirectors.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default genresSlice.reducer;







   
  








