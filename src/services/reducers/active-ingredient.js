import { SET_ACTIVE_INGREDIENT, REMOVE_ACTIVE_INGREDIENT } from '../actions/active-ingredient'

const initialState = {
  activeIngredient: null,
}

export const activeIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_INGREDIENT:
      return {
        ...state,
        activeIngredient: action.payload,
      }
    case REMOVE_ACTIVE_INGREDIENT:
      return {
        ...state,
        activeIngredient: null,
      }
    default:
      return state
  }
}