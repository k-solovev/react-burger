import { checkResponse } from './functions'
const API_URL = 'https://norma.nomoreparties.space/api/'

export const getRequest = () => {
  return fetch(`${API_URL}ingredients`)
    .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
}

export const orderRequest = ingredients => {
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({ ingredients }),
  }).then(res => checkResponse(res))
}

export const forgotPasswordRequest = email => {
  return fetch(`${API_URL}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(res => checkResponse(res))
}

export const resetPasswordRequest = (password, token) => {
  return fetch(`${API_URL}password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then(res => checkResponse(res))
}

export const registrationRequest = (name, email, password,) => {
  return fetch(`${API_URL}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(res => checkResponse(res))
}

export const loginRequest = (email, password,) => {
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

export const userUpdateRequest = (name, email, password) => {
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