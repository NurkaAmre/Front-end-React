import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://127.0.0.1:3000/api/v1/messages';
const GET_GREETINGS = 'get_greetings';

export const retrieveGreetings = createAsyncThunk(GET_GREETINGS, async () => {
  const data = await fetch(API_URL).then((response) => response.json()).then((data) => data);
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: { text: '' },
  extraReducers: (builder) => {
    builder.addCase(
      retrieveGreetings.fulfilled,
      (state, action) => ({ ...state, text: action.payload.message }),
    );
  },
});

export default greetingsSlice.reducer;
