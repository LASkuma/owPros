import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from '../createReducer';
import api from '../middleware/api';
import DevTools from '../DevTools';

export function configureStore(initialState = {}) {
  let store = createStore(createReducer(), initialState, compose(
    applyMiddleware(thunk,api),
    DevTools.instrument()
  ))

  store.asyncReducers = {}

  if (process.env.NODE_ENV == 'development') {
    if (module.hot) {
      module.hot.accept('../routes/root', () =>
        store.replaceReducer(createReducer(store.asyncReducers))
      )
    }
  }

  return store
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
