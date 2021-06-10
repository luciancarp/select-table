import { v4 as uuid } from 'uuid'

import { SELECT_FILE, GET_FILES } from './types'
import data from '../data.json'

export const selectFile = (id) => ({
  type: SELECT_FILE,
  payload: id,
})

export const getFiles = () => (dispatch) => {
  let array = data

  const files = array.map((file) => {
    return { ...file, id: uuid() }
  })

  dispatch({
    type: GET_FILES,
    payload: files,
  })
}
