import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

import App from './App';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistore } from 'redux/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
