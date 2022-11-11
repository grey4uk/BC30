import {
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// import { setStep } from './stepSlice';

export const setStep = createAction('counter/set_step');

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, step: 1 },
  reducers: {
    plus: {
      reducer: (state, { payload }) => {
        state.counter = state.counter + payload;
      },
      prepare: (step) => {
        if (step > 3) {
          toast.info(`Step ${step} is too large`);
          return { payload: step - 3 };
        }
        return { payload: step };
      },
    },
    minus: (state, { payload }) => ({
      ...state,
      counter: state.counter - payload,
    }),
  },
  extraReducers: (builder) =>
    builder.addCase(setStep, (state, { payload }) => {
      state.step = payload;
    }),
});

export const { plus, minus } = counterSlice.actions;

export default counterSlice.reducer;
