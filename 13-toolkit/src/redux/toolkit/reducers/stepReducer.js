import { createReducer } from '@reduxjs/toolkit';
import { actions } from '../actions';

const { setStep } = actions;

export const stepReducer = createReducer(1, {
  [setStep]: (_, { payload }) => payload,
});
