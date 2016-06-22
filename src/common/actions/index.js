export const QUERY_REGION_CHANGE = 'QUERY_REGION_CHANGE';

export function queryRegionChange() {
  return {
    type: QUERY_REGION_CHANGE
  };
}

export const QUERY_ERROR_NEW = 'QUERY_ERROR_NEW';
export const QUERY_ERROR_DISMISS = 'QUERY_ERROR_DISMISS';

export function newQueryError(message) {
  return {
    type: QUERY_ERROR_NEW,
    message
  };
}

export function dismissQueryError() { return {
    type: QUERY_ERROR_DISMISS
  };
}
