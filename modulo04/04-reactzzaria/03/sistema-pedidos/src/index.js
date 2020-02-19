import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import * as serviceWorker from './serviceWorker'

import ErrorBoudary from './error'

ReactDOM.render(
  <ErrorBoudary>
    {(hasError) => (
      <App hasError={hasError} />
    )}
  </ErrorBoudary>,
  document.getElementById('root')
)

serviceWorker.unregister()
