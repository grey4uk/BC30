import { TYPES } from 'redux/types/types';

// actions
// const plus = { type: TYPES.PLUS, payload: 1 };
const minus = { type: TYPES.MINUS, payload: 1 };
// const setStep = { type: TYPES.SET_STEP, payload: 1 };
// actionCreators
const plusAction = (payload = 1) => ({
  type: TYPES.PLUS,
  payload,
});
const minusAction = (payload = 1) => ({
  ...minus,
  payload,
});
const stepAction = (payload = 1) => ({
  type: TYPES.SET_STEP,
  payload,
});

export const actions = {
  plus: plusAction,
  minus: minusAction,
  setStep: stepAction,
};
