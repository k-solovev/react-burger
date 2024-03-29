import { checkResponse } from './functions'
import { IIngredient, TOrder } from './prop-types'
const API_URL = 'https://norma.nomoreparties.space/api/'

type TServerResponce<T> = {
  success: boolean
} & T

type TIngredientsResponce = TServerResponce<{
  data: Array<IIngredient>
}>

type TOrderResponce = TServerResponce<{
  name: string;
  order: {
    number: number
  }
}>

type TUserResponce = TServerResponce<{
  user: {
    email: string
    name: string
  },
}>

type TRegAuthResponce = TUserResponce & {
  accessToken: string
  refreshToken: string
}

type TPassLogoutResponce = TServerResponce<{
  message: string
}>

type TOrderDetailsResponce = TServerResponce<{
  orders: TOrder[]
}>

export const getOrderDetailsRequest = (orderNumber: string) => {
  return fetch(`${API_URL}orders/${orderNumber}`)
    .then(res => checkResponse<TOrderDetailsResponce>(res))
}

export const getRequest = () => {
  return fetch(`${API_URL}ingredients`)
    .then(res => checkResponse<TIngredientsResponce>(res))
}

export const orderRequest = (ingredients: string[]) => {
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ ingredients }),
  }).then(res => checkResponse<TOrderResponce>(res))
}

export const forgotPasswordRequest = (email: string) => {
  return fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(res => checkResponse<TPassLogoutResponce>(res))
}

export const resetPasswordRequest = (password: string, token: string) => {
  return fetch(`${API_URL}password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then(res => checkResponse<TPassLogoutResponce>(res))
}

export const registrationRequest = (name: string, email: string, password: string,) => {
  return fetch(`${API_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(res => checkResponse<TRegAuthResponce>(res))
}

export const loginRequest = (email: string, password: string,) => {
  return fetch(`${API_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(res => checkResponse<TRegAuthResponce>(res))
}

export const logoutRequest = () => {
  return fetch(`${API_URL}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(res => checkResponse<TPassLogoutResponce>(res))
}

export const userRequest = () => {
  return fetch(`${API_URL}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }).then(res => checkResponse<TUserResponce>(res))
}

export const userUpdateRequest = (name: string, email: string, password: string) => {
  return fetch(`${API_URL}auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ name, email, password }),
  }).then(res => checkResponse<TRegAuthResponce>(res))
}

export const refreshToken = () => {
  return fetch(`${API_URL}auth/token`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(res => checkResponse<TRegAuthResponce>(res))
}