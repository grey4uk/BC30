import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    setCounter: (state) => state + 1,
  },
});

export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;
