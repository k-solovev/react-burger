import { checkResponse } from './functions'
import { IIngredient } from './prop-types'
const API_URL = 'https://norma.nomoreparties.space/api/'

export const getRequest = () => {
  return fetch(`${API_URL}ingredients`)
    .then(res => checkResponse(res))
}

export const orderRequest = (ingredients: IIngredient[]) => {
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ ingredients }),
  }).then(res => checkResponse(res))
}

export const forgotPasswordRequest = (email: string) => {
  return fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(res => checkResponse(res))
}

export const resetPasswordRequest = (password: string, token: string) => {
  return fetch(`${API_URL}password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then(res => checkResponse(res))
}

export const registrationRequest = (name: string, email: string, password: string,) => {
  return fetch(`${API_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(res => checkResponse(res))
}

export const loginRequest = (email: string, password: string,) => {
  return fetch(`${API_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(res => checkResponse(res))
}

export const logoutRequest = () => {
  return fetch(`${API_URL}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(res => checkResponse(res))
}

export const userRequest = () => {
  return fetch(`${API_URL}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }).then(res => checkResponse(res))
}

export const userUpdateRequest = (name: string, email: string, password: string) => {
  return fetch(`${API_URL}auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ name, email, password }),
  }).then(res => checkResponse(res))
}

export const refreshToken = () => {
  return fetch(`${API_URL}auth/token`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(res => checkResponse(res))
}