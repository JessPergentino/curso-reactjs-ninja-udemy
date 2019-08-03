'use strict'

import React, { Component } from 'react'
import MarckDownEditor from './markdown-editor'

import './css/style.css'

class App extends Component {
  constructor() {
    super()

    this.state = { value: '' }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
  }

  render() {
    return (
      <MarckDownEditor
        value={this.state.value}
        handleChange={this.handleChange}
      />
    )
  }
}

export default App
