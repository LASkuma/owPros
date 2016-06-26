import * as ActionTypes from './actions';

const initialState = {
  isFetching: false,
  stats: [],
  error: {},
  prefetchComplete: false
};

export default function currentStats(state = initialState, action) {
  // console.log(action);
  switch(action.type) {
    case ActionTypes.STATS_QUERY_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case ActionTypes.STATS_QUERY_SUCCESS:
      return Object.assign({}, state, { stats: action.response, isFetching: false });

    case ActionTypes.STATS_QUERY_FAILURE:
      return Object.assign({}, state, { error: action.error, isFetching: false });

    case ActionTypes.STATS_PREFETCH_REQUEST:
      return Object.assign({}, state, { prefetchComplete: false });

    case ActionTypes.STATS_PREFETCH_SUCCESS:
      return Object.assign({}, state, { stats: action.response, prefetchComplete: true });

    case ActionTypes.STATS_CLEAR:
      if (!state.prefetchComplete) {
        return Object.assign({}, state, initialState);
      }
      return state;

    default:
      return state;
  }
}
