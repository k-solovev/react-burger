import { IIngredient } from '../../utils/prop-types'

export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN'
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT'
export const SORT_INGREDIENTS: 'SORT_INGREDIENTS' = 'SORT_INGREDIENTS'

interface IAddBun {
  type: typeof ADD_BUN;
  payload: IIngredient
}

interface IAddIngredient {
  type: typeof ADD_INGREDIENT;
  payload: IIngredient
}

interface IDeleteIngredient {
  type: typeof DELETE_INGREDIENT;
  payload: number
}

interface ISortIngredient {
  type: typeof SORT_INGREDIENTS;
  from: number;
  to: number;
}

export type TConstructorActions =
  | IAddBun
  | IAddIngredient
  | IDeleteIngredient
  | ISortIngredient