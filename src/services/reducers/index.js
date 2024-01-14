import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { activeIngredientReducer } from './active-ingredient'
import { orderdetailsReducer } from './order-details'
import { constructorReducer } from './constructor'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  activeIngredient: activeIngredientReducer,
  orderDetails: orderdetailsReducer,
  burgerConstructor: constructorReducer,
})