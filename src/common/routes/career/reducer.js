import * as ActionTypes from './actions';

export default function currentStats(state = {
  isFetching: false,
  stats: [],
  error: {}
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
