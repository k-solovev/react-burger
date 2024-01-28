import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from 'react-router-dom'
import styles from './profile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../services/actions/user'
import { useState } from 'react'

export const ProfilePage = () => {
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userLogout())
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile__menu}>
        <NavLink
          to='/profile'
          className={({ isActive }) => isActive ?
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link} ${styles.profile__link_active}`
            :
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link}`
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to='/orders'
          className={({ isActive }) => isActive ?
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link} ${styles.profile__link_active}`
            :
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link}`
          }
        >
          История заказов
        </NavLink>

        <button
          onClick={logoutHandler}
          className={`text text_type_main-medium text_color_inactive mb-20 ${styles.profile__btn}`}
        >
          Выход
        </button>

        <p className={`text text_type_main-default text_color_inactive ${styles.profile__footnote}`}>В этом разделе вы можете<br />изменить свои персональные данные</p>
      </div>

      <div className="profile__main">
        <form action="">
          <Input
            type={'text'}
            placeholder={'Имя'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
            value={user.name}
          />
          <Input
            type={'text'}
            placeholder={'логин'}
            name={'login'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
            value={user.email}
          />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            name={'password'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};