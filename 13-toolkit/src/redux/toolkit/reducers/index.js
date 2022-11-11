import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counterReducer';
import { stepReducer } from './stepReducer';

export default combineReducers({
  step: stepReducer,
  counter: counterReducer,
});
