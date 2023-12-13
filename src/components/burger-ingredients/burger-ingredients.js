import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = (props) => {

  const buns = props.data.filter(el => el.type === 'bun')
  const sauces = props.data.filter(el => el.type === 'sauce')

  return (
    <section className={styles.ingredients}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>

      <div className={`${styles.ingredients__tabs} mb-10`}>
        <Tab value="buns">Булки</Tab>
        <Tab value="sauces">Соусы</Tab>
        <Tab value="fillings">Начинки</Tab>
      </div>

      <div className={styles.ingredients__wrap}>
        <div className='mb-10'>
          <h3 className='text text_type_main-medium mb-6'>Булки</h3>
          <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
            {buns.map(bun => {
              return (
                <li className={styles.ingredients__item}>
                  <div className={`${styles.ingredients__item__top} mb-1`}>
                    <img src={bun.image} />
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
        </div>

        <div className='mb-10'>
          <h3 className='text text_type_main-medium mb-6'>Соусы</h3>
          <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
            {sauces.map(sauce => {
              return (
                <li className={styles.ingredients__item}>
                  <div className={`${styles.ingredients__item__top} mb-1`}>
                    <img src={sauce.image} />
                    <Counter count={1} size="default" extraClass="m-1" />
                  </div>
                  <div className='ingredients__item__bottom'>
                    <div className={`${styles.ingredients__item__price} mb-1`}>
                      <span className="text text_type_digits-default mr-2">20</span>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.ingredients__item__name} text text_type_main-default`}>{sauce.name}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

const dataPropTypes = PropTypes.shape({
  id: PropTypes.string,
  user: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
})

BurgerIngredients.propTypes = {
  data: dataPropTypes,
}


export default BurgerIngredients