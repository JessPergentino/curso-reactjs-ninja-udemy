import React, { PropTypes } from 'react'
import PokemonList from './pokemon-list'

const PokemonInfo = ({ pokemonInfo }) => (
    <div className='pokemon-info'>
        <h4 className="card-title">{pokemonInfo.name}</h4>

        <h6>Peso: {pokemonInfo.weight} kg</h6>
        <h6>Altura: {pokemonInfo.height} m</h6>

        <PokemonList title='Habilidades' list={pokemonInfo.abilities} />

        <PokemonList titulo='Movimentos' list={pokemonInfo.moves} />

        <PokemonList titulo='Tipo' list={pokemonInfo.types} />

    </div>

)

PokemonInfo.propTypes = {
    pokemonInfo: PropTypes.object.isRequired
}

export default PokemonInfo

