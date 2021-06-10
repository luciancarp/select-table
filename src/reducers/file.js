import { SELECT_FILE, GET_FILES } from '../actions/types'

const initialState = {
  selectedFiles: [],
  files: [],
}

const fileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_FILE:
      return {
        ...state,
        selectedFiles: [...state.selectedFiles, payload],
      }
    case GET_FILES:
      return {
        ...state,
        files: [...payload],
      }
    default:
      return state
  }
}

export default fileReducer
