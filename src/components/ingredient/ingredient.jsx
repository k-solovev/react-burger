import { useMemo, useState } from 'react'
import { ingredientPropType } from '../../utils/prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { SET_ACTIVE_INGREDIENT } from '../../services/actions/active-ingredient'
import { useDrag } from 'react-dnd'

const Ingredient = ({ ingredient }) => {
  const [elementCount, setElementCount] = useState(0)
  const dispatch = useDispatch()
  const stateBun = useSelector(state => state.burgerConstructor.bun)
  const stateIngredients = useSelector(state => state.burgerConstructor.ingredients)

  const calculateCount = () => {
    const allStateIngredients = [...stateIngredients, ...(stateBun ? [stateBun] : []), ...(stateBun ? [stateBun] : [])]
    return allStateIngredients.filter(elem => elem._id === ingredient._id).length
  }

  useMemo(() => {
    const count = calculateCount()
    setElementCount(count)
  }, [stateBun, stateIngredients])

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  })

  const handleActiveIngredientClick = (ingredient) => {
    dispatch({ type: SET_ACTIVE_INGREDIENT, payload: ingredient, })
  }

  return (
    <li className={styles.ingredients__item} ref={dragRef} onClick={() => handleActiveIngredientClick(ingredient)}>
      <div className={`${styles.ingredients__item__top} mb-1`}>
        <img src={ingredient.image} alt='' />
        {elementCount > 0 && (<Counter count={elementCount} size="default" extraClass="m-1" />)}
      </div>
      <div className='ingredients__item__bottom'>
        <div className={`${styles.ingredients__item__price} mb-1`}>
          <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.ingredients__item__name} text text_type_main-default`}>{ingredient.name}</p>
      </div>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: ingredientPropType,
};

export default Ingredient;