import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC2tlVmF6k-DF3jf-MLAZzLKRev5zC_2Qo',
  authDomain: 'reactzzaria-e44fa.firebaseapp.com',
  databaseURL: 'https://reactzzaria-e44fa.firebaseio.com',
  projectId: 'reactzzaria-e44fa',
  storageBucket: 'reactzzaria-e44fa.appspot.com',
  messagingSenderId: '616293224432',
  appId: '1:616293224432:web:84f35327f378b7d8e15735'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={10}>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item xs={12} container justify='center'>
        <GithubButton>
          Entrar com Github
        </GithubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 40px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none
  }
`

export default Login
