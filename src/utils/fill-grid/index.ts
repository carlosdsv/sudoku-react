import { Grid, Numbers } from 'typings'
import { shuffle } from 'utils'

const gridExample: Grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: Numbers[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fillGrid(grid: Grid) {
  shuffle(numbers)
  let row = 0
  let column = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    column = i % 9

    if (grid[row][column] === 0) {
      // Do stuff
      // recursive things
      break
    }
  }

  grid[row][column] = 0
}

export default fillGrid
