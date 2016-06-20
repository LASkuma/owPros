import axios from 'axios';

export const CALL_API = Symbol('Call API');

const callApi = (endpoint, queries) => {
  if (typeof queries !== undefined && queries.length > 0) {
    const query = queries[0];
    queries.shift();
    return axios.get(endpoint, { params: query })
      .then((response) => {
        return response;
      }, (err) => {
        if (queries.length === 0) {
          throw err;
        }
        return callApi(endpoint, queries);
      });
  }
  return axios.get(endpoint)
    .then((response) => {
      return response;
    }, (err) => {
      throw err;
    });
}

export default (store) => (next) => (action) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint, queries, types } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, queries).then(
    (response) => next(actionWith({
      response: response.data,
      type: successType
    })),
    (error) => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  );
}
