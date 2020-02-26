/* eslint-disable no-restricted-globals */
import React, { lazy, Suspense, useEffect, useContext } from 'react'
import t from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App () {
  const { userInfo, setUserInfo } = useContext(AuthContext)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Usuário', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  if (isUserLoggedIn) {
    console.log('usuário está logado')
    if (location.pathname === '/login') {
      console.log('usuário logado e na page login - ir pra home')
      return <Redirect to='/' />
    } else {
      console.log('usuário logado mas não esta na page login')
    }
  } else {
    console.log('usuário está deslogado')
    if (location.pathname !== '/login') {
      console.log('usuário não esta logado e nem na page login')
      return <Redirect to='/login' />
    } else {
      console.log('usuário esta não esta logado e está na page login')
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propType = {
  location: t.object.isRequired
}

export default App
