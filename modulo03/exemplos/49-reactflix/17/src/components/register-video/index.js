import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar Video</h2>

    <label htmlFor='id'>ID do Video:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Titulo do Video:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>

    <ButtonClose type='button' onClick={onCloseRegisterVideo} >&times;</ButtonClose>
  </Form>
)

const Form = styled.form`
padding: 10px;
position: relative;
`

const ButtonClose = styled.button`
border-radius: 50%;
font-size: 20px;
height: 30px;
line-height: 1;
margin: 0;
padding: 0;
position: absolute;
right: 10px;
top: 10px;
width: 30px
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    /* destructuring em mais de um nivel
        const {
          id: { value: id },
          title: { value: title }
        } = e.target */

    const id = e.target.id.value
    const title = e.target.title.value

    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
