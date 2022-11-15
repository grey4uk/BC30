import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    setChat(_, { payload }) {
      return payload;
    },
  },
  extraReducers: {},
});
export default chatSlice.reducer;
export const { setChat } = chatSlice.actions;
