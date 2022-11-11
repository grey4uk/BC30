import { TYPES } from '../types/types';

export const counterReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.PLUS:
      return state + payload;
    case TYPES.MINUS:
      return state - payload;
    default:
      return state;
  }
};
