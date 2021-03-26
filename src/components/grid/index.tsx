import React, { FC, Children, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { createGrid } from 'reducers'

import Block from './block'
import { Container, Row } from './styles'

const SudokuGrid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, columnIndex) => (
                <Block columnIndex={columnIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default SudokuGrid
