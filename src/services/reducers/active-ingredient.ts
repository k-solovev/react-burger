import { SET_ACTIVE_INGREDIENT, REMOVE_ACTIVE_INGREDIENT, TActiveIngredientActions } from '../actions/active-ingredient'
import { IIngredient } from '../../utils/prop-types'

interface IInitialState {
  activeIngredient: IIngredient | null
}

const initialState: IInitialState = {
  activeIngredient: null,
}

export const activeIngredientReducer = (state: IInitialState = initialState, action: TActiveIngredientActions) => {
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