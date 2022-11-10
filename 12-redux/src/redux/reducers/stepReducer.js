import { TYPES } from 'redux/types/types';

export const stepReducer = (state = 1, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_STEP:
      return payload;

    default:
      return state;
  }
};
