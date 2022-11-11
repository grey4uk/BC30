import { createReducer } from '@reduxjs/toolkit';
import { actions } from '../actions';

const { plus, minus } = actions;

export const counterReducer = createReducer(0, {
  [plus.type]: (state, action) => {
    return state + action.payload;
  },
  [minus]: (state, { payload }) => state - payload,
});
