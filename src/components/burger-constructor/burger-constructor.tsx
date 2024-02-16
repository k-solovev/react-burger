import { useMemo } from 'react'
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../services/actions/order-details'
import BurgerConstructorPlug from '../burger-constructor-plug/burger-constructor-plug';
import BurgerConstructorList from '../burger-constructor-list/burger-constructor-list';
import { useDrop } from 'react-dnd';
import { ADD_BUN, ADD_INGREDIENT } from '../../services/actions/constructor'
import { useLocation, useNavigate } from 'react-router-dom';
import { IIngredient } from '../../utils/prop-types'

const BurgerConstructor = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const bun = useSelector((store: any) => store.burgerConstructor.bun)
  const ingredients = useSelector((store: any) => store.burgerConstructor.ingredients)
  const user = useSelector((store: any) => store.user.user)

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: IIngredient) {
      const type = item.type === 'bun' ? ADD_BUN : ADD_INGREDIENT
      dispatch({ type, payload: item })
    },
  })

  const getTotalPrice = () => {
    const totalIngredients = ingredients.reduce((acc: number, elem: IIngredient): number => acc += elem.price, 0)
    const totalBuns = bun ? bun.price * 2 : 0
    return totalIngredients + totalBuns
  }

  const orderPrice = useMemo(() => {
    return (bun !== null || ingredients.length) && getTotalPrice()
  }, [ingredients, bun])

  const handleOrderClick = () => {
    if (user) {
      const ingredientsForFetch = ingredients.map((elem: IIngredient) => elem._id)
      ingredientsForFetch.unshift(bun._id)
      ingredientsForFetch.push(bun._id)
      dispatch(createOrder(ingredientsForFetch) as any)
      navigate('/order', { state: { background: location } })
    } else {
      navigate('/login')
    }
  }

  return (
    <section className={`${styles.burger_constructor} mt-25`}>
      <div className='mb-10' ref={dropTarget}>
        <div className='ml-8 mb-4'>
          {!bun ? (
            <BurgerConstructorPlug text='Выберите булочку' position='top' />
          )
            :
            (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
            )}
        </div>

        {!ingredients.length ? (
          <div className='ml-8 mb-4'>
            <BurgerConstructorPlug text='Выберите начинку' />
          </div>
        )
          :
          (
            <div className='ml-3'>
              <BurgerConstructorList />
            </div>
          )}

        <div className='ml-8 mb-4'>
          {!bun ? (
            <BurgerConstructorPlug text='Выберите булочку' position='bottom' />
          )
            :
            (
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
            )}
        </div>
      </div>
      <div className={`${styles.burger_constructir__bottom} pr-7`}>
        <span className="text text_type_digits-medium mr-2">{orderPrice}</span>
        <span className='mr-10'>
          <CurrencyIcon type="primary" />
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOrderClick}
          disabled={bun === null || !ingredients.length}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;