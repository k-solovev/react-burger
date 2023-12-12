//import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pr-0 pb-4 pl-0 mb-10`}>
      <nav className={styles.nav}>
        <button className={`${styles.btn} pt-4 pr-5 pb-4 pl-5`}>
          <BurgerIcon type="primary" />
          <span className={`${styles.btn__text_active} text text_type_main-default ml-2`}>Конструктор</span>
        </button>

        <button className={`${styles.btn} pt-4 pr-5 pb-4 pl-5`}>
          <ListIcon type="primary" />
          <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
        </button>
      </nav>

      <Logo />

      <button className={`${styles.btn} ${styles.btn_profile} pt-4 pr-5 pb-4 pl-5`}>
        <ProfileIcon type="primary" />
        <span className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</span>
      </button>
    </header >
  )
}

export default AppHeader