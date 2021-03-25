import createFullGrid from './'

describe('createFullGrid', () => {
  it('returns a 9x9 Sudoku grid with value range 1 to 9', () => {
    const grid = createFullGrid()
    for (let row in grid) {
      for (let column in grid[row]) {
        expect(grid[row][column]).toBeGreaterThanOrEqual(1)
        expect(grid[row][column]).toBeLessThanOrEqual(9)
      }
    }
  })
})
