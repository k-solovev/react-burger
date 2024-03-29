import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './index.css';

import { store } from './services/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);