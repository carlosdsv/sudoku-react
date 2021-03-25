import { Grid, Numbers } from 'typings'

interface isInColumnProps {
  column: number
  grid: Grid
  value: Numbers
}

function isInColumn({ column, grid, value }: isInColumnProps): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][column]) return true
  }
  return false
}

export default isInColumn
