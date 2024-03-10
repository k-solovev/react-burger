import { AppDispatch, RootState, TAppActions } from '../../utils/prop-types'
import { Middleware, MiddlewareAPI } from 'redux'
import { TGetFeedActions } from './middlewareTypes'
import { TFeedActions } from '../actions/feed';

export const socketMiddleware = (wsActions: TGetFeedActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TFeedActions) => {
      const { dispatch } = store;

      const { type, payload } = action;
      const { wsStart, wsStop, onOpen, onMessage, onError } = wsActions;

      if (type === wsStart) {
        socket = new WebSocket(payload);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: payload });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const json = JSON.parse(data)

          dispatch({ type: onMessage, payload: json.orders, total: json.total, totalToday: json.totalToday });
        };

        socket.onclose = event => {
          dispatch({ type: wsStop, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
}; 