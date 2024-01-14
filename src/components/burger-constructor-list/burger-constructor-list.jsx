import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-list.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_INGREDIENT } from '../../services/actions/constructor'

const BurgerConstructorList = () => {
  const dispatch = useDispatch()
  const ingredients = useSelector(store => store.burgerConstructor.ingredients)

  const removeIngredientHandler = (ingredient) => {
    dispatch({ type: DELETE_INGREDIENT, payload: ingredient._id })
  }

  return (
    <ul>
      {ingredients.map(ingredient => (
        <li className={`${styles.burger_constructor__item} mb-4`} key={ingredient.id}>
          <span className='mr-2'>
            <DragIcon type="primary" />
          </span>
          <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={() => removeIngredientHandler(ingredient)}
          />
        </li>
      ))}
    </ul>
  );
};

BurgerConstructorList.propTypes = {

};

export default BurgerConstructorList;