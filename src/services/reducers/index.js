import { combineReducers } from 'redux';

const ingredientsReducer = () => {
  return []
}

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});

export default rootReducer;