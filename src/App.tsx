import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients />
      </main>
    </>
  );
}

export default App;
