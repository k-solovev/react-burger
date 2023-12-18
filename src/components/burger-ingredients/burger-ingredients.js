import React from 'react';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import { dataIngredients } from '../../utils/prop-types'

const BurgerIngredients = ({ data }) => {
  const buns = data.filter(el => el.type === 'bun')
  const sauces = data.filter(el => el.type === 'sauce')

  const [curTab, setCurTab] = React.useState('buns')
  const onTabClick = (value) => {
    const element = document.getElementById(value)

    setCurTab(value)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className={`${styles.ingredients} mt-10 mr-10`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>

      <div className={`${styles.ingredients__tabs} mb-10`}>
        <Tab value="buns" active={curTab === 'buns'} onClick={() => onTabClick('buns')}>Булки</Tab>
        <Tab value="sauces" active={curTab === 'sauces'} onClick={() => onTabClick('sauces')}>Соусы</Tab>
        <Tab value="fillings" active={curTab === 'fillings'} onClick={() => onTabClick('fillings')}>Начинки</Tab>
      </div>

      <div className={styles.ingredients__wrap}>
        <div className='mb-10' id='buns'>
          <h3 className='text text_type_main-medium mb-6'>Булки</h3>
          <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
            {buns.map(bun => {
              return (
                <li className={styles.ingredients__item} key={bun._id}>
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

        <div className='mb-10' id='sauces'>
          <h3 className='text text_type_main-medium mb-6'>Соусы</h3>
          <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
            {sauces.map(sauce => {
              return (
                <li className={styles.ingredients__item} key={sauce._id}>
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

BurgerIngredients.propTypes = {
  data: dataIngredients.isRequired
}

export default BurgerIngredients