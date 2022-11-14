import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import chatReducer from './chat/chatSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

const customMiddleware = (store) => (next) => (action) => {
  console.log('store :>> ', store.getState());
  console.log('action :>> ', action);
  const newAction =
    action.type === 'auth/google_auth/fulfilled'
      ? {
          ...action,
          payload: {
            displayName: action.payload.displayName,
            email: action.payload.email,
          },
        }
      : action;
  next(newAction);
};

const combinedReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, combinedReducer),

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: { ignoreActions: true },
      // З відео Репети.
      // serializableCheck: {
      //   ignoredActions: [
      //     FLUSH,
      //     REHYDRATE,
      //     PAUSE,
      //     PERSIST,
      //     PURGE,
      //     REGISTER,
      //   ],
      // },
    }).concat(customMiddleware),
});

const persistore = persistStore(store);

export { store, persistore };
