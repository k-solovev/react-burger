import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-list.module.css'
import { DELETE_INGREDIENT } from '../../services/actions/constructor'
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item'
import { IIngredient } from '../../utils/prop-types'
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface IConstructorElementType extends IIngredient {
  id: string
}

const BurgerConstructorList = () => {
  const dispatch = useAppDispatch()
  const ingredients: any = useAppSelector(store => store.burgerConstructor.ingredients)

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