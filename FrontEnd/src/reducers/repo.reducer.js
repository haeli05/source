const initialState = {
  // Fetch repo, repos, file, and commits
  repos: false,
  fetchReposStatus: false,
  repo: false,
  fetchRepoStatus: false,
  file: false,
  fetchFileStatus: false,
  commits: false,
  commitsStatus: false,
  // Basic repo actions
  newRepo: false,
  newRepoStatus: false,
  voteStatus: false,
  fork: false,
  forkStatus: false,
  starStatus: false,
  setContractsStatus: false,
  balance: false,
  fetchBalanceStatus: false,
  // Branch actions
  branches: false,
  fetchBranchesStatus: false,
  branch: false,
  fetchBranchStatus: false,
  submitBranchStatus: false,
  // Merge request actions
  merges: false,
  fetchMergesStatus: false,
  merge: false,
  fetchMergeStatus: false,
  submitMerge: false,
  submitMergeStatus: false,
  acceptDeleteMerge: false,
  aceeptDeleteMergeStatus: false,
  // Issues actions
  issues: false,
  fetchIssuesStatus: false,
  issue: false,
  fetchIssueStatus: false,
  submitIssue: false,
  submitIssueStatus: false,
  issueCommentStatus: false
}

const RepositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    /* ---------------- Fetch repo, repos, file, and commits ---------------- */
    case 'FETCH_REPOS':
      return {
        repos: action.data,
        fetchReposStatus: 'SUCCESS',
        newRepo: false,
        newRepoStatus: false
      }
    case 'FETCH_REPOS_STATUS':
      return {
        repos: false,
        fetchReposStatus: action.status,
        newRepo: false,
        newRepoStatus: false
      }
    case 'FETCH_REPO':
      return {
        repo: action.data,
        fetchRepoStatus: 'SUCCESS',
        newRepo: false,
        newRepoStatus: false
      }
    case 'FETCH_REPO_STATUS':
      return {
        repo: false,
        fetchRepoStatus: action.status,
        newRepo: false,
        newRepoStatus: false
      }
    case 'FETCH_FILE':
      return Object.assign({}, state, {
        file: action.data,
        fetchFileStatus: 'SUCCESS'
      })
    case 'FETCH_FILE_STATUS':
      return Object.assign({}, state, {
        file: false,
        fetchFileStatus: action.status
      })
    case 'FETCH_COMMITS':
      return Object.assign({}, state, {
        commits: action.data,
        commitsStatus: 'SUCCESS'
      })
    case 'FETCH_COMMITS_STATUS':
      return Object.assign({}, state, {
        commits: false,
        commitsStatus: action.status
      })
    /* ------------------------- Basic repo actions ------------------------- */
    case 'NEW_REPO':
      return {
        newRepo: action.data,
        newRepoStatus: 'SUCCESS'
      }
    case 'NEW_REPO_STATUS':
      return {
        newRepo: false,
        newRepoStatus: action.status
      }
    case 'VOTE_STATUS':
      return Object.assign({}, state, {
        voteStatus: action.status
      })
    case 'FORK':
      return Object.assign({}, state, {
        fork: action.data,
        forkStatus: 'SUCCESS'
      })
    case 'FORK_STATUS':
      return Object.assign({}, state, {
        fork: false,
        forkStatus: action.status
      })
    case 'STAR_STATUS':
      return Object.assign({}, state, {
        starStatus: action.status
      })
    case 'SET_CONTRACTS_STATUS':
      return {
        // TODO
      }
    case 'FETCH_BALANCE':
      return Object.assign({}, state, {
        balance: action.data,
        fetchBalanceStatus: 'SUCCESS'
      })
    case 'FETCH_BALANCE_STATUS':
      return Object.assign({}, state, {
        balance: false,
        fetchBalanceStatus: action.status
      })
    /* --------------------------- Branch actions --------------------------- */
    case 'FETCH_BRANCHES':
      return Object.assign({}, state, {
        branches: action.data,
        fetchBranchesStatus: 'SUCCESS'
      })
    case 'FETCH_BRANCHES_STATUS':
      return Object.assign({}, state, {
        branches: false,
        fetchBranchesStatus: action.status,
        submitBranchStatus: false
      })
    case 'FETCH_BRANCH':
      return Object.assign({}, state, {
        branch: action.data,
        fetchBranchStatus: 'SUCCESS'
      })
    case 'FETCH_BRANCH_STATUS':
      return Object.assign({}, state, {
        branch: false,
        fetchBranchStatus: action.status
      })
    case 'SUBMIT_BRANCH_STATUS':
      return Object.assign({}, state, {
        submitBranchStatus: action.status
      })
    /* ----------------------- Merge request actions ----------------------- */
    case 'FETCH_MERGES':
      return Object.assign({}, state, {
        merges: action.data,
        fetchMergesStatus: 'SUCCESS'
      })
    case 'FETCH_MERGES_STATUS':
      return Object.assign({}, state, {
        merges: false,
        fetchMergesStatus: action.status
      })
    case 'FETCH_MERGE':
      return Object.assign({}, state, {
        merge: action.data,
        fetchMergeStatus: 'SUCCESS'
      })
    case 'FETCH_MERGE_STATUS':
      return Object.assign({}, state, {
        merge: false,
        fetchMergeStatus: action.status
      })
    case 'SUBMIT_MERGE':
      return Object.assign({}, state, {
        submitMerge: action.data,
        submitMergeStatus: 'SUCCESS'
      })
    case 'SUBMIT_MERGE_STATUS':
      return Object.assign({}, state, {
        submitMerge: false,
        submitMergeStatus: action.status
      })
    case 'ACCEPT_DELETE_MERGE':
      return Object.assign({}, state, {
        acceptDeleteMerge: action.data,
        aceeptDeleteMergeStatus: 'SUCCESS'
      })
    case 'ACCEPT_DELETE_MERGE_STATUS':
      return Object.assign({}, state, {
        acceptDeleteMerge: false,
        aceeptDeleteMergeStatus: action.status
      })
    /* --------------------------- Issues actions --------------------------- */
    case 'FETCH_ISSUES':
      return Object.assign({}, state, {
        issues: action.data,
        fetchIssuesStatus: 'SUCCESS'
      })
    case 'FETCH_ISSUES_STATUS':
      return Object.assign({}, state, {
        issues: false,
        fetchIssuesStatus: action.status
      })
    case 'FETCH_ISSUE':
      return Object.assign({}, state, {
        issue: action.data,
        fetchIssueStatus: 'SUCCESS'
      })
    case 'FETCH_ISSUE_STATUS':
      return Object.assign({}, state, {
        issue: false,
        fetchIssueStatus: action.status
      })
    case 'SUBMIT_ISSUE':
      return Object.assign({}, state, {
        submitIssue: action.data,
        submitIssueStatus: 'SUCCESS'
      })
    case 'SUBMIT_ISSUE_STATUS':
      return Object.assign({}, state, {
        submitIssue: false,
        submitIssueStatus: action.status
      })
    case 'SUBMIT_COMMENT_STATUS':
      return Object.assign({}, state, {
        issueCommentStatus: action.status
      })
    case 'CLEAR_REPO_STATE':
      return Object.assign({}, state, {
        repo: false,
        fetchRepoStatus: false
      })
    default: return state
  }
}

// Fetch repo, repos, file, and commits
export const getRepos = state => state.repos.repos
export const getReposStatus = state => state.repos.fetchReposStatus
export const getRepo = state => state.repos.repo
export const getRepoStatus = state => state.repos.fetchRepoStatus
export const getFile = state => state.repos.file
export const getFileStatus = state => state.repos.fetchFileStatus
export const getCommits = state => state.repos.commits
export const getCommitsStatus = state => state.repos.commitsStatus
// Basic repo actions
export const getNewRepo = state => state.repos.newRepo
export const getNewRepoStatus = state => state.repos.newRepoStatus
export const getRepoVoteStatus = state => state.repos.voteStatus
export const getFork = state => state.repos.fork
export const getForkStatus = state => state.repos.forkStatus
export const getStarStatus = state => state.repos.starStatus
export const getSetContractStatus = state => state.repos.setContractsStatus
export const getBalance = state => state.repos.balance
export const getBalanceStatus = state => state.repos.fetchBalanceStatus
// Branch actions
export const getBranches = state => state.repos.branches
export const getBranchesStatus = state => state.repos.fetchBranchesStatus
export const getBranch = state => state.repos.branch
export const getBranchStatus = state => state.repos.fetchBranchStatus
export const getSubmitBranchStatus = state => state.repos.submitBranchStatus
// Merge request actions
export const getMerges = state => state.repos.merges
export const getMergesStatus = state => state.repos.fetchMergesStatus
export const getMerge = state => state.repos.merge
export const getMergeStatus = state => state.repos.fetchMergeStatus
export const getSubmitMerge = state => state.repos.submitMerge
export const getSubmitMergeStatus = state => state.repos.submitMergeStatus
export const getAcceptDeleteMerge = state => state.repos.acceptDeleteMerge
export const getAceeptDeleteMergeStatus = state => state.repos.aceeptDeleteMergeStatus
// Issues actions
export const getIssues = state => state.repos.issues
export const getIssuesStatus = state => state.repos.fetchIssuesStatus
export const getIssue = state => state.repos.issue
export const getIssueStatus = state => state.repos.fetchIssueStatus
export const getSubmitIssue = state => state.repos.submitIssue
export const getSubmitIssueStatus = state => state.repos.submitIssueStatus
export const getIssueCommentStatus = state => state.repos.issueCommentStatus

export default RepositoryReducer
