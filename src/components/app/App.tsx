import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import AppHeader from '../app-header/app-header'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'
import ProtectedRouteElement from '../protected-route-element/protected-route-element'
import OrderDetailInfo from '../order-details-info/order-detail-info'

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
  FeedPage,
  NotFound404,
  OrderDetailPage,
} from '../../pages'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading, isError } = useAppSelector(store => store.ingredients)
  const user = useAppSelector(state => state.user.user)
  const data = useAppSelector(store => store.ingredients.ingredients)

  const background = location.state && location.state.background

  const handleModalClose = (): void => {
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
            <Route path='/ingredients/:ingredientId' element={<IngredientDetails />} />
            <Route path='/forgot-password' element={<ProtectedRouteElement element={<ForgotPasswordPage />} anonymous={true} />} />
            <Route path='/reset-password' element={<ProtectedRouteElement element={<ResetPasswordPage />} anonymous={true} />} />
            <Route path='/login' element={<ProtectedRouteElement element={<LoginPage />} anonymous={true} />} />
            <Route path='/register' element={<ProtectedRouteElement element={<RegistrationPage />} anonymous={true} />} />
            {user && <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage user={user} />} />} />}
            <Route path='/profile/orders' element={<ProtectedRouteElement element={<ProfileOrdersPage />} />} />
            <Route path='/profile/orders/:orderId' element={<OrderDetailPage />} />
            <Route path='/feed/' element={<FeedPage />} />
            <Route path='/feed/:orderNumber' element={<OrderDetailPage />} />
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
              <Route
                path='/order'
                element={
                  <Modal onClose={handleModalClose}>
                    <OrderDetails />
                  </Modal>
                }>
              </Route>
              <Route
                path='/feed/:orderNumber'
                element={
                  <Modal onClose={handleModalClose}>
                    <OrderDetailInfo />
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

export default App