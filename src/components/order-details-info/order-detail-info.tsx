import { useParams } from 'react-router-dom';
import styles from './order-detail-info.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, useEffect } from 'react'
import { getOrderDetails } from '../../services/actions/order-details-info'
import { useDispatch } from 'react-redux'
import { getCompoundByIds } from '../../utils/functions';
import { ICompound } from '../../utils/prop-types';
import { useAppSelector } from '../../hooks/useAppSelector';

const OrderDetailInfo: FC = () => {
  const dispatch = useDispatch()
  const { orderNumber = '' } = useParams()
  const order = useAppSelector(state => state.detailedOrder.detailedOrder)
  const allIngredients = useAppSelector(state => state.ingredients.ingredients)
  const orderCompound = order ? getCompoundByIds(allIngredients, order.ingredients) : []
  const totalPrice = Object.values(orderCompound).reduce((acc: number, ingredient: ICompound) => acc += ingredient.price * ingredient.count, 0)

  useEffect(() => {
    dispatch(getOrderDetails(orderNumber) as any)
  }, [dispatch])

  return (
    <>
      {!order ? (
        <div className={`${styles.is_loading_wrap} text text_type_main-default`}>Данные загружаются...</div>
      )
        :
        (
          <>
            <div className={`${styles.order_detail__number} text_type_digits-default mb-10`}>#{order.number}</div>
            <h4 className='text text_type_main-medium mb-3'>{order.name}</h4>
            <div className={`${styles.order_detail__status} text text_type_main-small mb-15`}>
              {order.status === 'done' ? 'Выполнен' : 'Готовиться'}
            </div>
            <h4 className='text text_type_main-medium mb-6'>Состав:</h4>
            <ul className='order_detail__ingredients_list mb-10'>
              {Object.values(orderCompound).map(ingredient => {
                return (
                  <li className={`${styles.order_detail__ingredient} mb-4`} key={ingredient._id}>
                    <div className={styles.order_detail__ingredient_img}>
                      <img src={ingredient.image_mobile} alt={ingredient.name} />
                    </div>
                    <h5 className={`${styles.order_detail__ingredient_title} text text_type_main-small pl-4 pr-4`}>{ingredient.name}</h5>
                    <div className={`${styles.order_detail__ingredient_price} text text_type_digits-default`}>
                      <span className='pr-1'>{ingredient.count} x {ingredient.price}</span>
                      <CurrencyIcon type="primary" />
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className={styles.order_detail__footer}>
              <div className='text text_type_main-default text_color_inactive'>Вчера, 13:50</div>
              <div className={`${styles.order_detail__price} text text_type_digits-default`}>
                <span className='pr-1'>{totalPrice}</span>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default OrderDetailInfo;