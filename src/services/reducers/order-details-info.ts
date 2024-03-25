import { TOrder } from '../../utils/prop-types'
import {
  REQUEST_ORDER_INFO,
  SUCCESS_ORDER_INFO,
  ERROR_ORDER_INFO,
  TOrderDetailsInfoActions
} from '../actions/order-details-info'

interface IInitialState {
  isLoading: boolean,
  isError: boolean,
  detailedOrder: null | TOrder
}

const initialState: IInitialState = {
  isLoading: false,
  isError: false,
  detailedOrder: null,
}

export const orderDetailsInfoReducer = (state: IInitialState = initialState, action: TOrderDetailsInfoActions) => {
  switch (action.type) {
    case REQUEST_ORDER_INFO:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_ORDER_INFO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        detailedOrder: action.payload,
      }
    case ERROR_ORDER_INFO:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}