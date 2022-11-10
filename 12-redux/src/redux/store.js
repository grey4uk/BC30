import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const initialState = JSON.parse(
  localStorage.getItem('counter')
) ?? { counter: { counter: 0, step: 1 } };

const store = configureStore({
  reducer: {
    counter: reducer,
  },
  preloadedState: initialState,
});

export default store;

// const TYPES = {
//   PLUS: 'PLUS',
//   MINUS: 'MINUS',
//   SET_STEP: 'SET_STEP',
// };

// const reducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case TYPES.PLUS:
//       return { ...state, counter: state.counter + payload };
//     case TYPES.MINUS:
//       return { ...state, counter: state.counter - payload };
//     case TYPES.SET_STEP:
//       return { ...state, step: payload };

//     default:
//       return state;
//   }
// };

// actions
// const plus = { type: TYPES.PLUS, payload: 1 };
// const minus = { type: TYPES.MINUS, payload: 1 };
// const setStep = { type: TYPES.SET_STEP, payload: 1 };
// actionCreators
// const plusAction = (payload = 1) => ({
//   type: TYPES.PLUS,
//   payload,
// });
// const minusAction = (payload = 1) => ({
//   ...minus,
//   payload,
// });
// const stepAction = (payload = 1) => ({
//   type: TYPES.SET_STEP,
//   payload,
// });

// export const actions = {
//   plus: plusAction,
//   minus: minusAction,
//   setStep: stepAction,
// };
