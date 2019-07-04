import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            showTimer: true
        }
        console.log('constructor App')
    }

    // O componente ainda não esta na tela, no DOM
    // Não deve ter manipulação de DOM
    componentWillMount() {
        console.log('componentWillMount App')
    }

    // O componente já esta na tela, no DOM - 
    //pode ser usado para manipular outras bibliotecas
    //Pode manipular o DOM
    componentDidMount() {
        console.log('componentDidMount App')
    }

    render() {
        console.log('render App')
        return (
            <div >
               <Timer time={this.state.time} />

                <button onClick={() => {
                    this.setState({ time: this.state.time + 10 })
                }}>Change props</button>
            </div>
        )
    }
}




//     render() {
//         console.log('render')
//         return (
//             <div >
//                 <Square color={this.state.color} />

//                 {['red', 'green', 'blue'].map((color) => (
//                     <Button
//                         key={color}
//                         handleClick={() => this.setState({ color })}>
//                         {color}
//                     </Button>
//                 ))}
//             </div>
//         )
//     }
// }









//Componentes Statefull tem a capacidade de manipular o state

//Statefull
// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             text: 'Jessica'
//         }
//     }

//     render() {
//         return (
//             <div className='container' onClick={() => this.setState({
//                 text: "Outro Texto"
//             })} >
//                 {this.state.text}
//             </div>
//         )
//     }
// }




//Props Children
// class App extends Component {
//     render() {
//         return (
//             <div className='container' >
//                 <LikeButton />
//                 <SeachButton />
//             </div>
//         )
//     }
// }



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