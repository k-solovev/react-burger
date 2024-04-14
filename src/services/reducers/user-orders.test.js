import {
  WS_USER_ORDERS_CONNECTION_START,
  WS_USER_ORDERS_DISCONNECT,
  WS_USER_ORDERS_ERROR,
  WS_USER_ORDERS_CONNECT_OPEN,
  WS_USER_ORDERS_GET_ORDERS,
} from '../actions/user-orders'
import { userOrdersReducer } from './user-orders'

describe('order details', () => {
  const initialState = {
    wsUserOrdersConnecting: false,
    wsUserOrdersConnectOpen: false,
    wsUserOrdersConnectClosed: false,
    wsUserOrdersError: false,
    orders: null,
    totalOrders: null,
    totalToday: null,
  }

  it('should initiate state', () => {
    expect(userOrdersReducer(undefined, {})).toEqual(initialState)
  })

  it('should ws orders connection start', () => {
    const action = { type: WS_USER_ORDERS_CONNECTION_START }

    expect(userOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      wsUserOrdersError: false,
      wsUserOrdersConnecting: true,
    })
  })

  it('should ws orders disconnect', () => {
    const action = { type: WS_USER_ORDERS_DISCONNECT }

    expect(userOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      wsUserOrdersError: false,
      wsUserOrdersConnectOpen: false,
    })
  })

  it('should ws orders disconnect', () => {
    const action = { type: WS_USER_ORDERS_ERROR }

    expect(userOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      wsUserOrdersConnectOpen: false,
      wsUserOrdersError: true,
    })
  })

  it('should ws orders disconnect', () => {
    const action = { type: WS_USER_ORDERS_CONNECT_OPEN }

    expect(userOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      wsUserOrdersError: false,
      wsUserOrdersConnecting: false,
      wsUserOrdersConnectOpen: true,
    })
  })

  it('should ws orders disconnect', () => {
    const action = {
      type: WS_USER_ORDERS_GET_ORDERS,
      payload: [{ _id: 588 }, { _id: 598 }],
      total: 20,
      totalToday: 2
    }

    expect(userOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      orders: action.payload,
      totalOrders: action.total,
      totalToday: action.totalToday,
    })
  })
})