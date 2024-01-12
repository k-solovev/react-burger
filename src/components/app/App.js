import { useEffect } from 'react'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'

import { useDispatch, useSelector } from 'react-redux'
import { getIngredients } from '../../services/actions/ingredients'
import styles from './app.module.css'

const App = () => {
  const dispatch = useDispatch()
  const activeIngredient = useSelector(store => store.activeIngredient.activeIngredient)
  const isOrderDetailsShow = useSelector(store => store.orderDetails.isOrderDetailsShow)
  const { isLoading, isError } = useSelector(store => store.ingredients)
  const data = useSelector(store => store.ingredients.ingredients)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      {isLoading && (
        <div className={`${styles.is_loading_wrap} text text_type_main-default`}>Данные загружаются...</div>
      )}
      {isError && (
        <div className={`${styles.is_loading_wrap} text text_type_main-default`}>{isError}</div>
      )}
      {!isLoading && data.length && (
        <main>
          <BurgerIngredients />
          <BurgerConstructor />

          {isOrderDetailsShow && (
            <>
              <Modal>
                <OrderDetails />
              </Modal>
            </>
          )}

          {activeIngredient && (
            <>
              <Modal title='Детали ингредиента'>
                <IngredientDetails prod={activeIngredient} />
              </Modal>
            </>
          )}
        </main>
      )}
    </>
  );
}

export default App;