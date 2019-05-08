import { createAction } from 'redux-actions'
export const FETCH_IDEAS = 'FETCH_IDEAS'
export const FETCH_IDEAS_SUCCESS = 'FETCH_IDEAS_SUCCESS'
export const FETCH_IDEAS_ERROR = 'FETCH_IDEAS_ERROR'

export const fetchIdeas = createAction(FETCH_IDEAS)
export const fetchIdeasSuccess = createAction(FETCH_IDEAS_SUCCESS)
export const fetchIdeasError = createAction(FETCH_IDEAS_ERROR)
