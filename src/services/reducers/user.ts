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
  REQUEST_FORGOT_PASSWORD,
  SUCCESS_FORGOT_PASSWORD,
  ERROR_FORGOT_PASSWORD,
  REQUEST_RESET_PASSWORD,
  SUCCESS_RESET_PASSWORD,
  ERROR_RESET_PASSWORD,
  REQUEST_USER_UPDATE,
  SUCCESS_USER_UPDATE,
  ERROR_USER_UPDATE,
  TUserActions,
} from '../actions/user'

interface IInitialState {
  user: null | object
  isLoading: boolean
  isError: boolean
  isLoggedIn: boolean
}

const initialState: IInitialState = {
  user: null,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
}

export const userReducer = (state: IInitialState = initialState, action: TUserActions) => {
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
        isLoggedIn: false,
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
        user: action.payload,
      }
    case ERROR_LOGIN:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoggedIn: false,
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
        isLoggedIn: false,
        user: null,
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
        isLoggedIn: true,
        user: action.payload,
      }
    case ERROR_USER:
      return {
        ...state,
        isLoading: false,
        isError: true,
        user: null,
      }
    case REQUEST_FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    case ERROR_FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case REQUEST_RESET_PASSWORD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_RESET_PASSWORD:
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    case ERROR_RESET_PASSWORD:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case REQUEST_USER_UPDATE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_USER_UPDATE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      }
    case ERROR_USER_UPDATE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}