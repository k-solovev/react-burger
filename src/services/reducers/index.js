import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { activeIngredientReducer } from './active-ingredient'
import { orderdetailsReducer } from './order-details'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  activeIngredient: activeIngredientReducer,
  orderDetails: orderdetailsReducer,
})