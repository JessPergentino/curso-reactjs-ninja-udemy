'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from 'reducers'

// Este initialState pode conter informações de bancos de dados ou servidores
const initialState = {
  todos: [{
    text: 'auto',
    id: '',
    completed: true
  }],

  address: {
    address: 'Rua ali',
    city: 'Minha Cidade',
    state: 'Meu Estado',
    code: '123456798',
    district: 'Meu Bairro',
    status: 200
  }
}

const store = createStore(reducer, initialState)
const renderState = () => {
  console.log('state:', store.getState())
}

store.subscribe(renderState)
renderState()

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
