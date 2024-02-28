import { ThunkAction } from 'redux-thunk'
import { store } from '../services/store'
import { TActiveIngredientActions } from '../services/actions/active-ingredient'
import { TConstructorActions } from '../services/actions/constructor'
import { TIngredientsActions } from '../services/actions/ingredients'
import { TOrderDetailsActions } from '../services/actions/order-details'
import { TUserActions } from '../services/actions/user'

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

export type TAppActions =
  | TActiveIngredientActions
  | TConstructorActions
  | TIngredientsActions
  | TOrderDetailsActions
  | TUserActions

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, never, TAppActions>