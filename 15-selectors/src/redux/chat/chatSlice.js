import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { items: [] },
  reducers: {
    setChat(_, { payload }) {
      return { items: payload };
    },
    deleteMessage(state, { payload }) {
      // state.items=state.items.filter(el=>el.id!==payload);
      return {
        items: state.items.filter(
          (el) => el.id !== payload
        ),
      };
    },
  },
  extraReducers: {},
});
export default chatSlice.reducer;
export const { setChat } = chatSlice.actions;
