import { TOrder } from '../../utils/prop-types'

export const WS_FEED_CONNECTION_START: 'WS_FEED_CONNECTION_START' = 'WS_FEED_CONNECTION_START'
export const WS_FEED_DISCONNECT: 'WS_FEED_DISCONNECT' = 'WS_FEED_DISCONNECT'
export const WS_FEED_CONNECT_OPEN: 'WS_FEED_CONNECT_OPEN' = 'WS_FEED_CONNECT_OPEN'
export const WS_FEED_ERROR: 'WS_FEED_ERROR' = 'WS_FEED_ERROR'
export const WS_FEED_GET_ORDERS: 'WS_FEED_GET_ORDERS' = 'WS_FEED_GET_ORDERS'

interface IWsFeedConnectionStart {
  type: typeof WS_FEED_CONNECTION_START
  payload: string
}

interface IWsFeedGetOrders {
  type: typeof WS_FEED_GET_ORDERS
  payload: TOrder[],
  total: number
  totalToday: number
}

interface IWsFeedDisconnect {
  type: typeof WS_FEED_DISCONNECT
  payload?: any
}

interface IWsFeedConnectOpen {
  type: typeof WS_FEED_CONNECT_OPEN
  payload?: any
}

interface IWsFeedError {
  type: typeof WS_FEED_ERROR
  payload?: any
}

export type TFeedActions =
  | IWsFeedConnectionStart
  | IWsFeedDisconnect
  | IWsFeedConnectOpen
  | IWsFeedError
  | IWsFeedGetOrders

export const wsFeedConnectionStart = (url: string): IWsFeedConnectionStart => ({ type: WS_FEED_CONNECTION_START, payload: url })
export const wsFeedConnectionOpen = (): IWsFeedConnectOpen => ({ type: WS_FEED_CONNECT_OPEN })
export const wsFeedDisconnect = (): IWsFeedDisconnect => ({ type: WS_FEED_DISCONNECT })
export const wsFeedError = (): IWsFeedError => ({ type: WS_FEED_ERROR })
export const wsFeedGetOrders = (orders: TOrder[], total: number, totalToday: number): IWsFeedGetOrders => ({
  type: WS_FEED_GET_ORDERS,
  payload: orders,
  total: total,
  totalToday: totalToday
})