import { NavLink } from 'react-router-dom'
import styles from './profile-orders.module.css'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../services/actions/user'
import { SyntheticEvent, useEffect } from 'react'
import FeedList from '../../components/feedlist/feedlist'
import { wsUserOrdersConnectionStart, wsUserOrdersDisconnect } from '../../services/actions/user-orders'
import { useAppSelector } from '../../hooks/useAppSelector'

export const ProfileOrdersPage = () => {
  const orders = useAppSelector(state => state.userOrders.orders)
  const invertedOrders = orders && [...orders].reverse()
  const dispatch = useDispatch()

  useEffect(() => {
    const userOrdersUrl = 'wss://norma.nomoreparties.space/orders'
    const token = localStorage.getItem('accessToken')

    dispatch(wsUserOrdersConnectionStart(`${userOrdersUrl}?token=${token}`) as any)

    return () => {
      dispatch(wsUserOrdersDisconnect() as any)
    }
  }, [dispatch])

  const logoutHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch<any>(userLogout())
  }

  return (
    <div className={styles.profile}>
      <div className={`${styles.profile__menu} mr-15`}>
        <NavLink
          to='/profile'
          end
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
          end
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

      <div className={styles.profile__main}>
        {invertedOrders && <FeedList orders={invertedOrders} showStatus={true} />}
      </div>
    </div>
  );
};