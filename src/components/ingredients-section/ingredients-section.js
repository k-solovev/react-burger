import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dataIngredients } from '../../utils/prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredients-section.module.css'
import { useDispatch } from 'react-redux'
import { SET_ACTIVE_INGREDIENT } from '../../services/actions/active-ingredient'

const IngredientsSection = forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const handleActiveIngredientClick = (ingredient) => {
    dispatch({ type: SET_ACTIVE_INGREDIENT, payload: ingredient, })
  }

  return (
    <section className='mb-10' id={props.sectionId} ref={ref}>
      <h3 className='text text_type_main-medium mb-6'>{props.title}</h3>
      <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
        {props.data.map(bun => {
          return (
            <li className={styles.ingredients__item} key={bun._id} onClick={() => handleActiveIngredientClick(bun)}>
              <div className={`${styles.ingredients__item__top} mb-1`}>
                <img src={bun.image} alt='' />
                <Counter count={1} size="default" extraClass="m-1" />
              </div>
              <div className='ingredients__item__bottom'>
                <div className={`${styles.ingredients__item__price} mb-1`}>
                  <span className="text text_type_digits-default mr-2">20</span>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.ingredients__item__name} text text_type_main-default`}>{bun.name}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  );
});

IngredientsSection.propTypes = {
  data: dataIngredients.isRequired,
  sectionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IngredientsSection;