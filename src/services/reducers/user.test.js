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
} from '../actions/user'
import { userReducer } from './user'

describe('user', () => {
  const initialState = {
    user: null,
    isLoading: false,
    isError: false,
    isLoggedIn: false,
  }

  it('should initiate state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  })

  it('should request registration', () => {
    const action = { type: REQUEST_REGISTRATION }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success registration', () => {
    const action = {
      type: SUCCESS_REGISTRATION,
      payload: {
        name: 'Петька',
        email: 'petka43@gmail.com',
      }
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      user: action.payload,
    })
  })

  it('should error registration', () => {
    const action = {
      type: ERROR_REGISTRATION,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })

  it('should request login', () => {
    const action = {
      type: REQUEST_LOGIN,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
      isLoggedIn: false,
    })
  })

  it('should success login', () => {
    const action = {
      type: SUCCESS_LOGIN,
      payload: {
        name: 'Петька',
        email: 'petka43@gmail.com',
      }
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      isLoggedIn: true,
      user: action.payload,
    })
  })

  it('should error login', () => {
    const action = {
      type: ERROR_LOGIN,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
      isLoggedIn: false,
    })
  })

  it('should request logout', () => {
    const action = {
      type: REQUEST_LOGOUT,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success logout', () => {
    const action = {
      type: SUCCESS_LOGOUT,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      isLoggedIn: false,
      user: null,
    })
  })

  it('should error logout', () => {
    const action = {
      type: ERROR_LOGOUT,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })

  it('should request user', () => {
    const action = {
      type: REQUEST_USER,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success user', () => {
    const action = {
      type: SUCCESS_USER,
      payload: {
        name: 'Петька',
        email: 'petka43@gmail.com',
      }
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      isLoggedIn: true,
      user: action.payload,
    })
  })

  it('should error user', () => {
    const action = {
      type: ERROR_USER,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
      user: null,
    })
  })

  it('should request forgot password', () => {
    const action = {
      type: REQUEST_FORGOT_PASSWORD,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success forgot password', () => {
    const action = {
      type: SUCCESS_FORGOT_PASSWORD,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
    })
  })

  it('should error forgot password', () => {
    const action = {
      type: ERROR_FORGOT_PASSWORD,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })

  it('should request reset password', () => {
    const action = {
      type: REQUEST_RESET_PASSWORD,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success reset password', () => {
    const action = {
      type: SUCCESS_RESET_PASSWORD,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
    })
  })

  it('should error reset password', () => {
    const action = {
      type: ERROR_RESET_PASSWORD,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })

  it('should request user update', () => {
    const action = {
      type: REQUEST_USER_UPDATE,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success user update', () => {
    const action = {
      type: SUCCESS_USER_UPDATE,
      payload: {
        name: 'Петька',
        email: 'petka43@gmail.com',
      }
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      user: action.payload,
    })
  })

  it('should error user update', () => {
    const action = {
      type: ERROR_USER_UPDATE,
    }

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })
})