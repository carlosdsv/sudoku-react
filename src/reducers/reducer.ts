import { AnyAction } from 'redux'
import { Grid } from '../typings'
import {
  compareArrays,
  copyGrid,
  createFullGrid,
  removeNumbers,
} from '../utils'

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

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coordinates[0]][action.coordinates[1]] !==
          action.value
        ) {
          alert('Incorrect Option!')
          return state
        }
        state.workingGrid[action.coordinates[0]][action.coordinates[1]] =
          action.value
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('Completed!')
        return { ...state, workingGrid: [...state.workingGrid] as Grid }
      }
      return state
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
