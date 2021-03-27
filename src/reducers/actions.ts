import { Action, AnyAction } from 'redux'
import { BlockCoordinates, Numbers } from 'typings'

import * as types from './types'
export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const fillBlock = (
  value: Numbers,
  coordinates: BlockCoordinates
): AnyAction => ({
  coordinates,
  type: types.FILL_BLOCK,
  value,
})

export const selectBlock = (coordinates: BlockCoordinates): AnyAction => ({
  coordinates,
  type: types.SELECT_BLOCK,
})
