import React from 'react'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'

import styles from './app.module.css'
import { getIngredients } from '../../utils/burger-api'

const App = () => {
  const [data, setData] = React.useState([])
  const [isError, setIsError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [orderDetails, setOrderDetails] = React.useState({ isOpen: false })
  const [ingredientDetails, setIngredientDetails] = React.useState({ isOpen: false, prod: null })

  const closeModal = () => {
    setOrderDetails({ isOpen: false })
    setIngredientDetails({ isOpen: false })
  }

  const handleOrderClick = () => {
    setOrderDetails({ isOpen: true })
  }

  const handleIngredientClick = (prod) => {
    setIngredientDetails({ isOpen: true, prod: prod, })
  }

  // Получаем данные при монтировании компонента
  React.useEffect(() => {
    try {
      getIngredients()
        .then(data => {
          setData(data.data)
          setIsLoading(false)
        })
    } catch (err) {
      console.error(`Ошибка загрузки данных ${err}`)
      setIsLoading(false)
      setIsError(err)
    }
  }, [])

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
          <BurgerIngredients data={data} handleIngredientClick={handleIngredientClick} />
          <BurgerConstructor data={data} handleOrderClick={handleOrderClick} />

          {orderDetails.isOpen && (
            <>
              <Modal close={closeModal}>
                <OrderDetails />
              </Modal>
            </>
          )}

          {ingredientDetails.isOpen && ingredientDetails.prod && (
            <>
              <Modal title='Детали ингредиента' close={closeModal}>
                <IngredientDetails prod={ingredientDetails.prod} />
              </Modal>
            </>
          )}
        </main>
      )}
    </>
  );
}

export default App;