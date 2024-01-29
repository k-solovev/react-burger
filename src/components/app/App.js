import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import AppHeader from '../app-header/app-header'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'
import ProtectedRouteElement from '../protected-route-element/protected-route-element'

import { getIngredients } from '../../services/actions/ingredients'
import { getUser } from '../../services/actions/user'
import styles from './app.module.css'

import {
  HomePage,
  RegistrationPage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  ProfileOrdersPage,
  NotFound404,
} from '../../pages/'

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orderNumber = useSelector(store => store.orderDetails.orderNumber)
  const { isLoading, isError } = useSelector(store => store.ingredients)
  const data = useSelector(store => store.ingredients.ingredients)

  const background = location.state && location.state.background

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUser())
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
          <Routes location={background || location}>
            <Route path='/' element={<HomePage />} />
            <Route path='/ingredients/:ingredientId' element={<IngredientDetails />}></Route>
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} />} />
            <Route path='/profile/orders' element={<ProtectedRouteElement element={<ProfileOrdersPage />} />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>

          {background && (
            <Routes>
              <Route
                path='/ingredients/:ingredientId'
                element={
                  <Modal title='Детали ингредиента' onClose={handleModalClose}>
                    <IngredientDetails />
                  </Modal>
                }>
              </Route>
            </Routes>
          )}

          {background && (
            <Routes>
              <Route
                path='/order'
                element={
                  <Modal onClose={handleModalClose}>
                    <OrderDetails />
                  </Modal>
                }>
              </Route>
            </Routes>
          )}
        </main>
      )}
    </>
  );
}

export default App;

// 6. Добавляем в utils/api.js код для обновления токена из поста  про авторизацию и модалки.
// 7. Добавляем в utils/api.js функции для всех остальных запросов которые могут понадобиться
// (для тех, где нужно посылать токен вместо fetch используем fetchWithRefresh)
// 8. Реализуем функционал ProtectedRoute из примера в предыдущем посте
// (компонент, асинхронные экшены, редьюсер/слайс, оборачиваем пути в App в защищенные компоненты, добавляем в App, Login и Register диспатч нужных экшенов в обработчик submit формы)
// 9. Реализуем страницу Profile используя вложенные маршруты и компонент Outlet (https://www.robinwieruch.de/react-router-nested-routes )
// 10. Делаем в главном меню активные и неактивные пункты (можно описать стили для .active и .active svg)
// 11. Реализуем функциональность восстановления пароля с учетом флага в localStorage (см. предыдущий пост)