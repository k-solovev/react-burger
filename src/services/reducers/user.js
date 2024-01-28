import {
  REQUEST_REGISTRATION,
  SUCCESS_REGISTRATION,
  ERROR_REGISTRATION,
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  REQUEST_LOGOUT,
  SUCCESS_LOGOUT,
  ERROR_LOGOUT,
  REQUEST_USER,
  SUCCESS_USER,
  ERROR_USER,
} from '../actions/user'

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isLogedIn: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REGISTRATION:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_REGISTRATION:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      }
    case ERROR_REGISTRATION:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLogedIn: false,
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogedIn: true,
        user: action.payload,
      }
    case ERROR_LOGIN:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLogedIn: false,
      }
    case REQUEST_LOGOUT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogedIn: false,
      }
    case ERROR_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case REQUEST_USER:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_USER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      }
    case ERROR_USER:
      return {
        ...state,
        isLoading: false,
        isError: true,
        user: null,
      }

    default:
      return state
  }
}