import React from 'react'

//Criação de componente com Função Pura
const Title = ({name, lastname}) => (
<h1>Olá {`${name} ${lastname}!!!`}</h1>
)

Title.defaultProps = {
    name: 'Desconhecido',
    lastname: 'Sem Sobrenome'
}


// const Title = React.createClass({
//     getDefaultProps: function(){
//         return {
//             name: 'Desconhecido!!!',
//             lastname: {
//                 first: 'Sem ',
//                 last: 'Sobrenome'
//             },

//         }
//     },
    
//     render: function(){
//         return (
//             <h1>Ola {this.props.name + ' ' + this.props.lastname.first + this.props.lastname.last}</h1>
//         )
//     }
// })

export default Title