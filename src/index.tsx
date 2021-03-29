import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  Card,
  Content,
  NewGame,
  NumbersBar,
  SudokuGrid,
  Title,
} from 'components'
import { configureStore, unregister } from 'core'
import { GlobalStyles, theme } from 'styles'
import reportWebVitals from 'reportWebVitals'
const store = configureStore()
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <NewGame />
            <SudokuGrid />
            <NumbersBar />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()

reportWebVitals()
