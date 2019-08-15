'use strict'

import React, { Component } from 'react'
import MarckDownEditor from 'views/markdown-editor'
import marked from 'marked'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = (value) => {
      if (this.state.isSaving) {
        localStorage.setItem('md', this.state.value)
        this.setState({ isSaving: false })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem('md')
      this.setState({ value: '' })
    }

    this.handleCreate = () => {
      this.setState({ value: '' })
      this.textarea.focus()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidMount() {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <MarckDownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleCreate={this.handleCreate}
        handleRemove={this.handleRemove}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
      />
    )
  }
}

export default App
