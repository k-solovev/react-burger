import { SHOW_ORDER_DETAILS, HIDE_ORDER_DETAILS } from '../actions/order-details'

const initialState = {
  isOrderDetailsShow: false,
  orderDetails: {
    id: '2549782',
  },
}

export const orderdetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ORDER_DETAILS:
      return {
        ...state,
        isOrderDetailsShow: true,
      }
    case HIDE_ORDER_DETAILS:
      return {
        ...state,
        isOrderDetailsShow: false,
      }
    default:
      return state
  }
}