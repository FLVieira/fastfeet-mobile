import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import Routes from './routes';

import { store, persistor } from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}
