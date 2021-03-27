import { AnyAction } from 'redux'
import { copyGrid, createFullGrid, removeNumbers } from 'utils'

import { Reducer } from './interfaces'
import * as types from './types'

const initialState: Reducer = {}

function reducer(state = initialState, action: AnyAction): Reducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    }

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coordinates,
      }
    default:
      return state
  }
}

export default reducer
