import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

storiesOf('Search', module)
  .add('disable true', () => (
    <Search
      isDisable
      handleSearch={action('Handle Search')}
    />
  ))

  .add('disable false', () => (
    <Search
      isDisable={false}
      handleSearch={action('Handle Search')}
    />
  ))
