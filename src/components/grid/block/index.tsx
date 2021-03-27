import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { Reducer, selectBlock } from 'reducers'
import { Index, N } from 'typings'

import { Container } from './styles'

interface BlockProps {
  columnIndex: Index
  rowIndex: Index
}

interface State {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

const Block: FC<BlockProps> = ({ columnIndex, rowIndex }) => {
  const state = useSelector<Reducer, State>(
    ({ challengeGrid, selectedBlock, workingGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === columnIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][columnIndex] !== 0
          ? true
          : false,
      value: workingGrid ? workingGrid[rowIndex][columnIndex] : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  function handleClick() {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, columnIndex]))
    }
  }
  return (
    <Container
      active={state.isActive}
      data-cy={`block${rowIndex}-${columnIndex}`}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
