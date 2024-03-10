import {
  WS_FEED_CONNECTION_START,
  WS_FEED_DISCONNECT,
  WS_FEED_ERROR,
  WS_FEED_CONNECT_OPEN,
  WS_FEED_GET_ORDERS,
  TFeedActions
} from '../actions/feed'
import { TFeed } from '../../utils/prop-types'


interface IInitialState {
  wsFeedConnecting: boolean
  wsFeedConnectOpen: boolean,
  wsFeedConnectClosed: boolean,
  wsFeedError: boolean,
  orders: TFeed | null,
  totalOrders: number | null
  totalToday: number | null
}

const initialState: IInitialState = {
  wsFeedConnecting: false,
  wsFeedConnectOpen: false,
  wsFeedConnectClosed: false,
  wsFeedError: false,
  orders: null,
  totalOrders: null,
  totalToday: null,
}

export const feedReducer = (state: IInitialState = initialState, action: TFeedActions) => {
  switch (action.type) {
    case WS_FEED_CONNECTION_START:
      return {
        ...state,
        wsFeedError: false,
        wsFeedConnecting: true,
      }
    case WS_FEED_DISCONNECT:
      return {
        ...state,
        wsFeedError: false,
        wsFeedDisconnect: false,
        wsFeedConnectOpen: false,
      }
    case WS_FEED_ERROR:
      return {
        ...state,
        wsFeedConnectOpen: false,
        wsFeedError: true,
      }
    case WS_FEED_CONNECT_OPEN:
      return {
        ...state,
        wsFeedError: false,
        wsFeedConnecting: false,
        wsFeedConnectOpen: true,
      }
    case WS_FEED_GET_ORDERS:
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