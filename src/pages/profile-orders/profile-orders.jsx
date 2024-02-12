import { NavLink } from 'react-router-dom'
import styles from './profile-orders.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../services/actions/user'

export const ProfileOrdersPage = () => {
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
          to='/profile/orders'
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
        {/* Лента заказов */}
      </div>
    </div>
  );
};