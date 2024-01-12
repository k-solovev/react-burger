import { checkResponse } from './functions'
const API_URL = 'https://norma.nomoreparties.space/api/'

export const getRequest = () => {
  return fetch(`${API_URL}ingredients`)
    .then(res => checkResponse(res))
}