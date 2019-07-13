import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemonInfo: null,
            isFetching: false,
            error: ''
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
            this.setState({
                isFetching: true,
                pokemonInfo: null
            })
            ajax().get(`https://pokeapi.co/api/v2/pokemon/${value}`)
                .then((result) => {
                    this.setState({
                        pokemonInfo: {
                            name: result.name,
                            weight: result.weight,
                            height: result.height,
                            abilities: result.abilities.map((item) => {
                                return item.ability
                            }),
                            types: result.types.map((item) => {
                                return item.type
                            }),
                            sprites: result.sprites
                        },
                    })

                })
                .always(() => this.setState({ isFetching: false }))
        }
    }

    render() {
        return (< AppContent
            pokemonInfo={this.state.pokemonInfo}
            isFetching={this.state.isFetching}
            handleSearch={this.handleSearch}
            error={this.state.error}
        />
        )
    }
}

export default App