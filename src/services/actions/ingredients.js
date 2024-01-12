import { getRequest } from '../../utils/burger-api'

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const SUCCESS_INGREDIENTS = 'SUCCESS_INGREDIENTS'
export const ERROR_INGREDIENTS = 'ERROR_INGREDIENTS'

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: REQUEST_INGREDIENTS,
    })
    getRequest().then(res => {
      if (res && res.success) {
        dispatch({
          type: SUCCESS_INGREDIENTS,
          ingredients: res.data,
        })
      } else {
        dispatch({
          type: ERROR_INGREDIENTS,
        })
      }
    }).catch(err => {
      dispatch({
        type: ERROR_INGREDIENTS,
      })
    })
  }
}