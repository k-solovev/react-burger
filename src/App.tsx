import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { data } from './utils/data'

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients data={data} />
      </main>
    </>
  );
}

export default App;
