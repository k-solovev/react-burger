import { SET_ACTIVE_INGREDIENT, REMOVE_ACTIVE_INGREDIENT } from '../actions/active-ingredient'
import { activeIngredientReducer } from './active-ingredient'

describe('active ingredients', () => {
  it('should initiate state', () => {
    expect(activeIngredientReducer(undefined, {})).toEqual({
      activeIngredient: null,
    })
  })

  it('should set active ingredient', () => {
    const initialState = { activeIngredient: null }
    const ingredient = { type: 'main' }
    const action = { type: SET_ACTIVE_INGREDIENT, payload: ingredient }

    expect(activeIngredientReducer(initialState, action)).toEqual({
      activeIngredient: ingredient,
    })
  })

  it('should remove active ingredient', () => {
    const initialState = { activeIngredient: null }

    expect(activeIngredientReducer(initialState, { type: REMOVE_ACTIVE_INGREDIENT })).toEqual({
      activeIngredient: null,
    })
  })
})