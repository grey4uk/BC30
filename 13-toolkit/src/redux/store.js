import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './toolkit/slices/counterSlice';
// import stepReducer from './toolkit/slices/stepSlice';
// import reducer from './toolkit/reducers';

// const initialState = JSON.parse(
//   localStorage.getItem('counter')
// ) ?? { counter: 0, step: 1 };

const persistConfig = {
  key: 'counter',
  storage,
  whitelist: ['counter'],
  // blacklist: ['counter'],
};

const persistedReducer = persistReducer(
  persistConfig,
  counterReducer
);

const store = configureStore({
  reducer: persistedReducer,
  // {
  //   counter: counterReducer,
  //   step: stepReducer,
  // },
  // preloadedState: initialState,
});

const persistor = persistStore(store);
export { store, persistor };
