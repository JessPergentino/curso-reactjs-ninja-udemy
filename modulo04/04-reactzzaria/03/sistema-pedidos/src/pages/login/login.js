import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'

import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import { AuthContext } from 'contexts/auth'

const Login = () => {
  const { handleLogin } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GithubButton onClick={handleLogin}>
            Entrar com Github
          </GithubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

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
