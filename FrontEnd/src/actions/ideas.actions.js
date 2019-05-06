import axios from 'axios'
import history from '../history'
import config from '../utils/config'
import { addError } from './error.actions'
import { addVoteToUserObject } from './user.actions'

// TODO: handle submit response so that idea doesn't need to be fetched again

/* ========================== FETCH IDEA AND IDEAS ========================== */

// Fetch ideas
export function fetchIdeas (limit, tags, last, trending = 'no') {
  return dispatch => {
    dispatch(addIdeasStatus('PENDING'))
    axios.post(`${config.production_url}/api/search/010/${trending}`, {
      limit: limit,
      ideaId: last,
      tags: tags
    })
      .then(res => {
        return dispatch(addIdeas(res.data.ideas))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIdeasStatus('ERROR'))
      })
  }
}
export function addIdeas (ideas) {
  return {
    type: 'FETCH_IDEAS',
    data: ideas
  }
}
export function addIdeasStatus (status) {
  return {
    type: 'FETCH_IDEAS_STATUS',
    status: status
  }
}

// Fetch a single idea
export function fetchIdea (ideaID) {
  return dispatch => {
    dispatch(addIdeaStatus('PENDING'))
    axios.get(`${config.production_url}/api/ideas/show/${ideaID}`)
      .then(res => {
        return dispatch(addIdea(res.data))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIdeaStatus('ERROR'))
      })
  }
}
export function addIdea (idea) {
  return {
    type: 'FETCH_IDEA',
    data: idea
  }
}
export function addIdeaStatus (status) {
  return {
    type: 'FETCH_IDEA_STATUS',
    status: status
  }
}

/* ======================== NEW / EDIT / DELETE IDEA ======================== */

// Create a new idea
export function newIdea (idea) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addIdeaSubmitStatus('PENDING'))
    axios.post(`${config.production_url}/api/ideas/new`, {
      title: idea.ideaTitle,
      body: idea.body,
      tags: idea.topics,
      projectID: idea.projectID,
      stringBody: idea.stringBody,
      token
    })
      .then(res => {
        if (res.data._id !== undefined) {
          history.push(`/${JSON.parse(user).username}/idea/${res.data._id}`)
        }
        return dispatch(addIdeaSubmitStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIdeaSubmitStatus('ERROR'))
      })
  }
}

// Edit an idea
export function editIdea (toEdit, ideaID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addIdeaSubmitStatus('PENDING'))
    axios.post(`${config.production_url}/api/ideas/edit/idea/${ideaID}`, {
      body: toEdit.body,
      stringBody: toEdit.stringBody,
      tags: toEdit.tags,
      token
    })
      .then(res => {
        if (res.data[1]._id !== undefined) {
          history.push(`/${JSON.parse(user).username}/idea/${res.data[1]._id}`)
        }
        return dispatch(addIdeaSubmitStatus('SUCCESS'))
      })
      .catch(err => {
        console.log(err.response)
        dispatch(addError(err))
        return dispatch(addIdeaSubmitStatus('ERROR'))
      })
  }
}

// Delete an idea
export function deleteIdea (ideaID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addIdeaSubmitStatus('PENDING'))
    axios.post(`${config.production_url}/api/ideas/delete/${ideaID}`, {
      token
    })
      .then(res => {
        history.push(`/explore/ideas`)
        return dispatch(addIdeaSubmitStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIdeaSubmitStatus('ERROR'))
      })
  }
}

// Send idea status to reducer
export function addIdeaSubmitStatus (status) {
  return {
    type: 'IDEA_SUBMIT_STATUS',
    status: status
  }
}

/* ========================= VOTE ON IDEA / COMMENT ========================= */

// Vote on an idea or comment
export function ideaVote (type, up, id) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addIdeaVoteStatus('PENDING', id))
    axios.post(`${config.production_url}/api/ideas/vote/${type}/${up}/${id}`, {
      token
    })
      .then(res => {
        return dispatch(addIdeaVoteStatus('SUCCESS', id))
      })
      .then(res => {
        if (type === 'idea') {
          return dispatch(addVoteToUserObject('ideas', id, up))
        } else if (type === 'blob') {
          return dispatch(addVoteToUserObject('ideaBlob', id, up))
        }
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addIdeaVoteStatus('ERROR', id))
      })
  }
}
export function addIdeaVoteStatus (status, id) {
  return {
    type: 'IDEA_VOTE_STATUS',
    id: id,
    status: status
  }
}

/* ====================== NEW / EDIT / DELETE COMMENT ====================== */

// Comment on an idea
export function commentIdea (body, stringBody, ideaID, parentID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    if (parentID === undefined) {
      dispatch(addCommentSubmitStatus('PENDING'))
    } else {
      dispatch(addCommentSubmitStatus(parentID))
    }
    axios.post(`${config.production_url}/api/ideas/comment/${ideaID}`, {
      body: body,
      stringBody: stringBody,
      nest: parentID,
      token
    })
      .then(res => {
        dispatch(addCommentSubmitStatus('SUCCESS'))
        return dispatch(fetchIdea(ideaID))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addCommentSubmitStatus('ERROR'))
      })
  }
}

// Edit a comment
export function editComment (body, stringBody, commentID, ideaID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addCommentSubmitStatus(commentID))
    axios.post(`${config.production_url}/api/ideas/edit/comment/${commentID}`, {
      body: body,
      stringBody: stringBody,
      token
    })
      .then(res => {
        return dispatch(addCommentSubmitStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addCommentSubmitStatus('ERROR'))
      })
  }
}

// Delete a comment
export function deleteComment (ideaID, commentID) {
  let user = localStorage.getItem(`user`)
  let token = JSON.parse(user).token
  return dispatch => {
    dispatch(addCommentSubmitStatus(commentID))
    axios.post(`${config.production_url}/api/ideas/deleteBlob/${ideaID}`, {
      blobID: commentID,
      token
    })
      .then(res => {
        return dispatch(addCommentSubmitStatus('SUCCESS'))
      })
      .catch(err => {
        dispatch(addError(err))
        return dispatch(addCommentSubmitStatus('ERROR'))
      })
  }
}

// Send comment status to reducer
export function addCommentSubmitStatus (status) {
  return {
    type: 'COMMENT_SUBMIT_STATUS',
    status: status
  }
}
