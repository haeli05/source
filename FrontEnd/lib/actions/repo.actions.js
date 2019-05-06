'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.newRepo = newRepo
exports.addNewRepo = addNewRepo
exports.star = star
exports.unstar = unstar
exports.fetchFiles = fetchFiles
exports.addFiles = addFiles
exports.getRawBlob = getRawBlob
exports.addBlob = addBlob
exports.handleStar = handleStar
exports.fetchRepos = fetchRepos
exports.fetchRepo = fetchRepo
exports.addRepo = addRepo
exports.addRepos = addRepos
exports.fetchPull = fetchPull
exports.getSinglePull = getSinglePull
exports.addSinglePull = addSinglePull
exports.addPull = addPull
exports.fetchBranches = fetchBranches
exports.addBranches = addBranches
exports.newBranch = newBranch
exports.addBranch = addBranch
exports.newPull = newPull
exports.fetchSinglePull = fetchSinglePull
exports.acceptPull = acceptPull
exports.addPullAccept = addPullAccept
exports.rejectPull = rejectPull
exports.addPullReject = addPullReject
exports.newIssue = newIssue
exports.addIssue = addIssue
exports.setRepo = setRepo
exports.setContract = setContract
exports.fetchIssue = fetchIssue
exports.addIssueBlob = addIssueBlob
exports.fetchIssues = fetchIssues
exports.addIssues = addIssues
exports.starHandle = starHandle
exports.updateRepo = updateRepo

var _axios = require('axios')

var _axios2 = _interopRequireDefault(_axios)

var _history = require('../history')

var _history2 = _interopRequireDefault(_history)

var _config = require('../utils/config.js')

var _config2 = _interopRequireDefault(_config)

var _user = require('./user.actions')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// ec2-35-153-131-45.compute-1.amazonaws.com
function newRepo (repo) {
  var user = localStorage.getItem('user')
  var token = JSON.parse(user).token
  console.log('repo', repo, token)
  return function (dispatch) {
    _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/new', {
      name: repo.name,
      description: repo.description,
      import_url: repo.import_url,
      token: token }).then(function (res) {
      console.log('data', res.data)
      return dispatch(addNewRepo(res.data.repo))
    }).catch(function (err) {
      alert('error creating project')
    })
  }
}

function addNewRepo (repo) {
  return {
    type: 'NEW_REPO',
    data: repo
  }
}

function star (id) {
  return {
    type: 'STAR',
    id: id
  }
}

function unstar (id) {
  return {
    type: 'UNSTAR',
    id: id
  }
}

function fetchFiles (username, repoName) {
  return function (dispatch) {
    return _axios2.default.get('http://' + _config2.default.production_url + ':8001/api/repos/' + username + '/' + repoName).then(function (files, repo) {
      if (files.message === undefined) {
        if (files.data.repo === undefined) {
          dispatch(addFiles(files.data, 'empty', false))
        } else {
          console.log('files', files.data)
          dispatch(addFiles(files.data.glrepo, files.data.repo, false, files.data.repo.repoID, files.data.repo.cid))
        }
      } else if (files.message) {} else {
        dispatch(addFiles(null))
      }
    }).catch(function (err) {
      console.log('ERROR', err); _history2.default.push('/404')
    })
  }
}

function addFiles (files, repo, branches, id, cid) {
  return {
    type: 'ADD_FILES',
    files: files,
    repo: repo,
    branches: branches,
    id: id,
    cid: cid
  }
}

function getRawBlob (sha, repoName) {
  return function (dispatch) {
    return (0, _axios2.default)('http://' + _config2.default.production_url + ':8001/api/repos/raw/' + repoName + '/' + sha).then(function (res) {
      dispatch(addBlob(res.data.rawFile))
    })
  }
}

function addBlob (blob) {
  return {
    type: 'ADD_BLOB',
    blob: blob
  }
}

function handleStar (id) {
  return function (dispatch) {
    return (0, _axios2.default)('repos/' + id + '/star', 'post', { 'star_id': id }).then(function (res) {
      dispatch(fetchRepos(res))
    })
  }
}

function fetchRepos () {
  return function (dispatch) {
    return (0, _axios2.default)('http://' + _config2.default.production_url + ':8001/api/repos/').then(function (res) {
      console.log('REPOS', res.data)
      dispatch(addRepos(res.data))
    })
  }
}

function fetchRepo (username, repoName) {
  return function (dispatch) {
    return _axios2.default.get('http://' + _config2.default.production_url + ':8001/api/repos/' + username + '/' + repoName).then(function (res) {
      dispatch(addRepo(res.data))
    }).catch(function (err) {
      console.log('error', err); alert('Error Loading')
    })
  }
}

function addRepo (repo) {
  return {
    type: 'ADD_REPO',
    repo: repo
  }
}

function addRepos (repos) {
  return {
    type: 'ADD_REPOS',
    repos: repos
  }
}

function fetchPull (id) {
  return function (dispatch) {
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/listMerges', { id: id }).then(function (res) {
      dispatch(addPull(res.data.reqs))
    })
  }
}

function getSinglePull (iid, user, repoID) {
  return function (dispatch) {
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/', { id: repoID, iid: iid }).then(function (res) {
      console.log('fetched pull:', res)
      dispatch(addSinglePull(res.data.reqs))
    }).catch(function (err) {
      console.log('error', err)
      alert('error retrieving pull request')
    })
  }
}

function addSinglePull (pull) {
  return {
    type: 'ADD_SINGLE_PULL',
    pull: pull
  }
}

function addPull (pull) {
  return {
    type: 'ADD_PULL',
    pull: pull
  }
}

function fetchBranches (id) {
  return function (dispatch) {
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/branches', { id: id }).then(function (res) {
      dispatch(addBranches(res.data.branches))
    })
  }
}

function addBranches (branches) {
  return {
    type: 'ADD_BRANCHES',
    branches: branches
  }
}

function newBranch (id, SourceBranch, NewBranchName) {
  return function (dispatch) {
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/newbranch', {
      id: id,
      branch: NewBranchName,
      ref: SourceBranch
    }).then(function (res) {
      dispatch(addBranch(res.data.branch))
    }).catch(function (err) {
      console.log('ERROR', err.response.data); alert('Error creating new branch')
    })
  }
}

function addBranch (branch) {
  return {
    type: 'ADD_BRANCH',
    branch: branch
  }
}

function newPull (name, desc, target, source, id) {
  return function (dispatch) {
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/newPull', {
      auth: 'ahah',
      id: id,
      title: name,
      source_branch: source,
      target_branch: target,
      desc: desc
    }).then(function (res) {
      dispatch(addPull(res.data.pull))
    }).catch(function (err) {
      alert('Error creating pull request'); console.log(err)
    })
  }
}

function fetchSinglePull (id) {
  return function (dispatch) {
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/pull/' + id).then(function (res) {
      dispatch(addPull(res.data.pull))
    })
  }
}

function acceptPull () {
  return function (dispatch) {
    return _axios2.default.post('').then(function (res) {
      dispatch(addPullAccept())
    })
  }
}

function addPullAccept () {
  return {}
}

function rejectPull () {
  return function (dispatch) {
    return _axios2.default.post('').then(function (res) {
      dispatch(addPullReject())
    })
  }
}

function addPullReject () {
  return {}
}

function newIssue (Title, data, id, User, Bounty, time) {
  return function (dispatch) {
    console.log('DATA', data)
    return _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/issues/new/' + id, {
      title: Title,
      repoID: id,
      user: User,
      Timestamp: time,
      bounty: Bounty,
      _eos_account: User,
      data: data
    }).then(function (res) {
      console.log(res.data)

      dispatch(addIssue(res))
    }).catch(function (err) {
      console.log('Error', err); alert('Error creating Issue')
    })
  }
}

function addIssue (issue) {
  return {
    type: 'ADD_ISSUE',
    issue: issue
  }
}

function setRepo (username, data, cid) {
  console.log('setrepo', username, data, cid)
  var role_count = data.length
  var role_names = data.map(function (role) {
    return role.RoleName
  })
  var actions = data.map(function (role) {
    return role.ActionChecked.map(function (bool) {
      if (bool) return 1; else return 0
    })
  })
  actions = actions.concat.apply([], actions)
  var compensations = data.map(function (role) {
    return role.ActionSRC.map(function (n) {
      return parseInt(n)
    })
  })
  compensations = compensations.concat.apply([], compensations)
  var reputations = data.map(function (role) {
    return role.ActionREP.map(function (n) {
      return parseInt(n)
    })
  })
  reputations = reputations.concat.apply([], reputations)
  var thresholds = data.map(function (role) {
    return parseInt(role.ReputationRequired)
  })
  thresholds = thresholds.concat.apply([], thresholds)
  var d = {
    username: username,
    role_count: role_count,
    role_names: role_names,
    actions: actions,
    compensations: compensations,
    reputations: reputations,
    thresholds: thresholds
  }
  console.log('D', d)
  return function (dispatch) {
    _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/setRepo', {
      username: cid,
      role_count: role_count,
      role_names: role_names,
      actions: actions,
      compensations: compensations,
      reputations: reputations,
      thresholds: thresholds,
      cid: cid
    }).then(function (res) {
      console.log('RES', res)
      dispatch(setContract(res))
    }).catch(function (err) {
      console.log('error', err); alert('Error setting contract')
    })
  }
}

function setContract (empty) {
  return {
    type: 'SET_CONTRACT',
    empty: empty
  }
}

function fetchIssue (id, repoID) {
  return function (dispatch) {
    return _axios2.default.get('http://' + _config2.default.production_url + ':8001/api/issues/single/' + repoID + '/' + id).then(function (res) {
      dispatch(addIssueBlob(res.data.issue))
    }).catch(function (err) {
      console.log('Error', err); alert('Error fetching Issue')
    })
  }
}

function addIssueBlob (issue) {
  return {
    type: 'ADD_ISSUE_BLOB',
    issue: issue
  }
}

function fetchIssues (repoID) {
  return function (dispatch) {
    _axios2.default.get('http://' + _config2.default.production_url + ':8001/api/issues/all/' + repoID).then(function (res) {
      // alert(res.data.Issues);
      dispatch(addIssues(res.data.Issues))
    }).catch(function (err) {
      console.log('Error', err); alert('Error Fetching Issues')
    })
  }
}

function addIssues (issues) {
  return {
    type: 'ADD_ISSUES',
    issues: issues
  }
}

function starHandle (repoid, token, cid) {
  console.log('INDEX!', repoid)
  return function (dispatch) {
    _axios2.default.post('http://' + _config2.default.production_url + ':8001/api/repos/handleStar', { repoid: repoid, token: token, cid: cid }).then(function (res) {
      console.log('DA', res.data)
      dispatch(updateRepo(res.data.updated_repo))
      dispatch((0, _user.updateUserStarred)(res.data.user_clean))
    }).catch(function (err) {
      console.log('Error', err); alert('Error Staring Repo')
    })
  }
}

function updateRepo (repo) {
  return {
    type: 'UPDATE_REPO',
    repo: repo
  }
}
/****************************************************************************************/
