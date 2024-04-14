import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, SORT_INGREDIENTS, RESET_INGREDIENTS } from '../actions/constructor'
import { constructorReducer } from './constructor'

describe('burger constructor', () => {
  const initialState = {
    ingredients: [],
    bun: null,
  }

  it('should initiate state', () => {
    expect(constructorReducer(undefined, {})).toEqual({
      ingredients: [],
      bun: null,
    })
  })

  it('should add bun', () => {
    const ingredient = { type: 'bun' }
    const action = { type: ADD_BUN, payload: ingredient }

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      bun: ingredient,
    })
  })

  it('should add ingredient', () => {
    const ingredient = { type: 'main' }
    const action = { type: ADD_INGREDIENT, payload: ingredient }

    const state = constructorReducer(initialState, action)
    expect(state.ingredients.length).toBe(1)
  })

  it('should delete ingredient', () => {
    const action = { type: DELETE_INGREDIENT, payload: 0 }
    const stateWIngredient = {
      byn: null,
      ingredients: [{ _id: 'id_main', type: 'main', id: 28 }],
    }

    const newState = constructorReducer(stateWIngredient, action)
    expect(newState.ingredients.length).toBe(0)
  })

  it('should sort ingredients', () => {
    const action = { type: SORT_INGREDIENTS, from: 1, to: 0 }
    const stateWIngredients = {
      ...initialState,
      ingredients: [
        { _id: 28, type: 'sauce', id: 75222 },
        { _id: 35, type: 'main', id: 56533 },
      ],
    }

    const newState = constructorReducer(stateWIngredients, action)

    expect(newState.ingredients[0]._id).toBe(35)
    expect(newState.ingredients[1]._id).toBe(28)
  })

  it('should reset ingredients', () => {
    const action = { type: RESET_INGREDIENTS }
    const stateWIngredient = {
      ingredients: [{ type: 'main' }],
      bun: { type: 'bun' },
    }

    expect(constructorReducer(stateWIngredient, action)).toEqual(initialState)
  })
})