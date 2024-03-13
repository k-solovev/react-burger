import { ICompound, IIngredient } from './prop-types'

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

// export function getIngredientsByIds(allIngredients: IIngredient[], arrIds: string[]) {
//   return arrIds.flatMap(id => allIngredients.filter(ingredient => ingredient._id === id))
// }

export function getCompoundByIds(allIngredients: IIngredient[], arrIds: string[]) {
  const result: { [key: string]: ICompound } = {}

  arrIds.forEach(id => {
    const ingredient = allIngredients.find(item => item._id === id)
    if (ingredient) {
      if (result.hasOwnProperty(ingredient._id)) {
        result[ingredient._id].count++
      } else {
        result[ingredient._id] = { ...ingredient, count: 1 }
      }
    }
  })

  return result
}