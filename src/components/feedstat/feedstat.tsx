import { FC } from 'react'
import styles from './feedstat.module.css'

const FeedStat: FC = () => {
  return (
    <div className={styles.feedstat}>
      <div className={`${styles.feedstat__top} mb-15`}>
        <div className="feedstat__left">
          <h4 className='text text_type_main-medium mb-6'>Готовы:</h4>
          <ul className={`${styles.feedstat__orders_list} text text_type_digits-default`}>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
        <div className="feedstat__right">
          <h4 className='text text_type_main-medium mb-6'>В работе:</h4>
          <ul className='text text_type_digits-default'>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
      </div>
      <div className="feedstat__mid mb-15">
        <h4 className='text text_type_main-medium mb-6'>Выполнено за все время:</h4>
        <span className='text text_type_digits-large'>28 752</span>
      </div>
      <div className="feedstat__bot mb-15">
        <h4 className='text text_type_main-medium mb-6'>Выполнено за сегодня:</h4>
        <span className='text text_type_digits-large'>138</span>
      </div>
    </div>
  );
};

export default FeedStat;