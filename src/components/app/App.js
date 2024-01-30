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
            <Route path='/ingredients/:ingredientId' element={<IngredientDetails />} />
            <Route path='/forgot-password' element={<ProtectedRouteElement element={<ForgotPasswordPage />} anonymous={true} />} />
            <Route path='/reset-password' element={<ProtectedRouteElement element={<ResetPasswordPage />} anonymous={true} />} />
            <Route path='/login' element={<ProtectedRouteElement element={<LoginPage />} anonymous={true} />} />
            <Route path='/register' element={<ProtectedRouteElement element={<RegistrationPage />} anonymous={true} />} />
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

export default App