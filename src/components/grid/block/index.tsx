import React, { FC } from 'react'

interface BlockProps {
  columnIndex: number
  rowIndex: number
}

const Block: FC<BlockProps> = ({ columnIndex, rowIndex }) => {
  return (
    <div data-cy="block">
      |{rowIndex}
      {columnIndex}|
    </div>
  )
}

export default Block
