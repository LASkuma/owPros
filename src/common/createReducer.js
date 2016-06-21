import { combineReducers } from 'redux'
import * as ActionTypes from './actions'

const query = (state = { region: 'cn' }, action) => {
  switch(action.type) {
    case ActionTypes.QUERY_REGION_CHANGE:
      let nextRegion;
      switch(state.region) {
        case 'cn':
          nextRegion = 'us';
          break;
        default:
          nextRegion = 'cn';
      }
      return Object.assign({}, state, { region: nextRegion });

    default:
      return state;
  }
}
// Add async reducers
export default function createReducer(asyncReducers) {
  return combineReducers({
    query,
    ...asyncReducers
  })
}
