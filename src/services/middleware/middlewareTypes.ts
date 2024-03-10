import {
  WS_FEED_CONNECTION_START,
  WS_FEED_DISCONNECT,
  WS_FEED_CONNECT_OPEN,
  WS_FEED_ERROR,
  WS_FEED_GET_ORDERS,
} from '../actions/feed'

export type TGetFeedActions = {
  wsStart: typeof WS_FEED_CONNECTION_START,
  wsStop: typeof WS_FEED_DISCONNECT,
  onOpen: typeof WS_FEED_CONNECT_OPEN,
  onMessage: typeof WS_FEED_GET_ORDERS,
  onError: typeof WS_FEED_ERROR,
}

export const getFeedActions: TGetFeedActions = {
  wsStart: WS_FEED_CONNECTION_START,
  wsStop: WS_FEED_DISCONNECT,
  onOpen: WS_FEED_CONNECT_OPEN,
  onMessage: WS_FEED_GET_ORDERS,
  onError: WS_FEED_ERROR,
}

