import React, { Component } from 'react'
import Square from './square'

//Criação de componentes com classes
class App extends Component {
    render() {
        return (
            <div className='container'>
                {['blue', 'red','blue'].map((square, index) => (
                    <Square key={index} color={square} />
                ))}
            </div>
        )
    }
}

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