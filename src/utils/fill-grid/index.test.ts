import { Grid } from 'typings'

import fillGrid from './'

describe('fillGrid', () => {
  it('fills an empty grid', () => {
    const grid: Grid = [
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
    fillGrid(grid)
    for (let row in grid) {
      for (let column in grid[row]) {
        expect(grid[row][column]).toBeGreaterThanOrEqual(1)
        expect(grid[row][column]).toBeLessThanOrEqual(9)
      }
    }
  })

  it('fills a valid partially filled grid', () => {
    const grid: Grid = [
      [0, 4, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6],
      [0, 5, 0, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid)
    for (let row in grid) {
      for (let column in grid[row]) {
        expect(grid[row][column]).toBeGreaterThanOrEqual(1)
        expect(grid[row][column]).toBeLessThanOrEqual(9)
      }
    }
  })
})
