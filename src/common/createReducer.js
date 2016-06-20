import { combineReducers } from 'redux'
import * as ActionTypes from './actions'

function currentStats(state = {
  isFetching: false,
  stats: []
}, action) {
  switch(action.type) {
    case ActionTypes.STATS_QUERY_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case ActionTypes.STATS_QUERY_SUCCESS:
      return Object.assign({}, state, { stats: action.response, isFetching: false });
    default:
      return state;
  }
}
// Add async reducers
export default function createReducer(asyncReducers) {
  return combineReducers({
    currentStats,
    ...asyncReducers
  })
}
