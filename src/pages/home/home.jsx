import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'

export const HomePage = () => {
  return (
    <div className='main_page__wrap'>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};

