import { createSelector } from '@reduxjs/toolkit';

export const counterSelector = (state) => state.counter;
//  {
// console.log('--------------------------');
// console.log('counterSelector');
//   return state.counter;
// };

export const userNameSelector = (state) => {
  // console.log('userNameSelector :>> ');
  return state.auth.user.displayName;
};

export const userEmailSelector = (state) => {
  // console.log('userNameSelector :>> ');
  return state.auth.user.email;
};

export const isLoggedInSelector = (state) => {
  // console.log('isLoggedInSelector :>> ');
  return state.auth.isLoggedIn;
};

// export const greetingOfUserSelector = (state) => {
//   console.log('greetingOfUserSelector');
//   const name = userNameSelector(state);
//   return 'Hello, dear ' + name;
// };

export const greetingOfUserSelector = createSelector(
  userNameSelector,
  (name) => {
    // console.log('greetingOfUserSelector');
    return 'Hello, dear ' + name;
  }
);

const messagesSelector = (state) => state.chat;

export const allMessagesSelector = createSelector(
  messagesSelector,
  (messages) => {
    const newMessages = [...messages];
    return newMessages?.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
  }
);
