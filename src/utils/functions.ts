import { IIngredient } from './prop-types'

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export function getIngredientsByIds(allIngredients: IIngredient[], arrIds: string[]) {
  return allIngredients.filter(ingredient => {
    let isFound = false

    arrIds.forEach(id => {
      if (id === ingredient._id) {
        isFound = true
      }
    })

    if (isFound) {
      return true
    }
  })
}