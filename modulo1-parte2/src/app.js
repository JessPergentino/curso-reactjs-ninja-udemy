import React, { Component } from 'react'
import Title from './title'

//Criação de componentes com classes
class App extends Component {
    render() {
        return (
            <div className='container'>
                <Title name='Jessica' />
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