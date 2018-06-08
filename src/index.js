import React from 'react'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './App'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
