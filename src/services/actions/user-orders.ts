import { TOrder } from '../../utils/prop-types'

export const WS_USER_ORDERS_CONNECTION_START: 'WS_USER_ORDERS_CONNECTION_START' = 'WS_USER_ORDERS_CONNECTION_START'
export const WS_USER_ORDERS_DISCONNECT: 'WS_USER_ORDERS_DISCONNECT' = 'WS_USER_ORDERS_DISCONNECT'
export const WS_USER_ORDERS_CONNECT_OPEN: 'WS_USER_ORDERS_CONNECT_OPEN' = 'WS_USER_ORDERS_CONNECT_OPEN'
export const WS_USER_ORDERS_ERROR: 'WS_USER_ORDERS_ERROR' = 'WS_USER_ORDERS_ERROR'
export const WS_USER_ORDERS_GET_ORDERS: 'WS_USER_ORDERS_GET_ORDERS' = 'WS_USER_ORDERS_GET_ORDERS'

interface IWsUserOrdersConnectionStart {
  type: typeof WS_USER_ORDERS_CONNECTION_START
  payload: string
}

interface IWsUserOrdersGetOrders {
  type: typeof WS_USER_ORDERS_GET_ORDERS
  payload: TOrder[],
  total: number
  totalToday: number
}

interface IWsUserOrdersDisconnect {
  type: typeof WS_USER_ORDERS_DISCONNECT
  payload?: any
}

interface IWsUserOrdersConnectOpen {
  type: typeof WS_USER_ORDERS_CONNECT_OPEN
  payload?: any
}

interface IWsUserOrdersError {
  type: typeof WS_USER_ORDERS_ERROR
  payload?: any
}

export type TUserOrdersActions =
  | IWsUserOrdersConnectionStart
  | IWsUserOrdersDisconnect
  | IWsUserOrdersConnectOpen
  | IWsUserOrdersError
  | IWsUserOrdersGetOrders

export const wsUserOrdersConnectionStart = (url: string): IWsUserOrdersConnectionStart => ({ type: WS_USER_ORDERS_CONNECTION_START, payload: url })
export const wsUserOrdersConnectionOpen = (): IWsUserOrdersConnectOpen => ({ type: WS_USER_ORDERS_CONNECT_OPEN })
export const wsUserOrdersDisconnect = (): IWsUserOrdersDisconnect => ({ type: WS_USER_ORDERS_DISCONNECT })
export const wsUserOrdersError = (): IWsUserOrdersError => ({ type: WS_USER_ORDERS_ERROR })
export const wsUserOrdersGetOrders = (orders: TOrder[], total: number, totalToday: number): IWsUserOrdersGetOrders => ({
  type: WS_USER_ORDERS_GET_ORDERS,
  payload: orders,
  total: total,
  totalToday: totalToday
})