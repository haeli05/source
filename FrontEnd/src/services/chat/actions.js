import { createAction } from 'redux-actions'
export const UPDATE_ASSETS = 'UPDATE_ASSETS'
export const UPDATE_ASSETS_SUCCESS = 'UPDATE_ASSETS_SUCCESS'
export const UPDATE_ASSETS_ERROR = 'UPDATE_ASSETS_ERROR'

export const updateAssets = createAction(UPDATE_ASSETS)
export const updateAssetsSuccess = createAction(UPDATE_ASSETS_SUCCESS)
export const updateAssetsError = createAction(UPDATE_ASSETS_ERROR)
