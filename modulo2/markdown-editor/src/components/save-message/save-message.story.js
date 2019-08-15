import React from 'react'
import { storiesOf } from '@storybook/react'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with isSaving === null', () => (
  <div style={{ backgroud: '#ccc' }} >
    Mensagem: "<SaveMessage isSaving={null} />"
  </div>
))

stories.add('SaveMessage with isSaving === true', () => (
  <div style={{ backgroud: '#ccc' }} >
    Mensagem: "<SaveMessage isSaving={true} />"
  </div>
))

stories.add('SaveMessage with isSaving === false', () => (
  <div style={{ backgroud: '#ccc' }} >
    Mensagem: "<SaveMessage isSaving={false} />"
  </div>
))