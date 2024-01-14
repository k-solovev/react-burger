import { REQUEST_ORDER, SUCCESS_ORDER, ERROR_ORDER, HIDE_ORDER_DETAILS } from '../actions/order-details'

const initialState = {
  isLoading: false,
  isError: false,
  orderNumber: null,
}

export const orderdetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ORDER:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_ORDER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        orderNumber: action.payload,
      }
    case REQUEST_ORDER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case HIDE_ORDER_DETAILS:
      return {
        ...state,
        orderNumber: null,
      }
    default:
      return state
  }
}