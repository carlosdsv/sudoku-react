import global from '../../global'

import { Grid, Numbers } from '../../typings'
import {
  checkGrid,
  identifySquare,
  isInColumn,
  isInRow,
  isInSquare,
} from '../../utils'

const numbers: Numbers[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid 9x9 array of values from 0-9
 */
function solveGrid(grid: Grid) {
  let row = 0
  let column = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    column = i % 9

    if (grid[row][column] === 0) {
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInColumn({ column, grid, value })) {
            const square = identifySquare({ column, grid, row })
            if (!isInSquare({ square, value })) {
              grid[row][column] = value
              if (checkGrid(grid)) {
                global.counter++
                break
              } else if (solveGrid(grid)) {
                return true
              }
            }
          }
        }
      }
      break
    }
  }
  grid[row][column] = 0
}

export default solveGrid
