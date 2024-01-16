import { useState, useRef, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import { useSelector } from 'react-redux'

import IngredientsSection from '../ingredients-section/ingredients-section';

const BurgerIngredients = () => {
  const ingredients = useSelector(store => store.ingredients.ingredients)
  const [curTab, setCurTab] = useState('buns')
  const tabsRef = useRef(null)
  const bunsRef = useRef(null)
  const sauceRef = useRef(null)
  const mainRef = useRef(null)

  const buns = useMemo(() => ingredients.filter(el => el.type === 'bun'), [ingredients])
  const sauces = useMemo(() => ingredients.filter(el => el.type === 'sauce'), [ingredients])
  const main = useMemo(() => ingredients.filter(el => el.type === 'main'), [ingredients])

  const onTabClick = (value) => {
    const element = document.getElementById(value)

    setCurTab(value)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const onScrollHandler = () => {
    const tabsRect = tabsRef.current.getBoundingClientRect()
    const bunsRect = bunsRef.current.getBoundingClientRect()
    const sauceRect = sauceRef.current.getBoundingClientRect()
    const mainRect = mainRef.current.getBoundingClientRect()

    const distances = {
      buns: Math.abs(tabsRect.bottom - bunsRect.top),
      sauces: Math.abs(tabsRect.bottom - sauceRect.top),
      main: Math.abs(tabsRect.bottom - mainRect.top),
    }

    const minDistance = Math.min(distances.buns, distances.sauces, distances.main)

    switch (minDistance) {
      case distances.buns:
        return setCurTab('buns')
      case distances.sauces:
        return setCurTab('sauces')
      case distances.main:
        return setCurTab('main')
      default:
        return
    }
  }

  return (
    <section className={`${styles.ingredients} mt-10 mr-10`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>

      <div className={`${styles.ingredients__tabs} mb-10`} ref={tabsRef}>
        <Tab value="buns" active={curTab === 'buns'} onClick={() => onTabClick('buns')}>Булки</Tab>
        <Tab value="sauces" active={curTab === 'sauces'} onClick={() => onTabClick('sauces')}>Соусы</Tab>
        <Tab value="main" active={curTab === 'main'} onClick={() => onTabClick('main')}>Начинки</Tab>
      </div>

      <div className={styles.ingredients__wrap} onScroll={onScrollHandler}>
        {buns.length && <IngredientsSection ingredients={buns} sectionId='buns' title='Булки' ref={bunsRef} />}
        {sauces.length && <IngredientsSection ingredients={sauces} sectionId='sauces' title='Соусы' ref={sauceRef} />}
        {main.length && <IngredientsSection ingredients={main} sectionId='main' title='Начинки' ref={mainRef} />}
      </div>
    </section>
  )
}

export default BurgerIngredients