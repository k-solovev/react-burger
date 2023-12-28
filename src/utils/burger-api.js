import { checkResponse } from './functions'
const API_URL = 'https://norma.nomoreparties.space/api/'

export const getIngredients = () => {
  return fetch(`${API_URL}ingredients`)
    .then(res => checkResponse(res))
    .catch((err) => {
      console.error(`Ошибка загрузки данных ${err}`)
      throw err
    })
}