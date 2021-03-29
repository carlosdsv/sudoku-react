import { Grid, Numbers } from '../../typings'
import {
  checkGrid,
  identifySquare,
  isInColumn,
  isInRow,
  isInSquare,
  shuffle,
} from '../../utils'

const numbers: Numbers[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fillGrid(grid: Grid) {
  let row = 0
  let column = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    column = i % 9

    if (grid[row][column] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        // is it not in grid row?
        if (!isInRow({ grid, row, value })) {
          // is it not in grid column?

          if (!isInColumn({ column, grid, value })) {
            const square = identifySquare({ column, grid, row })
            if (!isInSquare({ square, value })) {
              grid[row][column] = value
              if (checkGrid(grid)) return true
              else if (fillGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }

  grid[row][column] = 0
}

export default fillGrid
