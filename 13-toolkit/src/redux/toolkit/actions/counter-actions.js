import { createAction } from '@reduxjs/toolkit';

export const plusAction = createAction(
  'counter/plus',
  (value) => {
    console.log('value :>> ', value);
    // alert(`I recieved ${value}`);
    return { payload: value };
  }
);
export const minusAction = createAction('counter/minus');
