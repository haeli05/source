import axios from 'axios'
import history from '../history'
import config from '../utils/config.js';
import {addError} from './error.actions.js';



/* ============================= TRELLO ACTIONS ============================= */

// New trello
export function newTrello(title){
  return (dispatch)=>{
    dispatch(addNewTrelloStatus("PENDING"));
    axios.post(`${config.production_url}/api/sourcello`,{
      title: title,
      token
    })
    .then(res => {
      return dispatch(addNewTrello(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addNewTrelloStatus('ERROR'))
    })
  }
}
export function addNewTrello(data){
  return {
    type: 'NEW_TRELLO',
    data: data
  }
}
export function addNewTrelloStatus(status){
  return {
    type: 'NEW_TRELLO_STATUS',
    status: status
  }
}


// Get specific trello by id
export function fetchTrello(id){
  return (dispatch)=>{
    dispatch(addTrello("PENDING"));
    axios.get(`${config.production_url}/api/sourcello/${id}`)
    .then(res => {
      return dispatch(addTrello(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addTrello('ERROR'))
    })
  }
}
export function addTrello(data){
  return {
    type: 'FETCH_TRELLO',
    data: data
  }
}
export function addTrelloStatus(status){
  return {
    type: 'FETCH_TRELLO_STATUS',
    status: status
  }
}


// Get all trellos for a specific project
export function fetchTrellos(){
  return (dispatch)=>{
    dispatch(addTrellos("PENDING"));
    axios.get(`${config.production_url}/api/sourcello/`)
    .then(res => {
      return dispatch(addTrellos(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addTrellos('ERROR'))
    })
  }
}
export function addTrellos(data){
  return {
    type: 'FETCH_TRELLOS',
    data: data
  }
}
export function addTrellosStatus(status){
  return {
    type: 'FETCH_TRELLOS_STATUS',
    status: status
  }
}


/* ============================= BOARD ACTIONS ============================= */

// New board
export function newBoard(data){
  return (dispatch)=>{
    dispatch(addNewBoardStatus("PENDING"));
    axios.post(`${config.production_url}/api/sourcello/board`,{
      trelloID: data.trelloID,
      title : data.title,
      description: data.description,
      dueDate: data.dueDate,
      members: data.members,
      token
    })
    .then(res => {
      return dispatch(addNewBoard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addNewBoardStatus('ERROR'))
    })
  }
}
export function addNewBoard(data){
  return {
    type: 'NEW_BOARD',
    data: data
  }
}
export function addNewBoardStatus(status){
  return {
    type: 'NEW_BOARD_STATUS',
    status: status
  }
}


// Edit a board
export function editBoard(data){
  return (dispatch)=>{
    dispatch(addEditBoardStatus("PENDING"));
    axios.put(`${config.production_url}/api/sourcello/board/${data.id}`,{
      title : data.title,
      description: data.description,
      dueDate: data.dueDate,
      members: data.members,
      token
    })
    .then(res => {
      return dispatch(addEditBoard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addEditBoardStatus('ERROR'))
    })
  }
}
export function addEditBoard(data){
  return {
    type: 'EDIT_BOARD',
    data: data
  }
}
export function addEditBoardStatus(status){
  return {
    type: 'EDIT_BOARD_STATUS',
    status: status
  }
}


// Delete a board
export function deleteBoard(id){
  return (dispatch)=>{
    dispatch(addDeleteBoardStatus("PENDING"));
    axios.del(`${config.production_url}/api/sourcello/board/${id}`,{
      token
    })
    .then(res => {
      return dispatch(addDeleteBoard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addDeleteBoardStatus('ERROR'))
    })
  }
}
export function addDeleteBoard(data){
  return {
    type: 'DELETE_BOARD',
    data: data
  }
}
export function addDeleteBoardStatus(status){
  return {
    type: 'DELETE_BOARD_STATUS',
    status: status
  }
}


// Fetch a specific board by id
export function fetchBoard(id){
  return (dispatch)=>{
    dispatch(addBoardStatus("PENDING"));
    axios.get(`${config.production_url}/api/sourcello/board/${id}`)
    .then(res => {
      return dispatch(addBoard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addBoardStatus('ERROR'))
    })
  }
}
export function addBoard(data){
  return {
    type: 'FETCH_BOARD',
    data: data
  }
}
export function addBoardStatus(status){
  return {
    type: 'FETCH_BOARD_STATUS',
    status: status
  }
}


/* ============================== CARD ACTIONS ============================== */

// New card
export function newCard(data){
  return (dispatch)=>{
    dispatch(addNewCardStatus("PENDING"));
    axios.post(`${config.production_url}/api/sourcello/card`,{
      boardID: data.boardID,
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      assignedTo: data.assignedTo,
      completed: data.completed,
      compensation: data.compensation,
      assigned: data.assigned,
      token
    })
    .then(res => {
      return dispatch(addNewCard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addNewCardStatus('ERROR'))
    })
  }
}
export function addNewCard(data){
  return {
    type: 'NEW_CARD',
    data: data
  }
}
export function addNewCardStatus(status){
  return {
    type: 'NEW_CARD_STATUS',
    status: status
  }
}


// Edit a card
export function editCard(data){
  return (dispatch)=>{
    dispatch(addEditCardStatus("PENDING"));
    axios.post(`${config.production_url}/api/sourcello/card/${data.id}`,{
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      assignedTo: data.assignedTo,
      completed: data.completed,
      compensation: data.compensation,
      assigned: data.assigned,
      token
    })
    .then(res => {
      return dispatch(addEditCard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addEditCardStatus('ERROR'))
    })
  }
}
export function addEditCard(data){
  return {
    type: 'EDIT_CARD',
    data: data
  }
}
export function addEditCardStatus(status){
  return {
    type: 'EDIT_CARD_STATUS',
    status: status
  }
}


// Asign card to users
export function assignCard(data){
  return (dispatch)=>{
    dispatch(addAssignCardStatus("PENDING"));
    axios.post(`${config.production_url}/api/sourcello/assign/${data.boardID}/${data.cardID}`,{
      userID: data.userID,
      replaceUsers: data.replaceUsers
      token
    })
    .then(res => {
      return dispatch(addAssignCard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addAssignCardStatus('ERROR'))
    })
  }
}
export function addAssignCard(data){
  return {
    type: 'ASSIGN_CARD',
    data: data
  }
}
export function addAssignCardStatus(status){
  return {
    type: 'ASSIGN_CARD_STATUS',
    status: status
  }
}


// Delete a card
export function deleteCard(id){
  return (dispatch)=>{
    dispatch(addDeleteCardStatus("PENDING"));
    axios.del(`${config.production_url}/api/sourcello/card/${id}`,{
      token
    })
    .then(res => {
      return dispatch(addDeleteCard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addDeleteCardStatus('ERROR'))
    })
  }
}
export function addDeleteCard(data){
  return {
    type: 'DELETE_CARD',
    data: data
  }
}
export function addDeleteCardStatus(status){
  return {
    type: 'DELETE_CARD_STATUS',
    status: status
  }
}


// Fetch a specific card by id
export function fetchCard(id){
  return (dispatch)=>{
    dispatch(addCardStatus("PENDING"));
    axios.get(`${config.production_url}/api/sourcello/card/${id}`)
    .then(res => {
      return dispatch(addCard(res.data))
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addCardStatus('ERROR'))
    })
  }
}
export function addCard(data){
  return {
    type: 'FETCH_CARD',
    data: data
  }
}
export function addCardStatus(status){
  return {
    type: 'FETCH_CARD_STATUS',
    status: status
  }
}
