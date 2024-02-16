import { Logo, BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { Link, NavLink } from 'react-router-dom'

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pr-0 pb-4 pl-0`}>
      <nav className={styles.nav}>
        <NavLink to='/' className={({ isActive }) => isActive ?
          `${styles.btn} ${styles.btn__text_active} pt-4 pr-5 pb-4 pl-5`
          :
          `${styles.btn} pt-4 pr-5 pb-4 pl-5`}>
          <BurgerIcon type="primary" />
          <span className='text text_type_main-default text_color_inactive ml-2'>Конструктор</span>
        </NavLink>

        <NavLink to='profile/orders' className={({ isActive }) => isActive ?
          `${styles.btn} ${styles.btn__text_active} pt-4 pr-5 pb-4 pl-5`
          :
          `${styles.btn} pt-4 pr-5 pb-4 pl-5`}>
          <ListIcon type="primary" />
          <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
        </NavLink>
      </nav>

      <Link to='/'>
        <Logo />
      </Link>

      <NavLink to='/profile'
        className={({ isActive }) => isActive ?
          `${styles.btn} ${styles.btn_profile} ${styles.btn__text_active} pt-4 pr-5 pb-4 pl-5`
          :
          `${styles.btn} ${styles.btn_profile} pt-4 pr-5 pb-4 pl-5`}>
        <ProfileIcon type="primary" />
        <span className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</span>
      </NavLink>
    </header >
  )
}

export default AppHeader