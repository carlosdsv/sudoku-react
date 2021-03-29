import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { Button } from '../../../components'
import { fillBlock, Reducer } from '../../../reducers'
import { Numbers, BlockCoordinates, N } from '../../../typings'

interface NumberButtonProps {
  value: Numbers
}

interface State {
  selectedBlock?: BlockCoordinates
  selectedValue: N
}
const NumberButton: FC<NumberButtonProps> = ({ value }) => {
  const state = useSelector<Reducer, State>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(value, state.selectedBlock))
    }
  }, [dispatch, state.selectedBlock, state.selectedValue, value])

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
