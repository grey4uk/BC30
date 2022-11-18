import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import { contactsApi } from './contacts/contacts-api';
import { imagesApi } from './images/images-api';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
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
    })
      .concat(imagesApi.middleware)
      .concat(contactsApi.middleware),
});

const persistore = persistStore(store);

export { store, persistore };
setupListeners(store.dispatch);
