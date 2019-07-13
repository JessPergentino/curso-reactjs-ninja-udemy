import React, { PropTypes } from 'react'
import PokemonInfo from './pokemon-info'

const Card = ({ imgCard, pokemonInfo }) => (
    <div className="card text-white bg-dark mb-3 mt-3">
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={imgCard} className="card-img" />
            </div>

            <div className="col-md-8">
                <div className="card-body">
                    <PokemonInfo
                        pokemonInfo={pokemonInfo}
                    />
                </div>
            </div>
        </div>
    </div>
)

Card.propTypes = {
    imgCard: PropTypes.string.isRequired,
    pokemonInfo: PropTypes.object
}

export default Card