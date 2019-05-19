const initialState = {
  ideas: false,
  fetchIdeasStatus: false,
  idea: false,
  fetchIdeaStatus: false,
  ideaSubmitStatus: false,
  commentSubmitStatus: false,
  ideaVoteStatus: false,
  votedOn: false
}

const IdeasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IDEAS':
      return {
        ideas: action.data,
        fetchIdeasStatus: 'SUCCESS'
      }
    case 'FETCH_IDEAS_STATUS':
      return {
        ideas: false,
        fetchIdeasStatus: action.status
      }
    case 'FETCH_IDEA':
      return {
        ideas: state.ideas,
        fetchIdeasStatus: state.fetchIdeasStatus,
        idea: action.data,
        fetchIdeaStatus: 'SUCCESS'
      }
    case 'FETCH_IDEA_STATUS':
      return {
        ideas: state.ideas,
        fetchIdeasStatus: state.fetchIdeasStatus,
        idea: false,
        fetchIdeaStatus: action.status
      }
    case 'IDEA_SUBMIT_STATUS':
      return {
        ideas: state.ideas,
        fetchIdeasStatus: state.fetchIdeasStatus,
        ideaSubmitStatus: action.status
      }
    case 'COMMENT_SUBMIT_STATUS':
      return Object.assign({}, state, {
        commentSubmitStatus: action.status
      })
    case 'IDEA_VOTE_STATUS':
      return Object.assign({}, state, {
        ideaVoteStatus: action.status,
        votedOn: action.id
      })
    default: return state
  }
}

export const getIdeas = state => state.ideas.ideas
export const getFetchIdeasStatus = state => state.ideas.fetchIdeasStatus
export const getIdea = state => state.ideas.idea
export const getFetchIdeaStatus = state => state.ideas.fetchIdeaStatus
export const getIdeaSubmitStatus = state => state.ideas.ideaSubmitStatus
export const getCommentSubmitStatus = state => state.ideas.commentSubmitStatus
export const getIdeaVoteStatus = state => state.ideas.ideaVoteStatus
export const getVotedOn = state => state.ideas.votedOn

// export const getPaginationID = state => {state.ideas.ideas.slice(-1).pop()._id};

export default IdeasReducer
