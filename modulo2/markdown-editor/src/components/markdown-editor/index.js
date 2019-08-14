import React, { PropTypes } from 'react'
import Header from './header'

const MarkDownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props}) => (
  <section className='editor'>
    <Header {...props} />
    <textarea
      value={value}
      onChange={handleChange}
      autoFocus
      ref={textareaRef}
    />

    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkDownEditor.protoTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkDownEditor
