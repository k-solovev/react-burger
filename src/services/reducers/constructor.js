import { v4 as uuidv4 } from 'uuid';
import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT } from '../actions/constructor'

const initialState = {
  bun: null,
  ingredients: [],
}

export const constructorReducer = (state = initialState, action) => {
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
        ingredients: state.ingredients.filter(el => el._id !== action.payload),
      }
    default:
      return state
  }
}