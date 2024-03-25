import {
  registrationRequest,
  loginRequest,
  logoutRequest,
  userRequest,
  userUpdateRequest,
  refreshToken,
  resetPasswordRequest,
  forgotPasswordRequest,
} from '../../utils/burger-api'
import { AppDispatch, AppThunk } from '../../utils/prop-types'

export const REQUEST_REGISTRATION: 'REQUEST_REGISTRATION' = 'REQUEST_REGISTRATION'
export const SUCCESS_REGISTRATION: 'SUCCESS_REGISTRATION' = 'SUCCESS_REGISTRATION'
export const ERROR_REGISTRATION: 'ERROR_REGISTRATION' = 'ERROR_REGISTRATION'

export const REQUEST_LOGIN: 'REQUEST_LOGIN' = 'REQUEST_LOGIN'
export const SUCCESS_LOGIN: 'SUCCESS_LOGIN' = 'SUCCESS_LOGIN'
export const ERROR_LOGIN: 'ERROR_LOGIN' = 'ERROR_LOGIN'

export const REQUEST_LOGOUT: 'REQUEST_LOGOUT' = 'REQUEST_LOGOUT'
export const SUCCESS_LOGOUT: 'SUCCESS_LOGOUT' = 'SUCCESS_LOGOUT'
export const ERROR_LOGOUT: 'ERROR_LOGOUT' = 'ERROR_LOGOUT'

export const REQUEST_RESET_PASSWORD: 'REQUEST_RESET_PASSWORD' = 'REQUEST_RESET_PASSWORD'
export const SUCCESS_RESET_PASSWORD: 'SUCCESS_RESET_PASSWORD' = 'SUCCESS_RESET_PASSWORD'
export const ERROR_RESET_PASSWORD: 'ERROR_RESET_PASSWORD' = 'ERROR_RESET_PASSWORD'

export const REQUEST_FORGOT_PASSWORD: 'REQUEST_FORGOT_PASSWORD' = 'REQUEST_FORGOT_PASSWORD'
export const SUCCESS_FORGOT_PASSWORD: 'SUCCESS_FORGOT_PASSWORD' = 'SUCCESS_FORGOT_PASSWORD'
export const ERROR_FORGOT_PASSWORD: 'ERROR_FORGOT_PASSWORD' = 'ERROR_FORGOT_PASSWORD'

export const REQUEST_USER: 'REQUEST_USER' = 'REQUEST_USER'
export const SUCCESS_USER: 'SUCCESS_USER' = 'SUCCESS_USER'
export const ERROR_USER: 'ERROR_USER' = 'ERROR_USER'

export const REQUEST_USER_UPDATE: 'REQUEST_USER_UPDATE' = 'REQUEST_USER_UPDATE'
export const SUCCESS_USER_UPDATE: 'SUCCESS_USER_UPDATE' = 'SUCCESS_USER_UPDATE'
export const ERROR_USER_UPDATE: 'ERROR_USER_UPDATE' = 'ERROR_USER_UPDATE'

interface IRequestRegistration {
  type: typeof REQUEST_REGISTRATION
}

interface ISuccessRegistration {
  type: typeof SUCCESS_REGISTRATION;
  payload: {
    email: string
    name: string
  }
}

interface IErrorRegistration {
  type: typeof ERROR_REGISTRATION
}

interface IRequestLogin {
  type: typeof REQUEST_LOGIN
}

interface ISuccessLogin {
  type: typeof SUCCESS_LOGIN
  payload: {
    email: string
    name: string
  }
}

interface IErrorLogin {
  type: typeof ERROR_LOGIN
}

interface IRequestLogout {
  type: typeof REQUEST_LOGOUT
}

interface ISuccessLogout {
  type: typeof SUCCESS_LOGOUT
}

interface IErrorLogout {
  type: typeof ERROR_LOGOUT
}

interface IRequestResetPassword {
  type: typeof REQUEST_RESET_PASSWORD
}

interface ISuccessResetPassword {
  type: typeof SUCCESS_RESET_PASSWORD
}

interface IErrorResetPassword {
  type: typeof ERROR_RESET_PASSWORD
}

interface IRequestForgotPassword {
  type: typeof REQUEST_FORGOT_PASSWORD
}

interface ISuccessForgotPassword {
  type: typeof SUCCESS_FORGOT_PASSWORD
}

interface IErrorForgotPassword {
  type: typeof ERROR_FORGOT_PASSWORD
}

interface IRequestUser {
  type: typeof REQUEST_USER
}

interface ISuccessUser {
  type: typeof SUCCESS_USER
  payload: {
    email: string
    name: string
  }
}

interface IErrorUser {
  type: typeof ERROR_USER
}

interface IRequestUserUpdate {
  type: typeof REQUEST_USER_UPDATE
}

interface ISuccessUserUpdate {
  type: typeof SUCCESS_USER_UPDATE
  payload: {
    email: string
    name: string
  }
}

interface IErrorUserUpdate {
  type: typeof ERROR_USER_UPDATE
}

export type TUserActions =
  | IRequestRegistration
  | ISuccessRegistration
  | IErrorRegistration
  | IRequestLogin
  | ISuccessLogin
  | IErrorLogin
  | IRequestLogout
  | ISuccessLogout
  | IErrorLogout
  | IRequestResetPassword
  | ISuccessResetPassword
  | IErrorResetPassword
  | IRequestForgotPassword
  | ISuccessForgotPassword
  | IErrorForgotPassword
  | IRequestUser
  | ISuccessUser
  | IErrorUser
  | IRequestUserUpdate
  | ISuccessUserUpdate
  | IErrorUserUpdate

const requestRegistration = (): IRequestRegistration => ({ type: REQUEST_REGISTRATION })
const successRegistration = (res: { email: string, name: string }): ISuccessRegistration => (
  {
    type: SUCCESS_REGISTRATION,
    payload: res
  })
const errorRegistration = (): IErrorRegistration => ({ type: ERROR_REGISTRATION })

const requestLogin = (): IRequestLogin => ({ type: REQUEST_LOGIN })
const successLogin = (res: { email: string, name: string }): ISuccessLogin => (
  {
    type: SUCCESS_LOGIN,
    payload: res
  })
const errorLogin = (): IErrorLogin => ({ type: ERROR_LOGIN })

const requestLogout = (): IRequestLogout => ({ type: REQUEST_LOGOUT })
const successLogout = (): ISuccessLogout => ({ type: SUCCESS_LOGOUT })
const errorLogout = (): IErrorLogout => ({ type: ERROR_LOGOUT })

const requestResetPassword = (): IRequestResetPassword => ({ type: REQUEST_RESET_PASSWORD })
const successResetPassword = (): ISuccessResetPassword => ({ type: SUCCESS_RESET_PASSWORD })
const errorResetPassword = (): IErrorResetPassword => ({ type: ERROR_RESET_PASSWORD })

const requestForgotPassword = (): IRequestForgotPassword => ({ type: REQUEST_FORGOT_PASSWORD })
const successForgotPassword = (): ISuccessForgotPassword => ({ type: SUCCESS_FORGOT_PASSWORD })
const errorForgotPassword = (): IErrorForgotPassword => ({ type: ERROR_FORGOT_PASSWORD })

const requestUser = (): IRequestUser => ({ type: REQUEST_USER })
const successUser = (res: { email: string, name: string }): ISuccessUser => (
  {
    type: SUCCESS_USER,
    payload: res
  })
const errorUser = (): IErrorUser => ({ type: ERROR_USER })

const requestUserUpdate = (): IRequestUserUpdate => ({ type: REQUEST_USER_UPDATE })
const successUserUpdate = (res: { email: string, name: string }): ISuccessUserUpdate => (
  {
    type: SUCCESS_USER_UPDATE,
    payload: res
  })
const errorUserUpdate = (): IErrorUserUpdate => ({ type: ERROR_USER_UPDATE })

export const userUpdate = (name: string, email: string, password: string): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(requestUserUpdate())

    userUpdateRequest(name, email, password)
      .then(res => {
        if (res && res.success) {
          dispatch(successUserUpdate(res.user))
        } else {
          dispatch(errorUserUpdate())
        }
      }).catch(() => {
        dispatch(errorUserUpdate())
      })
  }
}

export const resetPassword = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(requestResetPassword())

    resetPasswordRequest(password, token)
      .then(res => {
        if (res && res.success) {
          dispatch(successResetPassword())
        } else {
          dispatch(errorResetPassword())
        }
      }).catch(() => {
        dispatch(errorResetPassword())
      })
  }
}

export const forgotPassword = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(requestForgotPassword())

    forgotPasswordRequest(email)
      .then(res => {
        if (res && res.success) {
          dispatch(successForgotPassword())
        } else {
          dispatch(errorForgotPassword())
        }
      }).catch(() => {
        dispatch(errorForgotPassword())
      })
  }
}

export const userRegister = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(requestRegistration())

    registrationRequest(name, email, password)
      .then(res => {
        if (res && res.success) {
          dispatch(successRegistration(res.user))

          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken.split('Bearer ')[1])
        } else {
          dispatch(errorRegistration())
        }
      }).catch(() => {
        dispatch(errorRegistration())
      })
  }
}

export const userLogin = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(requestLogin())

    loginRequest(email, password)
      .then(res => {
        if (res && res.success) {
          dispatch(successLogin(res.user))

          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken.split('Bearer ')[1])
        } else {
          dispatch(errorLogin())
        }
      }).catch(() => {
        dispatch(errorLogin())
      })
  }
}

export const userLogout = () => {
  return function (dispatch: AppDispatch) {
    dispatch(requestLogout())

    logoutRequest()
      .then(res => {
        if (res && res.success) {
          dispatch(successLogout())

          localStorage.removeItem('refreshToken')
          localStorage.removeItem('accessToken')
        } else {
          dispatch(errorLogout())
        }
      }).catch(() => {
        dispatch(errorLogout())
      })
  }
}

export const getUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch(requestUser())

    userRequest()
      .then(res => {
        if (res && res.success) {
          dispatch(successUser(res.user))
        } else {
          dispatch(errorUser())
        }
      }).catch(err => {
        if (err.message === 'jwt expired') {
          refreshToken().then(res => {
            localStorage.setItem('refreshToken', res.refreshToken)
            localStorage.setItem('accessToken', res.accessToken.split('Bearer ')[1])
            dispatch(getUser())
          })
        } else {
          dispatch(errorUser())
        }
      })
  }
}