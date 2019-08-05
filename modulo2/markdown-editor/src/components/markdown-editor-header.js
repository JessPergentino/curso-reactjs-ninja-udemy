import React from 'react'

const MarkdownEditorHeader = ({ onSave }) => (
  <header className='editor-header'>
    <button className='save' onClick={onSave}>Salvar</button>
  </header>
)

export default MarkdownEditorHeader


