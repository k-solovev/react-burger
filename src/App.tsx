import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { data } from './utils/data'
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
