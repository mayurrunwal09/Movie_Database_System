
// src/Slices/Actor/actorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUserType,addActor,updateActor,deleteActor } from '../../BaseUrl/BaseUrl';


export const fetchActors = createAsyncThunk('actor/fetchActors', async () => {
  const response = await getAllUserType();
  console.log(response);
  return response;
});


export const addActorAsync = createAsyncThunk('actor/addActor', async (data) => {
  const response = await addActor(data);
  console.log(response);
  return response;
});

export const updateActorAsync = createAsyncThunk('actor/updateActor', async (data) => {
  const response = await updateActor(data);
  console.log(response);
  return response;
});

export const deleteActorAsync = createAsyncThunk('actor/deleteActor', async (id) => {
  const response = await deleteActor(id);
  console.log(response);
  return response;
});

const actorSlice = createSlice({
  name: 'actor',
  initialState: {
    actors: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.actors = action.payload;
      })
      .addCase(fetchActors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Additional cases for Add, Update, and Delete
      .addCase(addActorAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(updateActorAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteActorAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      });
  },
});

export default actorSlice.reducer;
