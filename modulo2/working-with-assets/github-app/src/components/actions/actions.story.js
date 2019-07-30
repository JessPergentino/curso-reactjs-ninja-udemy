import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Actions from './index'

storiesOf('Actions', module)
  .add('Actions component', () => (
    <Actions
      onClickRepo={action('Get Repos')}
      onClickStarred={action('Get Starred')}
    />
  ))
