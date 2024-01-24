import { checkResponse } from './functions'
const API_URL = 'https://norma.nomoreparties.space/api/'

export const getRequest = () => {
  return fetch(`${API_URL}ingredients`)
    .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
}

export const orderRequest = (ingredients) => {
  return fetch(`${API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients,
    }),
  }).then(res => checkResponse(res))
}