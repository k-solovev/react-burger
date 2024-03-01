import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-detail.module.css'

export const OrderDetailPage = () => {
  return (
    <div className={styles.order_detail}>
      <div className={`${styles.order_detail__number} text_type_digits-default mb-10`}>#034533</div>
      <h4 className='text text_type_main-medium mb-3'>Black Hole Singularity острый бургер</h4>
      <div className={`${styles.order_detail__status} text text_type_main-small mb-15`}>Выполнен</div>
      <h4 className='text text_type_main-medium mb-6'>Состав:</h4>
      <ul className='order_detail__ingredients_list mb-10'>
        <li className={`${styles.order_detail__ingredient} mb-4`}>
          <img src="" alt="" />
          <h5 className={`${styles.order_detail__ingredient_title} text text_type_main-small pl-4 pr-4`}>Флюоресцентная булка R2-D3</h5>
          <div className={`${styles.order_detail__ingredient_price} text text_type_digits-default`}>
            <span className='pr-1'>2 x 20</span>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <div className={styles.order_detail__footer}>
        <div className='text text_type_main-default text_color_inactive'>Вчера, 13:50</div>
        <div className={`${styles.order_detail__price} text text_type_digits-default`}>
          <span className='pr-1'>480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};