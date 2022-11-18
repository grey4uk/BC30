import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import { contactsApi } from './contacts/contacts-api';
import contactsReducer from './contacts/contacts-slice';
import { imagesApi } from './images/images-api';

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
  [imagesApi.reducerPath]: imagesApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
