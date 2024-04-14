import { WS_FEED_CONNECTION_START, WS_FEED_DISCONNECT, WS_FEED_ERROR, WS_FEED_CONNECT_OPEN, WS_FEED_GET_ORDERS } from '../actions/feed'
import { feedReducer } from './feed'

describe('feed', () => {
  const initialState = {
    wsFeedConnecting: false,
    wsFeedConnectOpen: false,
    wsFeedConnectClosed: false,
    wsFeedError: false,
    orders: null,
    totalOrders: null,
    totalToday: null,
  }

  it('should initiate state', () => {
    expect(feedReducer(undefined, {})).toEqual({
      wsFeedConnecting: false,
      wsFeedConnectOpen: false,
      wsFeedConnectClosed: false,
      wsFeedError: false,
      orders: null,
      totalOrders: null,
      totalToday: null,
    })
  })

  it('ws feed connection', () => {
    const action = { type: WS_FEED_CONNECTION_START }

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      wsFeedError: false,
      wsFeedConnecting: true,
    })
  })

  it('ws feed disconnection', () => {
    const action = { type: WS_FEED_DISCONNECT }

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      wsFeedError: false,
      wsFeedConnectOpen: false,
    })
  })

  it('ws feed error', () => {
    const action = { type: WS_FEED_ERROR }

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      wsFeedConnectOpen: false,
      wsFeedError: true,
    })
  })

  it('ws feed error', () => {
    const action = { type: WS_FEED_CONNECT_OPEN }

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      wsFeedError: false,
      wsFeedConnecting: false,
      wsFeedConnectOpen: true,
    })
  })

  it('ws feed get orders', () => {
    const action = {
      type: WS_FEED_GET_ORDERS,
      payload: [{
        _id: 586346,
        name: 'Название заказа',
      }],
      total: 78,
      totalToday: 7,
    }

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      orders: action.payload,
      totalOrders: action.total,
      totalToday: action.totalToday,
    })
  })
})