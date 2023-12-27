import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRating,AddRating} from "../../BaseUrl/BaseUrl";


export const FetchAllRatings = createAsyncThunk('rating/FetchAllRatings',async()=>{
    const response = await getAllRating();
    console.log(response);
    return response;
});
export const addRatings = createAsyncThunk('rating/addRatings', async (data) => {
    const response = await AddRating(data);
    console.log(response);
    return response;
  });
  
//   export const updateMovieCastAsync = createAsyncThunk('moviecast/updateMovieAsync', async (data) => {
//     const response = await UpdateMovieCast(data);
//     console.log(response);
//     return response;
//   });
  
//   export const deleteMovieCastAsync = createAsyncThunk('moviecast/deleteMovieAsync', async (id) => {
//     const response = await DeleteMovieCast(id);
//     console.log(response);
//     return response;
//   });



const ratingSlice = createSlice({
    name: 'rating',
    initialState:{
        ratings:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllRatings.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllRatings.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.ratings = action.payload;
            })
            .addCase(FetchAllRatings.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default ratingSlice.reducer;







   
  








