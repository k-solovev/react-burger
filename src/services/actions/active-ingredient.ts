import { IIngredient } from '../../utils/prop-types'

export const SET_ACTIVE_INGREDIENT: 'SET_ACTIVE_INGREDIENT' = 'SET_ACTIVE_INGREDIENT'
export const REMOVE_ACTIVE_INGREDIENT: 'REMOVE_ACTIVE_INGREDIENT' = 'REMOVE_ACTIVE_INGREDIENT'

interface ISetActiveIngredient {
  type: typeof SET_ACTIVE_INGREDIENT;
  payload: IIngredient
}

interface IRemoveActiveIngredient {
  type: typeof REMOVE_ACTIVE_INGREDIENT;
  payload: IIngredient
}

export type TActiveIngredientActions =
  | ISetActiveIngredient
  | IRemoveActiveIngredient