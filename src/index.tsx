import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import composeStore from './store'

import App from './App'

const store = composeStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
