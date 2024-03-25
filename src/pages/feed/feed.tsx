import { useEffect } from 'react';
import FeedList from '../../components/feedlist/feedlist'
import FeedStat from '../../components/feedstat/feedstat'
import styles from './feed.module.css'
import { wsFeedConnectionStart, wsFeedDisconnect } from '../../services/actions/feed'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const FeedPage = () => {
  const dispatch = useAppDispatch()
  const { orders, totalOrders, totalToday } = useAppSelector(state => state.orders)

  useEffect(() => {
    dispatch(wsFeedConnectionStart('wss://norma.nomoreparties.space/orders/all'))

    return () => {
      dispatch(wsFeedDisconnect())
    }
  }, [dispatch])

  return (
    <>
      {orders && totalOrders && totalToday ? (
        <div className={`${styles.feed_page}`}>
          <div className={styles.feed__left}>
            <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
            <FeedList orders={orders} />
          </div>
          <div className={styles.feed__right}>
            <FeedStat orders={orders} totalOrders={totalOrders} totalToday={totalToday} />
          </div>
        </div>
      ) : (
        <div className='text text_type_main-large pt-10'>Данные загружаются...</div>
      )}
    </>
  );
};