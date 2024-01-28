import {
  registrationRequest,
  loginRequest,
  logoutRequest,
  userRequest,
  refreshToken,
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

export const REQUEST_USER = 'REQUEST_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const ERROR_USER = 'ERROR_USER'

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