import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllReviewer,addReviewer,updateReviewer,deleteReviewer } from "../../BaseUrl/BaseUrl";

export const FetchAllReviewer = createAsyncThunk('reviewer/FetchAllReviewer',async()=>{
    const response = await getAllReviewer();
    console.log(response);
    return response;
});

export const addReviewerAsync = createAsyncThunk('reviewer/addReviewerAsync', async (data) => {
    const response = await addReviewer(data);
    console.log(response);
    return response;
  });
  
  export const updateReviewerAsync = createAsyncThunk('reviewer/updateReviewerAsync', async (data) => {
    const response = await updateReviewer(data);
    console.log(response);
    return response;
  });
  
  export const deleteReviewerAsync = createAsyncThunk('reviewer/deleteReviewerAsync', async (id) => {
    const response = await deleteReviewer(id);
    console.log(response);
    return response;
  });

const reviewerSlice = createSlice({
    name: 'reviewer',
    initialState:{
        reviewers:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(FetchAllReviewer.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(FetchAllReviewer.fulfilled,(state,action) =>{
                state.status = 'succeeded';
                state.reviewers = action.payload;
            })
            .addCase(FetchAllReviewer.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addReviewerAsync.fulfilled, (state) => {
                state.status = 'succeeded';
              })
              .addCase(updateReviewerAsync.fulfilled, (state) => {
                state.status = 'succeeded';
              })
              .addCase(deleteReviewerAsync.fulfilled, (state) => {
                state.status = 'succeeded';
              });
    },
});
export default reviewerSlice.reducer;







   
  








