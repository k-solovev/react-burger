import { useEffect } from 'react';
import FeedList from '../../components/feedlist/feedlist'
import FeedStat from '../../components/feedstat/feedstat'
import styles from './feed.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { wsFeedConnectionStart, wsFeedDisconnect } from '../../services/actions/feed'

export const FeedPage = () => {
  const dispatch = useDispatch()
  const { orders, totalOrders, totalToday } = useSelector((state: any) => state.orders)

  useEffect(() => {
    dispatch(wsFeedConnectionStart('wss://norma.nomoreparties.space/orders/all') as any)

    return () => {
      dispatch(wsFeedDisconnect() as any)
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