import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Card, Content, SudokuGrid, Title } from 'components'
import { unregister } from 'core'
import { GlobalStyles, theme } from 'styles'
import reportWebVitals from 'reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <SudokuGrid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()

reportWebVitals()
