import { orderRequest } from '../../utils/burger-api'

export const REQUEST_ORDER = 'REQUEST_ORDER'
export const SUCCESS_ORDER = 'SUCCESS_ORDER'
export const ERROR_ORDER = 'ERROR_ORDER'
export const HIDE_ORDER_DETAILS = 'HIDE_ORDER_DETAILS'

export const createOrder = (ingredientsIds) => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_ORDER,
    })

    orderRequest(ingredientsIds)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_ORDER,
            payload: res.order.number,
          })
        } else {
          dispatch({
            type: ERROR_ORDER,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_ORDER,
        })
      })
  }
}