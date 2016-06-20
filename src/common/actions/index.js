import { CALL_API } from '../middleware/api';

export const STATS_QUERY_REQUEST = 'STATS_QUERY_REQUEST';
export const STATS_QUERY_SUCCESS = 'STATS_QUERY_SUCCESS';
export const STATS_QUERY_FAILURE = 'STATS_QUERY_FAILURE';

export function queryStats(battletag) {
  const queries = [{
    plat: 'pc',
    region: 'cn',
    battletag
  }, {
    plat: 'pc',
    region: 'us',
    battletag
  }];
  return {
    [CALL_API]: {
      types: [ STATS_QUERY_REQUEST, STATS_QUERY_SUCCESS, STATS_QUERY_FAILURE ],
      endpoint: '/api/stats',
      queries
    }
  };
}
