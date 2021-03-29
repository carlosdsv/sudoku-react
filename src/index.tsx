import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import {
  Card,
  Content,
  NewGame,
  NumbersBar,
  SudokuGrid,
  Title,
} from './components'
import { configureStore, register } from './core'
import { GlobalStyles, theme } from './styles'

import reportWebVitals from 'reportWebVitals'

const { persistor, store } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content data-cy="content">
            <Title data-cy="title">Sudoku</Title>
            <Card data-cy="card">
              <NewGame />
              <SudokuGrid />
              <NumbersBar />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

register()

reportWebVitals()
