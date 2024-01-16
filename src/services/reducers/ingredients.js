import { REQUEST_INGREDIENTS, SUCCESS_INGREDIENTS, ERROR_INGREDIENTS } from '../actions/ingredients';

const initialState = {
  isLoading: false,
  isError: false,
  ingredients: [],
}

export const ingredientsReducer = (state = initialState, action) => {
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