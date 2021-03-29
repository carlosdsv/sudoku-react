import { Grid } from '../../../typings'
import isInColumn from './'

describe('isInColumn', () => {
  it('returns true when value is in grid column', () => {
    const grid: Grid = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 4, 2, 7, 8, 5, 6],
    ]

    expect(isInColumn({ column: 0, grid, value: 9 })).toBeTruthy()
    expect(isInColumn({ column: 5, grid, value: 9 })).toBeTruthy()
    expect(isInColumn({ column: 8, grid, value: 9 })).toBeTruthy()
  })
  it('returns false when value is not in grid column', () => {
    const grid: Grid = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 0, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [0, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 0],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 4, 2, 7, 8, 5, 6],
    ]

    expect(isInColumn({ column: 0, grid, value: 9 })).toBeFalsy()
    expect(isInColumn({ column: 5, grid, value: 9 })).toBeFalsy()
    expect(isInColumn({ column: 8, grid, value: 9 })).toBeFalsy()
  })
})
