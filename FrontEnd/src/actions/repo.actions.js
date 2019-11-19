import axios from 'axios'
import history from '../history'
import config from '../utils/config.js'
import { addError } from './error.actions.js'
import { addVoteToUserObject } from './user.actions'
// ec2-35-153-131-45.compute-1.amazonaws.com

/* ================== FETCH REPO, REPOS, FILE, AND COMMITS ================== */

// Fetch repos
export function fetchRepos (limit, tags, last, trending = 'no') {
  return dispatch => {
    dispatch(addReposStatus('PENDING'))
    axios.post(`${config.production_url}/api/search/001/${trending}`, {
      limit: limit,
      projectId: last,
      tags: tags
    })
      .then(res => {
        return dispatch(addRepos(res.data.projects))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addReposStatus('ERROR'))
      })
  }
}
export function addRepos (repos) {
  return {
    type: 'FETCH_REPOS',
    data: repos
  }
}
export function addReposStatus (status) {
  return {
    type: 'FETCH_REPOS_STATUS',
    status: status
  }
}

// Fetch a single repo by ID
export function fetchRepo (author, id, parent) {
  return dispatch => {
    dispatch(addRepoStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/get/${author}/${id}/${parent}/`)
      .then(res => {
        return dispatch(addRepo(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addRepoStatus('ERROR'))
      })
  }
}
export function addRepo (repo) {
  return {
    type: 'FETCH_REPO',
    data: repo
  }
}
export function addRepoStatus (status) {
  return {
    type: 'FETCH_REPO_STATUS',
    status: status
  }
}

// Fetch a file from a repo
export function fetchFile (repoID, fileSHA) {
  return dispatch => {
    dispatch(addFileStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/raw/${repoID}/${fileSHA}`)
      .then(res => {
        return dispatch(addFile(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addFileStatus('ERROR'))
      })
  }
}
export function addFile (file) {
  return {
    type: 'FETCH_FILE',
    data: file
  }
}
export function addFileStatus (status) {
  return {
    type: 'FETCH_FILE_STATUS',
    status: status
  }
}

// Fetch a repo's commits
export function fetchCommits (gitlabID) {
  return dispatch => {
    dispatch(addCommitsStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/commits/${gitlabID}`)
      .then(res => {
        return dispatch(addCommits(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addCommitsStatus('ERROR'))
      })
  }
}
export function addCommits (commits) {
  return {
    type: 'FETCH_COMMITS',
    data: commits
  }
}
export function addCommitsStatus (status) {
  return {
    type: 'FETCH_COMMITS_STATUS',
    status: status
  }
}

/* =========================== BASIC REPO ACTIONS =========================== */

// New project
export function newRepo (repo) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addNewRepoStatus('PENDING'))
    axios.post(`${config.production_url}/api/project/new`, {
      name: repo.name,
      description: repo.description,
      token
    })
    .then(res => {
      console.log(res)
      return dispatch(addNewRepo(res.data.project))
    })
    .catch(err => {
      console.log(err)
      dispatch(addError(err))
      return dispatch(addNewRepoStatus('ERROR'))
    })
  }
}
export function addNewRepo (repo) {
  return {
    type: 'NEW_REPO',
    data: repo
  }
}
export function addNewRepoStatus (status) {
  return {
    type: 'NEW_REPO_STATUS',
    status: status
  }
}

// Vote on repo or issue or issue comment
export function repoVote (up, id, type) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addVoteStatus('PENDING'))
    if (type === 'repo') {
      var url = `${config.production_url}/api/repos/vote/${up}/${id}`
    } else if (type === 'issue' || type === 'blob') {
      var url = `${config.production_url}/api/issues/vote/${type}/${up}/${id}`
    }
    axios.post(url, { token })
      .then(res => {
        console.log(res)
        return dispatch(addVoteStatus('SUCCESS'))
      })
      .then(res => {
        return dispatch(addVoteToUserObject(type, id, up))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addVoteStatus('ERROR'))
      })
  }
}
export function addVoteStatus (status) {
  return {
    type: 'VOTE_STATUS',
    status: status
  }
}

// Fork project
export function forkRepo (gitlabID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addForkStatus('PENDING'))
    axios.post(`${config.production_url}/api/repos/fork/${gitlabID}`, {
      token
    })
      .then(res => {
        return dispatch(addFork(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addForkStatus('ERROR'))
      })
  }
}
export function addFork (data) {
  return {
    type: 'FORK',
    data: data
  }
}
export function addForkStatus (status) {
  return {
    type: 'FORK_STATUS',
    status: status
  }
}

// TODO:
/* Star
export function starProject(repoID) {
  let user = localStorage.getItem(`user`);
  let recipient = JSON.parse(user).username;
  let token = JSON.parse(user).token;
  return dispatch => {
    axios.post(`${config.production_url}/api/repos/handleStar`,{
      id: repoID,
      recipient: recipient,
      token
    })
    .then(res => {
    })
    .catch(err => {
      dispatch(addError(err))
    })
  }
}
export function addStarStatus(status) {
  return {
    type: 'STAR_STATUS',
    status: status
  }
}
*/

// Set contracts
export function setContracts (contracts) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addSetContractsStatus('PENDING'))
    axios.post(`${config.production_url}/api/repos/setRepo`, {
      role_count: contracts.roleCount,
      role_names: contracts.roleNames,
      actions: contracts.actions,
      compensations: contracts.compensations,
      reputations: contracts.reputations,
      thresholds: contracts.thresholds,
      id: contracts.id,
      token
    })
      .then(res => {
        return dispatch(addSetContractsStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSetContractsStatus('ERROR'))
      })
  }
}
export function addSetContractsStatus (status) {
  return {
    type: 'SET_CONTRACTS_STATUS',
    status: status
  }
}

// Fetch project balance
export function fetchBalance (id) {
  return dispatch => {
    dispatch(addFetchBalanceStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/balance/${id}`)
      .then(res => {
        return dispatch(addBalance(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addFetchBalanceStatus('ERROR'))
      })
  }
}
export function addBalance (balance) {
  return {
    type: 'FETCH_BALANCE',
    data: balance
  }
}
export function addFetchBalanceStatus (status) {
  return {
    type: 'FETCH_BALANCE_STATUS',
    status: status
  }
}

/* ============================= BRANCH ACTIONS ============================= */

// Fetch all branches of a repo
export function fetchBranches (username, project_name) {
  return dispatch => {
    dispatch(addBranchesStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/branch/${username}/${project_name}`)
      .then(res => {
        return dispatch(addBranches(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addBranchesStatus('ERROR'))
      })
  }
}
export function addBranches (branches) {
  return {
    type: 'FETCH_BRANCHES',
    data: branches
  }
}
export function addBranchesStatus (status) {
  return {
    type: 'FETCH_BRANCHES_STATUS',
    status: status
  }
}

// Fetch a single branch of a repo
export function fetchBranch (username, project_name, branch_name) {
  return dispatch => {
    dispatch(addBranchStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/branch/${username}/${project_name}/${branch_name}`)
      .then(res => {
        return dispatch(addBranch(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addBranchStatus('ERROR'))
      })
  }
}
export function addBranch (branch) {
  return {
    type: 'FETCH_BRANCH',
    data: branch
  }
}
export function addBranchStatus (status) {
  return {
    type: 'FETCH_BRANCH_STATUS',
    status: status
  }
}

// New branch
export function newBranch (gitlabID, branch, ref) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addSubmitBranchStatus('PENDING'))
    axios.post(`${config.production_url}/api/repos/newBranch`, {
      gitlabID: gitlabID,
      branch: branch,
      ref: ref,
      token
    })
      .then(res => {
        return dispatch(addSubmitBranchStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitBranchStatus('ERROR'))
      })
  }
}
export function addSubmitBranchStatus (status) {
  return {
    type: 'SUBMIT_BRANCH_STATUS',
    status: status
  }
}

// Delete a branch
export function deleteBranch (gitlabID, branch, auth) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addSubmitBranchStatus('PENDING'))
    axios.post(`${config.production_url}/api/repos/delBranch`, {
      gitlabID: gitlabID,
      branch: branch,
      auth: auth,
      token
    })
      .then(res => {
        return dispatch(addSubmitBranchStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitBranchStatus('ERROR'))
      })
  }
}

/* ========================= MERGE REQUEST ACTIONS ========================= */

// Fetch all the merge requests of a repo
export function fetchMergeRequests (gitlabID) {
  return dispatch => {
    dispatch(addMergesStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/merge/${gitlabID}`)
      .then(res => {
        return dispatch(addMerges(res.data.merges))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addMergesStatus('ERROR'))
      })
  }
}
export function addMerges (merges) {
  return {
    type: 'FETCH_MERGES',
    data: merges
  }
}
export function addMergesStatus (status) {
  return {
    type: 'FETCH_MERGES_STATUS',
    status: status
  }
}

// Fetch a single merge request of a repo
export function fetchMergeRequest (gitlabID, id) {
  return dispatch => {
    dispatch(addMergeStatus('PENDING'))
    axios.get(`${config.production_url}/api/repos/merge/${gitlabID}/${id}`)
      .then(res => {
        return dispatch(addMerge(res.data.merges))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addMergeStatus('ERROR'))
      })
  }
}
export function addMerge (merge) {
  return {
    type: 'FETCH_MERGE',
    data: merge
  }
}
export function addMergeStatus (status) {
  return {
    type: 'FETCH_MERGE_STATUS',
    status: status
  }
}

// New merge request
export function newMergeRequest (mergeRequest) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addSubmitMergeRequestStatus('PENDING'))
    axios.post(`${config.production_url}/api/repos/merge/${mergeRequest.gitlabID}`, {
      title: mergeRequest.title,
      source_branch: mergeRequest.source_branch,
      target_branch: mergeRequest.target_branch,
      asignee_id: mergeRequest.asignee_id,
      desc: mergeRequest.desc,
      token
    })
      .then(res => {
        return dispatch(addSubmitMergeRequest(res.data.pull))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitMergeRequestStatus('ERROR'))
      })
  }
}

// Update merge request
export function updateMergeRequest (mergeRequest) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addSubmitMergeRequestStatus('PENDING'))
    axios.put(`${config.production_url}/api/repos/merge/${mergeRequest.gitlabID}/${mergeRequest.id}`, {
      title: mergeRequest.title,
      desc: mergeRequest.desc,
      token
    })
      .then(res => {
        return dispatch(addSubmitMergeRequest(res.data.pull))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitMergeRequestStatus('ERROR'))
      })
  }
}

// Send submit merge status/response to reducer
export function addSubmitMergeRequest (mergeRequest) {
  return {
    type: 'SUBMIT_MERGE',
    data: mergeRequest
  }
}
export function addSubmitMergeRequestStatus (status) {
  return {
    type: 'SUBMIT_MERGE_STATUS',
    status: status
  }
}

// Accept or delete merge request
export function acceptOrDeleteMergeRequest (data) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addAcceptOrDeleteMergeRequestStatus('PENDING'))
    if (data.type === 'accept') {
      axios.post(`${config.production_url}/api/repos/merge/${data.gitlabID}/${data.id}`, {
        msg: data.commitMsg,
        token
      })
        .then(res => {
          return dispatch(addAcceptOrDeleteMergeRequest(res.data))
        })
        .catch(err => {
          dispatch(addError(err))
          return dispatch(addAcceptOrDeleteMergeRequestStatus('ERROR'))
        })
    } else if (data.type === 'delete') {
      axios.delete(`${config.production_url}/api/repos/merge/${data.gitlabID}/${data.id}`, {
        data: {
          token
        }
      })
        .then(res => {
          return dispatch(addAcceptOrDeleteMergeRequest(res.data))
        })
        .catch(err => {
          dispatch(addError(err))
          return dispatch(addAcceptOrDeleteMergeRequestStatus('ERROR'))
        })
    } else {
      return dispatch(addAcceptOrDeleteMergeRequestStatus('ERROR'))
    }
  }
}
export function addAcceptOrDeleteMergeRequest (res) {
  return {
    type: 'ACCEPT_DELETE_MERGE',
    data: res
  }
}
export function addAcceptOrDeleteMergeRequestStatus (status) {
  return {
    type: 'ACCEPT_DELETE_MERGE_STATUS',
    status: status
  }
}

/* ============================= ISSUES ACTIONS ============================= */

// Fetch all issues of a repo
export function fetchIssues (id) {
  return dispatch => {
    dispatch(addIssuesStatus('PENDING'))
    axios.post(`${config.production_url}/api/issues`, {
      id: id
    })
      .then(res => {
        return dispatch(addIssues(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIssuesStatus('ERROR'))
      })
  }
}
export function addIssues (issues) {
  return {
    type: 'FETCH_ISSUES',
    data: issues
  }
}
export function addIssuesStatus (status) {
  return {
    type: 'FETCH_ISSUES_STATUS',
    status: status
  }
}

// Fetch a single issue of a repo
export function fetchIssue (issueID) {
  return dispatch => {
    dispatch(addIssueStatus('PENDING'))
    axios.get(`${config.production_url}/api/issues/${issueID}`)
      .then(res => {
        return dispatch(addIssue(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIssueStatus('ERROR'))
      })
  }
}
export function addIssue (issue) {
  return {
    type: 'FETCH_ISSUE',
    data: issue
  }
}
export function addIssueStatus (status) {
  return {
    type: 'FETCH_ISSUE_STATUS',
    status: status
  }
}

// New issue
export function newIssue (issue) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addSubmitIssueStatus('PENDING'))
    axios.post(`${config.production_url}/api/issues/new`, {
      title: issue.title,
      bounty: issue.bounty,
      repoID: issue.repoID,
      tags: issue.tags,
      body: issue.body,
      stringBody: issue.stringBody,
      token
    })
      .then(res => {
        return dispatch(addSubmitIssue(res.data.newIssue))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitIssueStatus('ERROR'))
      })
  }
}
export function addSubmitIssue (issue) {
  return {
    type: 'SUBMIT_ISSUE',
    data: issue
  }
}
export function addSubmitIssueStatus (status) {
  return {
    type: 'SUBMIT_ISSUE_STATUS',
    status: status
  }
}

// Comment on an issue
export function commentIssue (comment, issueID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return (dispatch) => {
    dispatch(addSubmitCommentStatus('PENDING'))
    return axios.post(`${config.production_url}/api/issues/newBlob/${issueID}`, {
      body: comment.body,
      stringBody: comment.stringBody,
      token
    })
      .then(res => {
        dispatch(addSubmitCommentStatus('SUCCESS'))
        return dispatch(fetchIssue(issueID))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitCommentStatus('ERROR'))
      })
  }
}

// Edit a comment on an issue
export function editCommentIssue (body, stringBody, issueID, blobID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return (dispatch) => {
    dispatch(addSubmitCommentStatus(blobID))
    return axios.post(`${config.production_url}/api/issues/editBlob/${blobID}`, {
      body: body,
      stringBody: stringBody,
      token
    })
      .then(res => {
        dispatch(addSubmitCommentStatus('SUCCESS'))
        return dispatch(fetchIssue(issueID))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitCommentStatus('ERROR'))
      })
  }
}

// Delete a comment on an issue
export function deleteCommentIssue (issueID, blobID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return (dispatch) => {
    dispatch(addSubmitCommentStatus(blobID))
    return axios.post(`${config.production_url}/api/issues/del/${issueID}/${blobID}`, {
      token
    })
      .then(res => {
        dispatch(addSubmitCommentStatus('SUCCESS'))
        return dispatch(fetchIssue(issueID))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addSubmitCommentStatus('ERROR'))
      })
  }
}

// Send comment status to reducer
export function addSubmitCommentStatus (status) {
  return {
    type: 'SUBMIT_COMMENT_STATUS',
    status: status
  }
}

// Function closes an issue
export function closeIssue () {}

/* ================================== MISC ================================== */

// Clear the state (this is needed temporarily for trees to work)
export function clearRepoState () {
  return {
    type: 'CLEAR_REPO_STATE'
  }
}

/* ================================== OLD ================================== */
/*

// Fetch all pulls from a project
export function fetchPulls(id){
  return (dispatch) =>{
    return axios.post(`${config.production_url}/api/repos/listMerges`,{gitlabID:id}).then(res=>{
      dispatch(addPull(res.data.reqs))
    })
  }
}
export function addPull(pull){
  return{
    type: "ADD_PULL",
    pull
  }
}

// Get a single pull from a project
export function getSinglePull(iid, user, repoID){
  return(dispatch) =>{
    return axios.post(`${config.production_url}/api/repos/getSinglePull`,
      {id:repoID,iid:iid}
    ).then(res=>{
      dispatch(addSinglePull(res.data.reqs))
    }).catch(err=>{
      console.log("error", err);
      alert("error retrieving pull request");
    })
  }
}
export function addSinglePull(pull){
  return{
    type: "ADD_SINGLE_PULL",
    pull
  }
}

//
export function newPull(name,desc,target,source,id,asignee,description){
  return (dispatch)=>{
    return axios.post(`${config.production_url}/api/repos/newPull`,{
      auth: "ahah",
      gitlabID: id,
      title: name,
      source_branch: source,
      target_branch: target,
      desc: desc,
      asignee_id:asignee,
      desc: description
    }).then(res=>{
      dispatch(addPull(res.data.pull));
    })
    .catch(err=>{alert("Error creating pull request"); console.log(err)})
  }
}

export function fetchSinglePull(id){
  return(dispatch)=>{
    return axios.post(`${config.production_url}/api/repos/getSinglePull`,{
      gitlabID:id
    }).then(res=>{
      dispatch(addPull(res.data.pull));
    })
  }
}
export function acceptPull(){
 return (dispatch)=>{
   return axios.post(``).then(res=>{
     dispatch(addPullAccept())
   })
 }
}
export function addPullAccept(){
  return{
  }
}

export function rejectPull(){
  return (dispatch)=>{
    return axios.post(``).then(res=>{
      dispatch(addPullReject())
    })
  }
}

export function addPullReject(){
  return{

  }
}

// Set the contracts for a project
export function setRepo(username,data,id,token){
  let roleCount = data.length;
  let roleNames = data.map(role=>{return role.RoleName});
  let actions = data.map(role=>{
    return role.ActionChecked.map(bool=>{
      if(bool) return 1;
      else return 0;
    })
  })
  actions=actions.concat.apply([],actions);
  let compensations = data.map(role=>{return role.ActionSRC.map(n=>{return parseInt(n)})});
  compensations=compensations.concat.apply([],compensations);
  let reputations=data.map(role=>{return role.ActionREP.map(n=>{return parseInt(n)})});
  reputations=reputations.concat.apply([],reputations);
  let thresholds = data.map(role=>{return parseInt(role.ReputationRequired)});
  thresholds=thresholds.concat.apply([],thresholds);
  return (dispatch) =>{
    axios.post(`${config.production_url}/api/repos/setRepo`,{
      token,
      roleCount,
      roleNames,
      actions,
      compensations,
      reputations,
      thresholds,
      id
    }).then(res=>{
      dispatch(setContract(res));
    }).catch(err=>{console.log("error",err); alert("Error setting contract")})
  }
}
export function setContract(empty){
  return{
    type: `SET_CONTRACT`,
    empty
  }
}

*/
