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

export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION'
export const SUCCESS_REGISTRATION = 'SUCCESS_REGISTRATION'
export const ERROR_REGISTRATION = 'ERROR_REGISTRATION'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT'
export const ERROR_LOGOUT = 'ERROR_LOGOUT'

export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD'
export const SUCCESS_RESET_PASSWORD = 'SUCCESS_RESET_PASSWORD'
export const ERROR_RESET_PASSWORD = 'ERROR_RESET_PASSWORD'

export const REQUEST_FORGOT_PASSWORD = 'REQUEST_FORGOT_PASSWORD'
export const SUCCESS_FORGOT_PASSWORD = 'SUCCESS_FORGOT_PASSWORD'
export const ERROR_FORGOT_PASSWORD = 'ERROR_FORGOT_PASSWORD'

export const REQUEST_USER = 'REQUEST_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const ERROR_USER = 'ERROR_USER'

export const REQUEST_USER_UPDATE = 'REQUEST_USER_UPDATE'
export const SUCCESS_USER_UPDATE = 'SUCCESS_USER_UPDATE'
export const ERROR_USER_UPDATE = 'ERROR_USER_UPDATE'

export const userUpdate = (name, email, password) => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_USER_UPDATE,
    })

    userUpdateRequest(name, email, password)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_USER_UPDATE,
            payload: res.user,
          })
        } else {
          dispatch({
            type: ERROR_USER_UPDATE,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_USER_UPDATE,
        })
      })
  }
}

export const resetPassword = (password, token) => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_RESET_PASSWORD,
    })

    resetPasswordRequest(password, token)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_RESET_PASSWORD,
          })
        } else {
          dispatch({
            type: ERROR_RESET_PASSWORD,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_RESET_PASSWORD,
        })
      })
  }
}

export const forgotPassword = (email) => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_FORGOT_PASSWORD,
    })

    forgotPasswordRequest(email)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_FORGOT_PASSWORD,
          })
        } else {
          dispatch({
            type: ERROR_FORGOT_PASSWORD,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_FORGOT_PASSWORD,
        })
      })
  }
}

export const userRegister = (name, email, password) => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_REGISTRATION,
    })

    registrationRequest(name, email, password)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_REGISTRATION,
            payload: res.user,
          })

          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken.split('Bearer ')[1])
        } else {
          dispatch({
            type: ERROR_REGISTRATION,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_REGISTRATION,
        })
      })
  }
}

export const userLogin = (email, password) => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_LOGIN,
    })

    loginRequest(email, password)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_LOGIN,
            payload: res.user,
          })

          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken.split('Bearer ')[1])
        } else {
          dispatch({
            type: ERROR_LOGIN,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_LOGIN,
        })
      })
  }
}

export const userLogout = () => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_LOGOUT,
    })

    logoutRequest()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_LOGOUT,
          })

          localStorage.removeItem('refreshToken')
          localStorage.removeItem('accessToken')
        } else {
          dispatch({
            type: ERROR_LOGOUT,
          })
        }
      }).catch(err => {
        dispatch({
          type: ERROR_LOGOUT,
        })
      })
  }
}

export const getUser = () => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_USER,
    })

    userRequest()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SUCCESS_USER,
            payload: res.user,
          })
        } else {
          dispatch({
            type: ERROR_USER,
          })
        }
      }).catch(err => {
        if (err.message === 'jwt expired') {
          refreshToken().then(res => {
            localStorage.setItem('refreshToken', res.refreshToken)
            localStorage.setItem('accessToken', res.accessToken.split('Bearer ')[1])
            dispatch(getUser())
          })
        } else {
          dispatch({
            type: ERROR_USER,
          })
        }
      })
  }
}