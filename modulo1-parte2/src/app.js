import React, { Component } from 'react'
import Button from './button'

class App extends Component {
    render() {
        return (
            <div className='container' >
                <Button>
                    <span>Texto</span>
                    Outro Texto
                </Button>
            </div>
        )
    }
}



//Criação de componentes com classes
//Eventos - São usado in line e com arrow functions
// class App extends Component {
//     render() {
//         return (
//             <div className='container' onClick={(e) => {
//                 alert('Clicou')
//             }}>
//                 <Square />
//             </div>
//         )
//     }
// }

// Props Key
// class App extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 {['blue', 'red','blue'].map((square, index) => (
//                     <Square key={index} color={square} />
//                 ))}
//             </div>
//         )
//     }
// }

// const App = React.createClass({
//     render: function () {
//         return (
//             <div className='container'>
//                 <Title name='Jessica'/>
//             </div>
//         )
//     }
// })

export default App