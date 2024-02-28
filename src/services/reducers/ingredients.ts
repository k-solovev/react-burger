import { IIngredient } from '../../utils/prop-types'
import { REQUEST_INGREDIENTS, SUCCESS_INGREDIENTS, ERROR_INGREDIENTS, TIngredientsActions } from '../actions/ingredients'

interface IInitialState {
  isLoading: boolean,
  isError: boolean,
  ingredients: IIngredient[] | []
}

const initialState: IInitialState = {
  isLoading: false,
  isError: false,
  ingredients: [],
}

export const ingredientsReducer = (state: IInitialState = initialState, action: TIngredientsActions) => {
  switch (action.type) {
    case REQUEST_INGREDIENTS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case SUCCESS_INGREDIENTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        ingredients: action.ingredients,
      }
    case ERROR_INGREDIENTS:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return {
        ...state,
      }
  }
}