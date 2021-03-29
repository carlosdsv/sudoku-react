import { Numbers, Square } from '../../../typings'

interface isInSquareProps {
  square: Square
  value: Numbers
}

function isInSquare({ square, value }: isInSquareProps): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
