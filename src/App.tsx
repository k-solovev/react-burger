import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

const App = () => {
  const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, SetData] = React.useState([])
  const [isLoading, SetIsLoading] = React.useState(true)

  // Получаем данные при монтировании компонента
  React.useEffect(() => {
    try {
      const data = fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          SetData(data.data)
          SetIsLoading(false)
        })
    } catch (err) {
      console.error(`Ошибка загрузки данных ${err}`);
      SetIsLoading(false)
    }
  }, [])

  return (
    <>
      <AppHeader />
      {isLoading && (
        <div style={{ textAlign: 'center', fontSize: '34px', marginTop: '200px', }}>Данные загружаются...</div>
      )}
      {!isLoading && data && (
        <main>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </main>
      )}
    </>
  );
}

export default App;
