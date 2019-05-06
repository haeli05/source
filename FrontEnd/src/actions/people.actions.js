import axios from 'axios'
import history from '../history'
import config from '../utils/config.js'
import { addError } from './error.actions.js'

/* ========================== FETCH USER AND USERS ========================== */

// Fetch people
export function fetchPeople (limit, tags, last, trending = 'no') {
  return (dispatch) => {
    dispatch(addPeopleStatus('PENDING'))
    axios.post(`${config.production_url}/api/search/100/${trending}`, {
      limit: limit,
      userId: last,
      tags: tags
    })
      .then(res => {
        return dispatch(addPeople(res.data.users))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addPeopleStatus('ERROR'))
      })
  }
}
export function addPeople (people) {
  return {
    type: 'FETCH_PEOPLE',
    data: people
  }
}
export function addPeopleStatus (status) {
  return {
    type: 'FETCH_PEOPLE_STATUS',
    status: status
  }
}

// Fetch person
export function fetchPerson (id) {
  return (dispatch) => {
    dispatch(addPersonStatus('PENDING'))
    return axios.get(`${config.production_url}/api/user/${id}`)
      .then(res => {
        dispatch(addPerson(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addPersonStatus('ERROR'))
      })
  }
}
export function addPerson (person) {
  return {
    type: 'FETCH_PERSON',
    data: person
  }
}
export function addPersonStatus (status) {
  return {
    type: 'FETCH_PERSON_STATUS',
    status: status
  }
}

// Fetch person for personChip.js
export function fetchPersonChip (id) {
  return (dispatch) => {
    return axios.get(`${config.production_url}/api/user/${id}`)
      .then(res => {
        dispatch(addPersonChip(res.data))
      })
      .catch(err => {
        return dispatch(addError(err))
      })
  }
}
export function addPersonChip (person) {
  return {
    type: 'FETCH_PERSON_CHIP',
    data: person
  }
}
