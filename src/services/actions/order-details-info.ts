import { getOrderDetailsRequest } from '../../utils/burger-api'
import { AppDispatch, TOrder } from '../../utils/prop-types'

export const REQUEST_ORDER_INFO: 'REQUEST_ORDER_INFO' = 'REQUEST_ORDER_INFO'
export const SUCCESS_ORDER_INFO: 'SUCCESS_ORDER_INFO' = 'SUCCESS_ORDER_INFO'
export const ERROR_ORDER_INFO: 'ERROR_ORDER_INFO' = 'ERROR_ORDER_INFO'

interface IRequestOrder {
  type: typeof REQUEST_ORDER_INFO
}

interface ISuccessOrder {
  type: typeof SUCCESS_ORDER_INFO;
  payload: TOrder
}

interface IErrorOrder {
  type: typeof ERROR_ORDER_INFO
}

export type TOrderDetailsInfoActions =
  | IRequestOrder
  | ISuccessOrder
  | IErrorOrder

const requestOrderDetails = (): IRequestOrder => ({ type: REQUEST_ORDER_INFO })
const successOrderDetails = (order: TOrder): ISuccessOrder => ({ type: SUCCESS_ORDER_INFO, payload: order })
const errorOrderDetails = (): IErrorOrder => ({ type: ERROR_ORDER_INFO })

export const getOrderDetails = (orderNumber: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(requestOrderDetails())

    getOrderDetailsRequest(orderNumber)
      .then(res => {
        if (res && res.success) {
          dispatch(successOrderDetails(res.orders[0]))
        } else {
          dispatch(errorOrderDetails())
        }
      }).catch(err => {
        dispatch(errorOrderDetails())
      })
  }
}