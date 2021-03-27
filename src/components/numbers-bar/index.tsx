import React, { FC } from 'react'

import { Numbers } from 'typings'
import Button from './button'
import { Container } from './styles'

const NumbersBar: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as Numbers[]).map((value) => (
      <Button key={value} value={value}>
        {value}
      </Button>
    ))}
  </Container>
)

export default NumbersBar
