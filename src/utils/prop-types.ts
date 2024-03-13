import { ThunkAction } from 'redux-thunk'
import { store } from '../services/store'
import { TActiveIngredientActions } from '../services/actions/active-ingredient'
import { TConstructorActions } from '../services/actions/constructor'
import { TIngredientsActions } from '../services/actions/ingredients'
import { TOrderDetailsActions } from '../services/actions/order-details'
import { TUserActions } from '../services/actions/user'
import { TOrderDetailsInfoActions } from '../services/actions/order-details-info'
import { TFeedActions } from '../services/actions/feed'

export interface IIngredient {
  _id: string,
  name: string,
  type: 'bun' | 'main' | 'sauce',
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
}

export interface ICompound extends IIngredient {
  count: number
}

export type TOrder = {
  ingredients: Array<string>,
  _id: string,
  name: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
}

export type TFeed = {
  orders: Array<TOrder>,
  totalOrders: number,
  totalToday: number
}

export type TAppActions =
  | TActiveIngredientActions
  | TConstructorActions
  | TIngredientsActions
  | TOrderDetailsActions
  | TUserActions
  | TOrderDetailsInfoActions
  | TFeedActions

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, never, TAppActions>