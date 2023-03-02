import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/messages';
const GET_GREETINGS = 'get_greetings';

export const retrieveGreetings = createAsyncThunk(GET_GREETINGS, async () => {
  const res = fetch(API_URL);
  const data = (await res).json();
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      retrieveGreetings.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default greetingsSlice.reducer;