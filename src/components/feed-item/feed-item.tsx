import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './feed-item.module.css'
import { Link } from 'react-router-dom'

const FeedItem = () => {
  return (
    <Link to='/feed/034535' className={`${styles.feed_item} p-6`} >
      <div className={`${styles.feed_item__header} mb-6`}>
        <div className="text text_type_digits-default">#034535</div>
        <div className="text text_type_main-default text_color_inactive">Сегодня, 16:20</div>
      </div>
      <div className={`${styles.feed_item__title} text text_type_main-medium mb-6`}>Death Star Starship Main бургер</div>
      <div className="feed_item__footer">
        <ul className="feed_item__ingredients-list">
          <div className='feed_item__ingredient'>
            <img src="" alt="" />
          </div>
        </ul>
        <div className={`${styles.feed_item__order_price} text text_type_digits-default`}>
          <span className='pr-1'>480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};


export default FeedItem;