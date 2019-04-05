import axios from 'axios'
import history from '../history'
import config from '../utils/config.js';
import {addError} from './error.actions.js';

export function searchRequest(query,topics,sort) {
  return dispatch =>{
    dispatch(addSearchResultsStatus('PENDING'));
    axios.post(`${config.production_url}/api/search/${topics}/${sort}`,{
      text: query.text,
      tags: query.tags,
      userId: query.userID,
      ideaId: query.ideaID,
      projectId: query.projectID,
    })
    .then(res=>{
      return dispatch(addSearchResults(res.data));
    })
    .catch(err=>{
      dispatch(addError(err))
      dispatch(addSearchResultsStatus('ERROR'));
    });
  }
}
export function addSearchResults(results){
  return {
    type: "SEARCH_RESULTS",
    results
  }
}
export function addSearchResultsStatus(status){
  return {
    type: 'SEARCH_RESULTS_STATUS',
    status: status,
  }
}
