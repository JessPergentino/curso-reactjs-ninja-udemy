/* eslint-disable no-restricted-globals */
import React, { lazy, Suspense, useState, useEffect, useContext } from 'react'
import t from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

import { HOME, LOGIN } from 'routes'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App () {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Usuário', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      })
      setDidCheckUserIn(true)
    })
  }, [setUserInfo])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propType = {
  location: t.object.isRequired
}

export default App
