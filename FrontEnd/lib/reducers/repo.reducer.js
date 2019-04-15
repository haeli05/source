"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  data: false,
  files: false,
  blob: false,
  branches: false,
  info: false,
  pulls: false,
  pull: false,
  id: false,
  cid: false,
  issues: false,
  blobissue: false,
  contract: false,
  repos: false
};

var RepositoryReducer = function RepositoryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_REPOS':
      {
        return {
          repos: action.repos
        };
      }
    case "STAR":
      return {
        data: [action.repos]
      };
    case "UNSTAR":
      return {
        data: [action.repos]
      };
    case "TOGGLE_STAR":
      return {
        data: [action.repos]
      };
    case "ADD_FILES":
      {
        return {
          files: action.files,
          info: action.repo,
          issues: state.issues,
          branches: action.branches,
          id: action.id,
          pulls: state.pulls,
          cid: action.cid
        };
      }
    case "ADD_BLOB":
      return {
        files: [].concat(_toConsumableArray(state.files)),
        blob: action.blob
      };
    case "NEW_REPO":
      {
        return {
          data: action.data
        };
      }
    case 'ADD_REPO':
      {
        return {
          info: action.repo
        };
      }
    case 'ADD_BRANCHES':
      {
        return {
          files: state.files,
          info: state.info,
          blob: state.blob,
          issues: state.issues,
          branches: action.branches,
          pulls: state.pulls,
          id: state.id,
          cid: state.cid
        };
      }
    case 'ADD_BRANCH':
      {
        return {
          new_branch: action.branch,
          files: state.files,
          info: state.info,
          issues: state.issues,
          blob: state.blob,
          branches: state.branches,
          pulls: state.pulls,
          id: state.id,
          cid: state.cid
        };
      }
    case 'ADD_PULL':
      {
        return {
          pulls: action.pull,
          issues: state.issues,
          new_branch: state.branch,
          files: state.files,
          info: state.info,
          blob: state.blob,
          id: state.id,
          branches: state.branches,
          cid: state.cid
        };
      }
    case 'ADD_SINGLE_PULL':
      {
        return {
          pull: action.pull
        };
      }
    case 'ADD_ISSUE':
      {
        return {};
      }
    case 'ADD_ISSUES':
      {
        return {
          pulls: state.pulls,
          new_branch: state.branch,
          files: state.files,
          info: state.info,
          blob: state.blob,
          id: state.id,
          branches: state.branches,
          issues: action.issues,
          cid: state.cid
        };
      }
    case 'ADD_ISSUE_BLOB':
      {
        return {
          blobissue: action.issue
        };
      }
    case 'SET_CONTRACT':
      {
        return {
          contract: true
        };
      }
    case 'UPDATE_REPO':
      {
        var new_repos = [];
        new_repos = Object.assign(new_repos, state.repos);
        var index = new_repos.findIndex(function (o) {
          return o.repoID === action.repo.repoID;
        });
        new_repos.splice(index, 1, action.repo);
        return {
          repos: new_repos
        };
      }
    default:
      return state;
  }
};

var getRepos = exports.getRepos = function getRepos(state) {
  return state.repos.repos;
};
var getRepo = exports.getRepo = function getRepo(state) {
  return state.repos.info;
};
var getFiles = exports.getFiles = function getFiles(state) {
  return state.repos.files;
};
var getBlob = exports.getBlob = function getBlob(state) {
  return state.repos.blob;
};
var getNewRepo = exports.getNewRepo = function getNewRepo(state) {
  return state.repos.data;
};
var getOrigin = exports.getOrigin = function getOrigin(state) {
  return state.repos.origin;
};
var getBranches = exports.getBranches = function getBranches(state) {
  return state.repos.branches;
};
var getPulls = exports.getPulls = function getPulls(state) {
  return state.repos.pulls;
};
var getID = exports.getID = function getID(state) {
  return state.repos.id;
};
var getContract = exports.getContract = function getContract(state) {
  return state.repos.contract;
};
var getPull = exports.getPull = function getPull(state) {
  return state.repos.pull;
};
var getIssues = exports.getIssues = function getIssues(state) {
  return state.repos.issues;
};
var getIssueBlob = exports.getIssueBlob = function getIssueBlob(state) {
  return state.repos.blobissue;
};
var getCID = exports.getCID = function getCID(state) {
  return state.repos.cid;
};

exports.default = RepositoryReducer;