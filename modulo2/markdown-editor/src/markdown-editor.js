import React, { PropTypes } from 'react'

const MarkDownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>

    <textarea
      name='textarea'
      value={value}
      onChange={handleChange}
      autoFocus
    />

    <div className='view' dangerouslySetInnerHTML={getMarkup()}>
    </div>
  </div >
)

MarkDownEditor.protoTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkDownEditor
