import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Actions from './index'

storiesOf('Div', module)
    .add('first story', () => (
        <Actions
            onClickRepo={action('Get Repos')}
            onClickStarred={action('Get Starred')}
        />
    ))

    .add('second story', () => (
        <Actions
            onClickRepo={action('Get Repos')}
            onClickStarred={action('Get Starred')}
        />
    ))
