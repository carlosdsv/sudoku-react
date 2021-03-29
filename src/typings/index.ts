export type BlockCoordinates = [Index, Index]

export type Grid = [Row, Row, Row, Row, Row, Row, Row, Row, Row]

export type Index = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type N = 0 | Numbers

export type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type Row = [N, N, N, N, N, N, N, N, N]

export type Square = [SquareRow, SquareRow, SquareRow]

export type SquareRow = [N, N, N]
