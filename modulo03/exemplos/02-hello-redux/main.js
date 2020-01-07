// função reducer
const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }
  return state
}

const { createStore } = Redux
const store = createStore(counter)

// Método para pegar o estado atual da aplicação
console.log(store.getState())

// Método que recebe uma função como parametro que é executada toda
// vez que uma ação é disparada
store.subscribe(() => {
  console.log('Disparou uma ação', store.getState())
})

// Método para disparar uma ação
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'DECREMENT'})