import React, { PropTypes } from 'react'

const MarkDownEditor = ({ value, handleChange }) => (
  <div className='editor'>

    <textarea name='textarea' value={value} onChange={handleChange} />

    <div className='view'>
      {value}
    </div>
  </div >
)

MarkDownEditor.protoTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkDownEditor