import React, { FC, Children, useCallback, useEffect } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { createGrid, Reducer, selectBlock } from 'reducers'

import Block from './block'
import { Container, Row } from './styles'
import { BlockCoordinates, Index } from 'typings'

interface State {
  selectedBlock?: BlockCoordinates
}

const SudokuGrid: FC = () => {
  const state = useSelector<Reducer, State>(({ selectedBlock }) => ({
    selectedBlock,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as Index,
          state.selectedBlock[1],
        ])
      )
    }
  }
  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as Index,
        ])
      )
    }
  }
  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as Index,
        ])
      )
    }
  }
  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as Index,
          state.selectedBlock[1],
        ])
      )
    }
  }

  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)
  useMousetrap('up', moveUp)

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, columnIndex) => (
                <Block
                  columnIndex={columnIndex as Index}
                  rowIndex={rowIndex as Index}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default SudokuGrid
