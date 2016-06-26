import { CALL_API } from '../../middleware/api';

export const STATS_QUERY_REQUEST = 'STATS_QUERY_REQUEST';
export const STATS_QUERY_SUCCESS = 'STATS_QUERY_SUCCESS';
export const STATS_QUERY_FAILURE = 'STATS_QUERY_FAILURE';

export function getStats(query) {
  return (dispatch, getState) => {
    const { currentStats: { isFetching } } = getState();
    if (isFetching) {
      return;
    }
    dispatch(clearStats());
    dispatch(sendQuery(query));
  };
}

export function sendQuery({ region, battletag }) {
  return {
    [CALL_API]: {
      types: [ STATS_QUERY_REQUEST, STATS_QUERY_SUCCESS, STATS_QUERY_FAILURE ],
      endpoint: `/api/stats?plat=pc&region=${region}&battletag=${battletag}`
    }
  };
}

export const STATS_CLEAR = 'STATS_CLEAR';

function clearStats() {
  return {
    type: STATS_CLEAR
  };
}

export const STATS_PREFETCH_REQUEST = 'STATS_PREFETCH_REQUEST';
export const STATS_PREFETCH_SUCCESS = 'STATS_PREFETCH_SUCCESS';
export const STATS_PREFETCH_FAILURE = 'STATS_PREFETCH_FAILURE';

export function prefetchStats({ region, battletag }) {
  return {
    [CALL_API]: {
      types: [ STATS_PREFETCH_REQUEST, STATS_PREFETCH_SUCCESS, STATS_PREFETCH_FAILURE ],
      endpoint: `/api/career?region=${region}&battletag=${battletag}`
    }
  };
}
