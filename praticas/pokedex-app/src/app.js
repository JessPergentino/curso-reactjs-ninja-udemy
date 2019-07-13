import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemonInfo: null
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
            ajax().get(`https://pokeapi.co/api/v2/pokemon/${value}`)
                .then((result) => {
                    this.setState({
                        pokemonInfo: {
                            name: result.name,
                            weight: result.weight,
                            height: result.height,
                            abilities: result.abilities,
                            moves: result.moves,
                            types: result.types,
                            sprites: result.sprites
                        }
                    })
                })
                console.log(this.state.pokemonInfo.abilities)
        }
    }

    render() {
        return (< AppContent
            pokemonInfo={this.state.pokemonInfo}
            handleSearch={this.handleSearch}
        />
        )
    }
}

export default App