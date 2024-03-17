import { REQUEST_ORDER, SUCCESS_ORDER, ERROR_ORDER, TOrderDetailsActions } from '../actions/order-details'

interface IInitialState {
  isLoading: boolean,
  isError: boolean,
  orderNumber: null | number
}

const initialState: IInitialState = {
  isLoading: false,
  isError: false,
  orderNumber: null,
}

export const orderdetailsReducer = (state: IInitialState = initialState, action: TOrderDetailsActions) => {
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
    case ERROR_ORDER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}