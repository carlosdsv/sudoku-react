import React, { FC } from 'react'

import { Container } from './styles'

interface BlockProps {
  columnIndex: number
  rowIndex: number
}

const Block: FC<BlockProps> = ({ columnIndex, rowIndex }) => {
  return <Container data-cy={`block${rowIndex}-${columnIndex}`} />
}

export default Block
