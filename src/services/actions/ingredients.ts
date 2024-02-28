import { getRequest } from '../../utils/burger-api'
import { IIngredient } from '../../utils/prop-types'
import { AppDispatch, AppThunk } from '../../utils/prop-types'

export const REQUEST_INGREDIENTS: 'REQUEST_INGREDIENTS' = 'REQUEST_INGREDIENTS'
export const SUCCESS_INGREDIENTS: 'SUCCESS_INGREDIENTS' = 'SUCCESS_INGREDIENTS'
export const ERROR_INGREDIENTS: 'ERROR_INGREDIENTS' = 'ERROR_INGREDIENTS'

interface IRequestIngredients {
  type: typeof REQUEST_INGREDIENTS
}

interface ISuccessIngredients {
  type: typeof SUCCESS_INGREDIENTS;
  ingredients: IIngredient[]
}

interface IErrorIngredients {
  type: typeof ERROR_INGREDIENTS
}

export type TIngredientsActions =
  | IRequestIngredients
  | ISuccessIngredients
  | IErrorIngredients

const requestIngredients = (): IRequestIngredients => ({ type: REQUEST_INGREDIENTS })
const successIngredients = (ingredients: IIngredient[]): ISuccessIngredients => ({ type: SUCCESS_INGREDIENTS, ingredients })
const errorIngredients = (): IErrorIngredients => ({ type: ERROR_INGREDIENTS })

export const getIngredients = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(requestIngredients())
    getRequest().then(res => {
      if (res && res.success) {
        dispatch(successIngredients(res.data))
      } else {
        dispatch(errorIngredients())
      }
    }).catch(err => {
      dispatch(errorIngredients())
    })
  }
}