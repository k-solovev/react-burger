import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import { useSelector } from 'react-redux'

import IngredientsSection from '../ingredients-section/ingredients-section';

const BurgerIngredients = () => {
  const data = useSelector(store => store.ingredients.ingredients)

  const buns = data.filter(el => el.type === 'bun')
  const sauces = data.filter(el => el.type === 'sauce')
  const main = data.filter(el => el.type === 'main')

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
        {buns.length && <IngredientsSection data={buns} sectionId='buns' title='Булки' />}
        {sauces.length && <IngredientsSection data={sauces} sectionId='sauces' title='Соусы' />}
        {main.length && <IngredientsSection data={main} sectionId='main' title='Начинки' />}
      </div>
    </section>
  )
}

export default BurgerIngredients