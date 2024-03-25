import { orderRequest } from '../../utils/burger-api'
import { AppDispatch } from '../../utils/prop-types'
import { RESET_INGREDIENTS } from './constructor'

export const REQUEST_ORDER: 'REQUEST_ORDER' = 'REQUEST_ORDER'
export const SUCCESS_ORDER: 'SUCCESS_ORDER' = 'SUCCESS_ORDER'
export const ERROR_ORDER: 'ERROR_ORDER' = 'ERROR_ORDER'
export const RESET_ORDER_NUMBER: 'RESET_ORDER_NUMBER' = 'RESET_ORDER_NUMBER'

interface IRequestOrder {
  type: typeof REQUEST_ORDER
}

interface ISuccessOrder {
  type: typeof SUCCESS_ORDER;
  payload: number
}

interface IErrorOrder {
  type: typeof ERROR_ORDER
}

interface IResetOrderNumber {
  type: typeof RESET_ORDER_NUMBER
}

export type TOrderDetailsActions =
  | IRequestOrder
  | ISuccessOrder
  | IErrorOrder
  | IResetOrderNumber

const requestOrder = (): IRequestOrder => ({ type: REQUEST_ORDER })
const successOrder = (orderNumber: number): ISuccessOrder => ({ type: SUCCESS_ORDER, payload: orderNumber })
const errorOrder = (): IErrorOrder => ({ type: ERROR_ORDER })
export const resetOrderNumber = (): IResetOrderNumber => ({ type: RESET_ORDER_NUMBER })

export const createOrder = (ingredientsIds: string[]) => {
  return function (dispatch: AppDispatch) {
    dispatch(requestOrder())

    orderRequest(ingredientsIds)
      .then(res => {
        if (res && res.success) {
          dispatch(successOrder(res.order.number))
          dispatch({ type: RESET_INGREDIENTS })
        } else {
          dispatch(errorOrder())
        }
      }).catch(err => {
        dispatch(errorOrder())
      })
  }
}