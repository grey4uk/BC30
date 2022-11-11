import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counterReducer';
import { stepReducer } from './stepReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  step: stepReducer,
});

export default rootReducer;
