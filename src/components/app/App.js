import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Route, Routes } from 'react-router-dom'

import AppHeader from '../app-header/app-header'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'

import { getIngredients } from '../../services/actions/ingredients'
import styles from './app.module.css'

import { HomePage, RegistrationPage, SignInPage, ForgotPasswordPage, ProfilePage } from '../../pages/'

const App = () => {
  const dispatch = useDispatch()
  const activeIngredient = useSelector(store => store.activeIngredient.activeIngredient)
  const orderNumber = useSelector(store => store.orderDetails.orderNumber)
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
            <Routes>
              {/* <Route path='/' element={<HomePage />} /> */}
              {/* <Route path='/' element={<SignInPage />} /> */}
              {/* <Route path='/' element={<RegistrationPage />} /> */}
              {/* <Route path='/' element={<ForgotPasswordPage />} /> */}
              <Route path='/' element={<ProfilePage />} />
            </Routes>

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

// 4. Реализуем функционал для модалки ингредиентов в соответствии с примером из поста про авторизацию и модалки.
// 6. Добавляем в utils/api.js код для обновления токена из поста  про авторизацию и модалки.
// 7. Добавляем в utils/api.js функции для всех остальных запросов которые могут понадобиться (для тех, где нужно посылать токен вместо fetch используем fetchWithRefresh)
// 8. Реализуем функционал ProtectedRoute из примера в предыдущем посте  (компонент, асинхронные экшены, редьюсер/слайс, оборачиваем пути в App в защищенные компоненты, добавляем в App, Login и Register диспатч нужных экшенов в обработчик submit формы)
// 9. Реализуем страницу Profile используя вложенные маршруты и компонент Outlet (https://www.robinwieruch.de/react-router-nested-routes )
// 10. Делаем в главном меню активные и неактивные пункты (можно описать стили для .active и .active svg)
// 11. Реализуем функциональность восстановления пароля с учетом флага в localStorage (см. предыдущий пост)