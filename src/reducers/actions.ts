import { Action, AnyAction } from 'redux'
import { BlockCoordinates } from 'typings'

import * as types from './types'
export const createGrid = (): Action => ({ type: types.CREATE_GRID })
export const selectBlock = (coordinates: BlockCoordinates): AnyAction => ({
  coordinates,
  type: types.SELECT_BLOCK,
})
