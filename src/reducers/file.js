import { SELECT_FILE } from '../actions/types'

const initialState = {
  selectedFiles: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SELECT_FILE:
      return {
        ...state,
        selectedFiles: [...state.selectedFiles, payload],
      }
    default:
      return state
  }
}
