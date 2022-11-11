import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'step',
  initialState: 1,
  reducers: {
    setStep: (_, { payload }) => {
      return payload;
    },
  },
  //   extraReducers: {},
});
export const { setStep } = stepSlice.actions;

export default stepSlice.reducer;
