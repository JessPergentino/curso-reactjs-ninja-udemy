import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './redux-flow/configure-store'
import { db } from './config/firebase'

const store = configureStore()

const videos = db.ref('videos')

db.ref('categories').remove()

videos.on('value', (snapshot) => {
  console.log('snapshop:', snapshot.val())
}, (error) => {
  console.log('error:', error)
})

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
