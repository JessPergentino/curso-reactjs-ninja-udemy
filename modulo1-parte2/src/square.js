import React from 'react'

//Funções puras não manipulam state
//stateless
const Square = ({color}) => (
    <div style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
    }}/>
)

Square.defaultProps = {
    color: 'red'
}

export default Square