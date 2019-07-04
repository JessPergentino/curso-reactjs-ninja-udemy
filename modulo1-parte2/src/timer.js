import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }

        this.timer
    }

    //Mostra o estado anterior e o atual das props
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', this.props, nextProps)
    }

    // Só executa uma vez
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }

    //Remove o componente do DOM
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return <div>Timer: {this.state.time}</div>
    }
}

export default Timer