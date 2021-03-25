import { Grid, Numbers } from 'typings'

interface isInRowProps {
  grid: Grid
  row: number
  value: Numbers
}

function isInRow({ grid, row, value }: isInRowProps): boolean {
  return grid[row].includes(value)
}

export default isInRow
