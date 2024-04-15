import { REQUEST_INGREDIENTS, SUCCESS_INGREDIENTS, ERROR_INGREDIENTS } from '../actions/ingredients'
import { ingredientsReducer } from './ingredients'

describe('ingredients', () => {
  const initialState = {
    isLoading: false,
    isError: false,
    ingredients: [],
  }

  it('should initiate state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      ingredients: [],
    })
  })

  it('should request ingredients', () => {
    const action = { type: REQUEST_INGREDIENTS }

    expect(ingredientsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    })
  })

  it('should success ingredients', () => {
    const action = { type: SUCCESS_INGREDIENTS, ingredients: [{ _id: 1 }, { _id: 2 }, { _id: 3 }] }

    expect(ingredientsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      ingredients: action.ingredients,
    })
  })

  it('should request ingredients', () => {
    const action = { type: ERROR_INGREDIENTS }

    expect(ingredientsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    })
  })
})