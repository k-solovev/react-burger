import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { activeIngredientReducer } from './active-ingredient'
import { orderdetailsReducer } from './order-details'
import { constructorReducer } from './constructor'
import { userReducer } from './user'
import { orderDetailsInfoReducer } from './order-details-info'
import { feedReducer } from './feed'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  activeIngredient: activeIngredientReducer,
  orderDetails: orderdetailsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
  detailedOrder: orderDetailsInfoReducer,
  orders: feedReducer,
})