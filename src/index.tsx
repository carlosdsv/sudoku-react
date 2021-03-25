import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { unregister } from './core'
import { GlobalStyles, theme } from './styles'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Hello World</div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()

reportWebVitals()
