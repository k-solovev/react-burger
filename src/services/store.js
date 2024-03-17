import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducers'
import { socketMiddleware } from './middleware/websocket'
import { getFeedActions, getUserOrdersActions } from './middleware/middlewareTypes'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(getFeedActions), socketMiddleware(getUserOrdersActions)))

export const store = createStore(rootReducer, enhancer)