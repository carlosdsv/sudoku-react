import { Grid, Square } from '../../typings'

interface identifySquareProps {
  grid: Grid
  row: number
  column: number
}

function identifySquare({ column, grid, row }: identifySquareProps): Square {
  const square = []
  if (row < 3) {
    if (column < 3) {
      for (let x = 0; x < 3; x++) {
        square.push([grid[x][0], grid[x][1], grid[x][2]])
      }
    } else if (column < 6) {
      for (let x = 0; x < 3; x++) {
        square.push([grid[x][3], grid[x][4], grid[x][5]])
      }
    } else {
      for (let x = 0; x < 3; x++) {
        square.push([grid[x][6], grid[x][7], grid[x][8]])
      }
    }
  } else if (row < 6) {
    if (column < 3) {
      for (let x = 3; x < 6; x++) {
        square.push([grid[x][0], grid[x][1], grid[x][2]])
      }
    } else if (column < 6) {
      for (let x = 3; x < 6; x++) {
        square.push([grid[x][3], grid[x][4], grid[x][5]])
      }
    } else {
      for (let x = 3; x < 6; x++) {
        square.push([grid[x][6], grid[x][7], grid[x][8]])
      }
    }
  } else {
    if (column < 3) {
      for (let x = 6; x < 9; x++) {
        square.push([grid[x][0], grid[x][1], grid[x][2]])
      }
    } else if (column < 6) {
      for (let x = 6; x < 9; x++) {
        square.push([grid[x][3], grid[x][4], grid[x][5]])
      }
    } else {
      for (let x = 6; x < 9; x++) {
        square.push([grid[x][6], grid[x][7], grid[x][8]])
      }
    }
  }
  return square as Square
}

export default identifySquare
