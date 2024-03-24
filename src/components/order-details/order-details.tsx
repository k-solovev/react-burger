import styles from './order-details.module.css'
import icon_check from '../../images/icon-check.png'
import { useAppSelector } from '../../hooks/useAppSelector'
import Preloader from '../preloader/preloader';

const OrderDetails = () => {
  const orderNumber = useAppSelector(state => state.orderDetails.orderNumber)

  return (
    <>
      {orderNumber ? (
        <div className={`${styles.order_details} mt-9 mb-30`}>
          <p className='text text_type_digits-large mb-8'>{orderNumber}</p>
          <p className='text text_type_main-medium'>идентификатор заказа</p>
          <img className='mt-15 mb-15' src={icon_check} />
        </div>
      )
        :
        (
          <div className={`${styles.order_details} mt-9 mb-30`}>
            <Preloader />
            <p className='text text_type_main-small mb-2'>Ваш заказ начали готовить</p>
            <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
          </div>
        )}
    </>
  );
};

export default OrderDetails;