import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Reducer } from 'reducers'
import { N } from 'typings'

import { Container } from './styles'

interface BlockProps {
  columnIndex: number
  rowIndex: number
}

interface State {
  value: N
}

const Block: FC<BlockProps> = ({ columnIndex, rowIndex }) => {
  const state = useSelector<Reducer, State>(({ grid }) => ({
    value: grid ? grid[rowIndex][columnIndex] : 0,
  }))
  return (
    <Container data-cy={`block${rowIndex}-${columnIndex}`}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
