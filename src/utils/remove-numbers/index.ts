import global from 'global'
import { Grid } from 'typings'
import { copyGrid, getRandomIndex, solveGrid } from 'utils'
/**
 * Removes numbers from a full grid to create a Sudoku Puzzle
 * @param grid 9x9 Sudoku grid
 * @param attempts number of attempts to solve (higher means more difficult)-default 5
 */
function removeNumbers(grid: Grid, attempts: number = 5): Grid {
  while (attempts > 0) {
    let randomRow = getRandomIndex()
    let randomColumn = getRandomIndex()
    while (grid[randomRow][randomColumn] === 0) {
      randomRow = getRandomIndex()
      randomColumn = getRandomIndex()
    }

    const backup = grid[randomRow][randomColumn]
    grid[randomRow][randomColumn] = 0

    const gridCopy = copyGrid(grid)
    global.counter = 0

    solveGrid(gridCopy)
    if (global.counter !== 1) {
      grid[randomRow][randomColumn] = backup
      attempts--
    }
  }

  return grid
}

export default removeNumbers
