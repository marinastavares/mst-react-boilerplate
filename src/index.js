/* eslint-disable comma-dangle */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from './modules/reducers'
import App from './views/app'

import 'normalize.css'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, promiseMiddleware, logger))
)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app-container')
)
