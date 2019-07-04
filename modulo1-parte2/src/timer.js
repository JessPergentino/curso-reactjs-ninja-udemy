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
    //Pode usar o this.setState
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps Timer', this.props, nextProps)
    }

    //Serve para fazer verificações do estado e das props
    //Retorna true ou false - true renderiza o componente, false não renderiza
    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate Timer', this.props, nextProps)
        return this.props.time !== nextProps.time
    }

    //executa no ultimo ponto antes do componente atualizar
    //Não pode usar o this.setState - Não pode mexer no state
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate Timer', this.props, nextProps)
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate Timer', prevProps, this.props)
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
        console.log('render Timer')
        return <div>Timer: {this.state.time}</div>
    }
}

export default Timer