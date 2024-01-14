import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-list.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_INGREDIENT } from '../../services/actions/constructor'
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';

const BurgerConstructorList = () => {
  const dispatch = useDispatch()
  const ingredients = useSelector(store => store.burgerConstructor.ingredients)

  const removeIngredientHandler = (ingredient) => {
    dispatch({ type: DELETE_INGREDIENT, payload: ingredient._id })
  }

  return (
    <ul className={styles.burger_constructor__list}>
      {ingredients.map((ingredient, index) => (
        <BurgerConstructorItem index={index} key={ingredient.id}>
          <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={() => removeIngredientHandler(ingredient)}
          />
        </BurgerConstructorItem>
      ))}
    </ul>
  );
};

BurgerConstructorList.propTypes = {

};

export default BurgerConstructorList;