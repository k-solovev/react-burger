import { orderRequest } from '../../utils/burger-api'
import { AppDispatch, AppThunk } from '../../utils/prop-types'

export const REQUEST_ORDER: 'REQUEST_ORDER' = 'REQUEST_ORDER'
export const SUCCESS_ORDER: 'SUCCESS_ORDER' = 'SUCCESS_ORDER'
export const ERROR_ORDER: 'ERROR_ORDER' = 'ERROR_ORDER'
// export const HIDE_ORDER_DETAILS: 'HIDE_ORDER_DETAILS' = 'HIDE_ORDER_DETAILS'

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

export type TOrderDetailsActions =
  | IRequestOrder
  | ISuccessOrder
  | IErrorOrder

const requestOrder = (): IRequestOrder => ({ type: REQUEST_ORDER })
const successOrder = (orderNumber: number): ISuccessOrder => ({ type: SUCCESS_ORDER, payload: orderNumber })
const errorOrder = (): IErrorOrder => ({ type: ERROR_ORDER })

export const createOrder = (ingredientsIds: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(requestOrder())

    orderRequest(ingredientsIds)
      .then(res => {
        if (res && res.success) {
          dispatch(successOrder(res.order.number))
        } else {
          dispatch(errorOrder())
        }
      }).catch(err => {
        dispatch(errorOrder())
      })
  }
}