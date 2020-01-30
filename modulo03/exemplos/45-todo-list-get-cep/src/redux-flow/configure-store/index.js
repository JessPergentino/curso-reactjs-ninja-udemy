import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'

export default ({ initialState } = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk))

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`)
  console.log('Will dispatch:', action)
  console.log('state:', getState())
  const nextAction = next(action) // Dispara a ação
  console.log('Next state:', getState()) // mostra a próxima ação
  console.groupEnd(`LOGGER->${action.type}`)
  return nextAction
}
