import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-list.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_INGREDIENT } from '../../services/actions/constructor'
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item'
import { IIngredient } from '../../utils/prop-types'

interface IConstructorElementType extends IIngredient {
  id: string
}

const BurgerConstructorList = () => {
  const dispatch = useDispatch()
  const ingredients = useSelector((store: any) => store.burgerConstructor.ingredients)

  const removeIngredientHandler = (index: number) => {
    dispatch({ type: DELETE_INGREDIENT, payload: index })
  }

  return (
    <ul className={styles.burger_constructor__list}>
      {ingredients.map((ingredient: IConstructorElementType, index: number) => (
        <BurgerConstructorItem index={index} key={ingredient.id}>
          <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={() => removeIngredientHandler(index)}
          />
        </BurgerConstructorItem>
      ))}
    </ul>
  );
};

export default BurgerConstructorList;