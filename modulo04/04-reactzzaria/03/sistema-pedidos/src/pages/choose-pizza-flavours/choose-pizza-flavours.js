import React from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import { H4, HeaderContent } from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state.pizza
  return (
    <HeaderContent container direction='column' alignItems='center'>
      <H4 variant='h3'>
        Escolha até {flavours} {' '}
        {singularOrPlural(flavours, 'sabor', 'sabores')}:
      </H4>
    </HeaderContent>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
