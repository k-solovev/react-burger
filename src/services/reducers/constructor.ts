import { v4 as uuidv4 } from 'uuid'
import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, SORT_INGREDIENTS, RESET_INGREDIENTS, TConstructorActions } from '../actions/constructor'
import { IIngredient } from '../../utils/prop-types'

interface IInitialState {
  bun: null | IIngredient
  ingredients: [] | IIngredient[]
}

const initialState: IInitialState = {
  bun: null,
  ingredients: [],
}

export const constructorReducer = (state: IInitialState = initialState, action: TConstructorActions) => {
  switch (action.type) {
    case ADD_BUN:
      return {
        ...state,
        bun: action.payload,
      }
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, { ...action.payload, id: uuidv4() }],
      }
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((el, i) => i !== action.payload),
      }
    case SORT_INGREDIENTS:
      const ingredientsCopy = [...state.ingredients]
      const [removedElement] = ingredientsCopy.splice(action.from, 1)
      ingredientsCopy.splice(action.to, 0, removedElement)

      return {
        ...state,
        ingredients: ingredientsCopy,
      }
    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: [],
        bun: null,
      }
    default:
      return state
  }
}