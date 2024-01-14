import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'

import { getIngredients } from '../../services/actions/ingredients'
import styles from './app.module.css'

const App = () => {
  const dispatch = useDispatch()
  const activeIngredient = useSelector(store => store.activeIngredient.activeIngredient)
  const { orderNumber } = useSelector(store => store.orderDetails)
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
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>

          {orderNumber && (
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