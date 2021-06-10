import {
  SELECT_FILE,
  SELECT_ALL_FILES,
  DESELECT_FILE,
  DESELECT_ALL_FILES,
  GET_FILES,
} from '../actions/types'

const initialState = {
  selectedFiles: [],
  files: [],
}

const fileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_FILES:
      return {
        ...state,
        files: [...payload],
      }
    case SELECT_FILE:
      return {
        ...state,
        selectedFiles: [...state.selectedFiles, payload],
      }
    case SELECT_ALL_FILES:
      return {
        ...state,
        selectedFiles: state.files.map((file) => file.id),
      }
    case DESELECT_FILE:
      return {
        ...state,
        selectedFiles: state.selectedFiles.filter(
          (file) => !file.includes(payload)
        ),
      }
    case DESELECT_ALL_FILES:
      return {
        ...state,
        selectedFiles: [],
      }

    default:
      return state
  }
}

export default fileReducer
