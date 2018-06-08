import { jsonapiResult } from '../apiResult'

export const FILTER_UPDATE = 'FILTER_UPDATE'
export const REQUEST_CLIENTS = 'REQUEST_CLIENTS'
export const RECEIVE_CLIENTS = 'RECEIVE_CLIENTS'

export const filterUpdate = filterText => ({
  type: FILTER_UPDATE,
  filterText
})

export const requestClients = () => ({
  type: REQUEST_CLIENTS
})

export const receiveClients = json => {
  return {
    type: RECEIVE_CLIENTS,
    apiResult: json
  }
}

const fetchClients = () => dispatch => {
  dispatch(requestClients())
  return dispatch(receiveClients(jsonapiResult))
}

const shouldFetchClients = state => {
  if (state.clients.count === 0) {
    return true
  }
  if (state.clients.isFetching) {
    return false
  }
  return false
}

export const fetchClientsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchClients(getState())) {
    return dispatch(fetchClients())
  }
}
