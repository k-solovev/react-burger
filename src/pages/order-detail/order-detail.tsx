import styles from './order-detail.module.css'
import OrderDetailInfo from '../../components/order-details-info/order-detail-info'

export const OrderDetailPage = () => {
  return (
    <div className={styles.order_detail}>
      <OrderDetailInfo />
    </div>
  );
};