import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './services/reducers';

const preloadedState = {
  ingredients: [],
  constructorIngredients: [],
  activeIngredient: null,
  order: null,
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
