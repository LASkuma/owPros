import * as ActionTypes from './actions';

const initialState = {
  isFetching: false,
  stats: [],
  error: {}
};

export default function currentStats(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.STATS_QUERY_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case ActionTypes.STATS_QUERY_SUCCESS:
      return Object.assign({}, state, { stats: action.response, isFetching: false });

    case ActionTypes.STATS_QUERY_FAILURE:
      return Object.assign({}, state, { error: action.error, isFetching: false });

    case ActionTypes.STATS_CLEAR:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}
