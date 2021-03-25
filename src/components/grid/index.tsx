import React, { FC, Children } from 'react'
import { createFullGrid } from 'utils'
import Block from './block'
import { Container, Row } from './styles'
import { Grid } from 'typings'

const SudokuGrid: FC = () => {
  const grid: Grid = createFullGrid()
  console.log(grid)

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
