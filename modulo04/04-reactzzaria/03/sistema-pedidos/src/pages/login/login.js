import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo-react-zzaria.svg'

const Login = () => (
  <>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Logo />
      </Grid>

      <Grid item xs={12}>
        <Button>Entrar com Github</Button>
      </Grid>
    </Grid>
  </>
)

export default Login
