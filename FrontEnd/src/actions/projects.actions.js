import axios from 'axios'
import history from '../history'
import config from '../utils/config.js'
import { addError } from './error.actions.js'


/* ========================= BASIC PROJECT ACTIONS ========================= */

// New project
export function newProject (project) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addNewRepoStatus('PENDING'))
    axios.post(`${config.production_url}/api/project/new`, {
      name: project.name,
      description: project.description,
      token
    })
    .then(res => {
      console.log(res)
      return dispatch(addNewProject(res.data.project))
    })
    .catch(err => {
      console.log(err)
      dispatch(addError(err))
      return dispatch(addNewProjectStatus('ERROR'))
    })
  }
}
export function addNewProject (project) {
  return {
    type: 'NEW_PROJECT',
    data: project
  }
}
export function addNewProjectStatus (status) {
  return {
    type: 'NEW_PROJECT_STATUS',
    status: status
  }
}
