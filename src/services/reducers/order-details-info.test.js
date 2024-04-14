import { REQUEST_ORDER_INFO, SUCCESS_ORDER_INFO, ERROR_ORDER_INFO, } from '../actions/order-details-info'
import { orderDetailsInfoReducer } from './order-details-info'

describe('order details info', () => {
  const initialState = {
    isLoading: false,
    isError: false,
    detailedOrder: null,
  }

  it('should initiate state', () => {
    expect(orderDetailsInfoReducer(undefined, {})).toEqual(initialState)
  })

  it('should request order info', () => {
    const action = { type: REQUEST_ORDER_INFO }

    expect(orderDetailsInfoReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success order info', () => {
    const action = { type: SUCCESS_ORDER_INFO, payload: { _id: 533, } }

    expect(orderDetailsInfoReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      detailedOrder: action.payload,
    })
  })

  it('should error order info', () => {
    const action = { type: ERROR_ORDER_INFO }

    expect(orderDetailsInfoReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })
})