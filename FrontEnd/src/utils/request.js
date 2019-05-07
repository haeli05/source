import { select } from 'redux-saga/effects'

const fetch = require('isomorphic-fetch')
const parseJSON = response => { return response.json() }
const getToken = state => state.getIn(['currentUserReducer', 'token'])

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  return response.text().then((text) => {
    let error
    try {
      const data = JSON.parse(text)
      error = new Error(data.error || response.statusText)
    } catch (err) {
      error = new Error(response.statusText)
    }
    throw error
  })
}

const queryParams = params =>
  Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')

const defaultHeaders = JSON.parse(
  JSON.stringify({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
)

function * request (path, options) {
  const url = path
  const token = yield select(getToken)

  if (token) {
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
    return yield fetch(url, { ...options, headers }).then(checkStatus).then(parseJSON)
  }
  return yield fetch(url, options).then(checkStatus).then(parseJSON)
}

export function * get (path, params = null, headers = null) {
  let path2 = path
  if (params) {
    path2 += (path.indexOf('?') === -1 ? '?' : '&') + queryParams(params)
  }

  const options = {
    credentials: 'same-origin',
    method: 'GET',
    headers: { ...defaultHeaders, ...headers }
  }
  return yield request(path2, options)
}

export const post = (path, params = null, headers = null) => {
  const options = {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(params),
    headers: { ...defaultHeaders, ...headers }
  }
  return request(path, options)
}

export const patch = (path, params = null, headers = null) => {
  const options = {
    credentials: 'same-origin',
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: { ...defaultHeaders, ...headers }
  }
  return request(path, options)
}

export function * deleteRequest (path, params = null, headers = null) {
  const options = {
    credentials: 'same-origin',
    method: 'DELETE',
    body: JSON.stringify(params),
    headers: { ...defaultHeaders, ...headers }
  }

  const url = path
  const token = yield select(getToken)

  if (token) {
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
    return yield fetch(url, { ...options, headers }).then(checkStatus)
  }
  return yield fetch(url, options).then(checkStatus)
};

export default {
  get,
  post,
  patch,
  deleteRequest
}
