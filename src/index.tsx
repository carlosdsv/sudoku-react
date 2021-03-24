import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <div>Hello World</div>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()

reportWebVitals()
