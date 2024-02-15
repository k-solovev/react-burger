import styles from './order-details.module.css'
import icon_check from '../../images/icon-check.png'
import { useSelector } from 'react-redux'

const OrderDetails = () => {
  const orderNumber = useSelector((state: any) => state.orderDetails.orderNumber)
  return (
    <div className={`${styles.order_details} mt-9 mb-30`}>
      <p className='text text_type_digits-large mb-8'>{orderNumber}</p>
      <p className='text text_type_main-medium'>идентификатор заказа</p>
      <img className='mt-15 mb-15' src={icon_check} />
      <p className='text text_type_main-small mb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;