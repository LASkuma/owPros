import { combineReducers } from 'redux'
import * as ActionTypes from './actions'

const region = (state = 'cn', action) => {
  switch(action.type) {
    case ActionTypes.QUERY_REGION_CHANGE:
      return nextRegion(state);

    default:
      return state;
  }
};

const nextRegion = (current) => {
    switch(current) {
      case 'cn':
        return 'us';
      default:
        return 'cn';
    }
};

const error = (state = { dismissed: true, message: '' }, action) => {
  switch(action.type) {
    case ActionTypes.QUERY_ERROR_NEW:
      return {
        dismissed: false,
        message: action.message
      };

    case ActionTypes.QUERY_ERROR_DISMISS:
      return Object.assign({}, state, { dismissed: true });

    default:
      return state;
  }
}

const query = combineReducers({ region, error });
// Add async reducers
export default function createReducer(asyncReducers) {
  return combineReducers({
    query,
    ...asyncReducers
  });
};
