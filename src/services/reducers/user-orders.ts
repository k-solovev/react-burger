import {
  WS_USER_ORDERS_CONNECTION_START,
  WS_USER_ORDERS_DISCONNECT,
  WS_USER_ORDERS_ERROR,
  WS_USER_ORDERS_CONNECT_OPEN,
  WS_USER_ORDERS_GET_ORDERS,
  TUserOrdersActions
} from '../actions/user-orders'
import { TFeed } from '../../utils/prop-types'


interface IInitialState {
  wsUserOrdersConnecting: boolean
  wsUserOrdersConnectOpen: boolean,
  wsUserOrdersConnectClosed: boolean,
  wsUserOrdersError: boolean,
  orders: TFeed | null,
  totalOrders: number | null
  totalToday: number | null
}

const initialState: IInitialState = {
  wsUserOrdersConnecting: false,
  wsUserOrdersConnectOpen: false,
  wsUserOrdersConnectClosed: false,
  wsUserOrdersError: false,
  orders: null,
  totalOrders: null,
  totalToday: null,
}

export const userOrdersReducer = (state: IInitialState = initialState, action: TUserOrdersActions) => {
  switch (action.type) {
    case WS_USER_ORDERS_CONNECTION_START:
      return {
        ...state,
        wsUserOrdersError: false,
        wsUserOrdersConnecting: true,
      }
    case WS_USER_ORDERS_DISCONNECT:
      return {
        ...state,
        wsUserOrdersError: false,
        wsUserOrdersConnectOpen: false,
      }
    case WS_USER_ORDERS_ERROR:
      return {
        ...state,
        wsUserOrdersConnectOpen: false,
        wsUserOrdersError: true,
      }
    case WS_USER_ORDERS_CONNECT_OPEN:
      return {
        ...state,
        wsUserOrdersError: false,
        wsUserOrdersConnecting: false,
        wsUserOrdersConnectOpen: true,
      }
    case WS_USER_ORDERS_GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        totalOrders: action.total,
        totalToday: action.totalToday,
      }
    default:
      return {
        ...state,
      }
  }
}