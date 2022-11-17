import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistedAuthReducer = persistReducer(
  persistAuthConfig,
  authReducer
);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
});
