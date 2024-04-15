import { REQUEST_ORDER, SUCCESS_ORDER, ERROR_ORDER, RESET_ORDER_NUMBER, } from '../actions/order-details'
import { orderdetailsReducer } from './order-details'

describe('order details', () => {
  const initialState = {
    isLoading: false,
    isError: false,
    orderNumber: null,
  }

  it('should initiate state', () => {
    expect(orderdetailsReducer(undefined, {})).toEqual(initialState)
  })

  it('should request order', () => {
    const action = { type: REQUEST_ORDER }

    expect(orderdetailsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success order', () => {
    const action = { type: SUCCESS_ORDER, payload: 533 }

    expect(orderdetailsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      orderNumber: action.payload,
    })
  })

  it('should error order', () => {
    const action = { type: ERROR_ORDER }

    expect(orderdetailsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })

  it('should reset order number', () => {
    const action = { type: RESET_ORDER_NUMBER }

    expect(orderdetailsReducer(initialState, action)).toEqual({
      ...initialState,
      orderNumber: null,
    })
  })
})