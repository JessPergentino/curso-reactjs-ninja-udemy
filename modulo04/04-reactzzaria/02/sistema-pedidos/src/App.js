import React, { Suspense } from 'react'
import './App.css'

const Img = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./img'))
    }, 10000)
  })
})
const P = React.lazy(() => import('./p'))
const A = React.lazy(() => import('./a'))

function App () {
  return (

    <di className='App'>
      <header className='App-header'>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Img />
          <P />
          <A />
        </Suspense>
      </header>
    </di>
  )
}

export default App
