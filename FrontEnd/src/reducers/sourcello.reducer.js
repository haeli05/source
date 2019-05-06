const initialState = {
  // Trello actions
  newTrelloStatus: false,
  trello: false,
  trelloStatus: false,
  trellos: false,
  trellosStatus: false,
  // Board actions
  newBoardStatus: false,
  editBoardStatus: false,
  deleteBoardStatus: false,
  board: false,
  boardStatus: false,
  // Card actions
  newCardStatus: false,
  editCardStatus: false,
  assignCardStatus: false,
  deleteCardStatus: false,
  card: false,
  cardStatus: false
}

const sourcello = (state = initialState, action) => {
  switch (action.type) {
    /* ============================= Trello actions ============================= */
    case 'NEW_TRELLO':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'NEW_TRELLO_STATUS':
      return Object.assign({}, state, {
        newTrelloStatus: action.status
      })
    case 'FETCH_TRELLO':
      return Object.assign({}, state, {
        trelloStatus: 'SUCCESS',
        trello: action.data
      })
    case 'FETCH_TRELLO_STATUS':
      return Object.assign({}, state, {
        trelloStatus: action.status
      })
    case 'FETCH_TRELLOS':
      return Object.assign({}, state, {
        trellosStatus: 'SUCCESS',
        trellos: action.data
      })
    case 'FETCH_TRELLOS_STATUS':
      return Object.assign({}, state, {
        trellosStatus: action.status
      })
      /* ============================= Board actions ============================= */
    case 'NEW_BOARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'NEW_BOARD_STATUS':
      return Object.assign({}, state, {
        newBoardStatus: action.status
      })
    case 'EDIT_BOARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'EDIT_BOARD_STATUS':
      return Object.assign({}, state, {
        editBoardStatus: action.status
      })
    case 'DELETE_BOARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'DELETE_BOARD_STATUS':
      return Object.assign({}, state, {
        deleteBoardStatus: action.status
      })
    case 'FETCH_BOARD':
      return Object.assign({}, state, {
        boardStatus: 'SUCCESS',
        board: action.data
      })
    case 'FETCH_BOARD_STATUS':
      return Object.assign({}, state, {
        boardStatus: action.status
      })
      /* ============================== Card actions ============================== */
    case 'NEW_CARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'NEW_CARD_STATUS':
      return Object.assign({}, state, {
        newCardStatus: action.status
      })
    case 'EDIT_CARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'EDIT_CARD_STATUS':
      return Object.assign({}, state, {
        editCardStatus: action.status
      })
    case 'ASSIGN_CARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'ASSIGN_CARD_STATUS':
      return Object.assign({}, state, {
        assignCardStatus: action.status
      })
    case 'DELETE_CARD':
      return Object.assign({}, state, {
        // TODO: this
      })
    case 'DELETE_CARD_STATUS':
      return Object.assign({}, state, {
        deleteCardStatus: action.status
      })
    case 'FETCH_CARD':
      return Object.assign({}, state, {
        cardStatus: 'SUCCESS',
        card: action.data
      })
    case 'FETCH_CARD_STATUS':
      return Object.assign({}, state, {
        cardStatus: action.status
      })
    default: return state
  }
}

// Trello actions
export const getNewTrelloStatus = state => state.sourcello.newTrelloStatus
export const getTrello = state => state.sourcello.trello
export const getTrelloStatus = state => state.sourcello.trelloStatus
export const getTrellos = state => state.sourcello.trellos
export const getTrellosStatus = state => state.sourcello.trellosStatus
// Board actions
export const getNewBoardStatus = state => state.sourcello.newBoardStatus
export const getEditBoardStatus = state => state.sourcello.editBoardStatus
export const getDeleteBoardStatus = state => state.sourcello.deleteBoardStatus
export const getBoard = state => state.sourcello.board
export const getBoardStatus = state => state.sourcello.boardStatus
// Card actions
export const getNewCardStatus = state => state.sourcello.newCardStatus
export const getEditCardStatus = state => state.sourcello.editCardStatus
export const getAssignCardStatus = state => state.sourcello.assignCardStatus
export const getDeleteCardStatus = state => state.sourcello.deleteCardStatus
export const getCard = state => state.sourcello.card
export const getCardStatus = state => state.sourcello.cardStatus
export default sourcello
