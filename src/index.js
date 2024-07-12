import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider as MaterialThemeProvider } from '@material-tailwind/react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MaterialThemeProvider>
          <App />
        </MaterialThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
