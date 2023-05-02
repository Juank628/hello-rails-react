import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: [],
};

export const readAllGreetings = createAsyncThunk(
  'greetings/readAllGreetings',
  async () => {
    const res = await fetch(`http://127.0.0.1:3000/messages/show`);
    const message = await res.json();
    return message;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readAllGreetings.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greetingsSlice.reducer;