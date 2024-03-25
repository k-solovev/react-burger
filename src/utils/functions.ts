import { ICompound, IIngredient } from './prop-types'

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

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

export function statusFeedResult(status: string): string {
  switch (status) {
    case 'pending':
      return 'Готовится'
    case 'done':
      return 'Выполнен'
    default:
      return 'Создан'
  }
}