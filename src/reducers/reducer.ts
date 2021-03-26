import { AnyAction } from 'redux'
import { createFullGrid } from 'utils'

import { Reducer } from './interfaces'
import * as types from './types'

const initialState: Reducer = {}

function reducer(state = initialState, action: AnyAction): Reducer {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFullGrid(),
      }
    default:
      return state
  }
}

export default reducer
