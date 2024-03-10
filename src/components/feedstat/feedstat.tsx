import { FC } from 'react'
import styles from './feedstat.module.css'
import { TOrder } from '../../utils/prop-types'

interface IFeedStat {
  orders: TOrder[],
  totalOrders: number
  totalToday: number
}

const FeedStat: FC<IFeedStat> = ({ orders, totalOrders, totalToday }) => {
  const doneOrders = orders.filter(order => order.status === 'done').slice(0, 10)
  const pendingOrders = orders.filter(order => order.status === 'pending').slice(0, 10)

  return (
    <div className={styles.feedstat}>
      <div className={`${styles.feedstat__top} mb-15`}>
        <div className="feedstat__left">
          <h4 className='text text_type_main-medium mb-6'>Готовы:</h4>
          <ul className={`${styles.feedstat__orders_list} text text_type_digits-default`}>
            {doneOrders.map(order => {
              return (
                <li key={order._id}>{order.number}</li>
              )
            })}
          </ul>
        </div>

        <div className="feedstat__right">
          <h4 className='text text_type_main-medium mb-6'>В работе:</h4>
          <ul className='text text_type_digits-default'>
            {pendingOrders.map(order => {
              return (
                <li key={order._id}>{order.number}</li>
              )
            })}
          </ul>
        </div>

      </div>
      <div className="feedstat__mid mb-15">
        <h4 className='text text_type_main-medium mb-6'>Выполнено за все время:</h4>
        <span className='text text_type_digits-large'>{totalOrders}</span>
      </div>
      <div className="feedstat__bot mb-15">
        <h4 className='text text_type_main-medium mb-6'>Выполнено за сегодня:</h4>
        <span className='text text_type_digits-large'>{totalToday}</span>
      </div>
    </div>
  );
};

export default FeedStat;