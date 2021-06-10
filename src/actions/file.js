import { v4 as uuid } from 'uuid'

import {
  GET_FILES,
  SELECT_FILE,
  SELECT_ALL_FILES,
  DESELECT_FILE,
  DESELECT_ALL_FILES,
} from './types'
import data from '../data.json'

export const getFiles = () => (dispatch) => {
  const files = data.map((file) => {
    return { ...file, id: uuid() }
  })

  dispatch({
    type: GET_FILES,
    payload: files,
  })
}

export const selectFile = (id) => ({
  type: SELECT_FILE,
  payload: id,
})

export const selectAllFiles = () => ({
  type: SELECT_ALL_FILES,
})

export const deselectFile = (id) => ({
  type: DESELECT_FILE,
  payload: id,
})

export const deselectAllFiles = () => ({
  type: DESELECT_ALL_FILES,
})
