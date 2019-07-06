import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            value: 'Digite aqui um comentário'
        }
    }

    render() {
        return (
            <form onSubmit={(e) =>{
                e.preventDefault()
                console.log('event', e)
            } }
            
            onChange={(e) => {
                console.log('name', e.target.name)
                console.log('value', e.target.value)
            }}
            >
                <input type='name' name='name'/>
                <input type='email' name='email'/>
                
                <button type='submit'>Enviar Email</button>
            </form>
        )
    }
}






// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             value: 'Digite aqui um comentário'
//         }
//     }

//     render() {
//         return (
//             <form>
//                 <textarea value={this.state.value} onChange={(e) => {
//                     this.setState({
//                         value: e.target.value
//                     })
//                 }} />
//             </form>
//         )
//     }
// }


// Select e Option
// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             value: '2'
//         }
//     }

//     render() {
//         return (
//             <form>
//                 <select multiple value={this.state.value} onChange={(e) => {
//                     this.setState({
//                         value: e.target.value
//                     })
//                 }}>
//                     <option value='1'>Opção 1</option>
//                     <option value='2'>Opção 2</option>
//                     <option value='3'>Opção 3</option>
//                 </select>
//             </form>
//         )
//     }
// }




//Forms - input, Checkbox, Radio
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             value: 'Valor inicial',
//             checked: false
//         }
//     }

//     render() {
//         return (
//             <form>
//                 <input type='text' value={this.state.value} onChange={(e) => {
//                     this.setState({
//                         value: e.target.value
//                     })
//                 }} />

//                 <label>
//                     <input
//                         type='checkbox'
//                         value='my-checkbox'
//                         checked={this.state.checked}
//                         onChange={(e) => {
//                             this.setState({ checked: !this.state.checked })
//                         }} />
//                     Checkbox
//                 </label>

//                 <input type='radio' name='rd' value='1'/> Radio 1
//                 <input type='radio' name='rd' value='2'/> Radio 2
//             </form>
//         )
//     }
// }



//propTypes
// class App extends Component {
//     render() {
//         return (
//             <div >
//                <Button>
//                    Clique em Mim
//                 </Button>
//             </div>
//         )
//     }
// }


//Lifecicle do React
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             time: 0,
//             showTimer: true
//         }
//         console.log('constructor App')
//     }

//     // O componente ainda não esta na tela, no DOM
//     // Não deve ter manipulação de DOM
//     componentWillMount() {
//         console.log('componentWillMount App')
//     }

//     // O componente já esta na tela, no DOM - 
//     //pode ser usado para manipular outras bibliotecas
//     //Pode manipular o DOM
//     componentDidMount() {
//         console.log('componentDidMount App')
//     }

//     render() {
//         console.log('render App')
//         return (
//             <div >
//                <Timer time={this.state.time} />

//                 <button onClick={() => {
//                     this.setState({ time: this.state.time + 10 })
//                 }}>Change props</button>
//             </div>
//         )
//     }
// }




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