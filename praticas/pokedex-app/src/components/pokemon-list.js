import React, { PropTypes } from 'react'

const PokemonList = ({ title, list }) => (
    <div>
        <h5>{title}</h5>
        <ul className='list-group list-group-horizontal' >
            {list.map((iten, index) => (
                <li key={index} className='list-group-item text-white bg-dark flex-fill'>
                    {iten.name}
                </li>
            ))}
        </ul>
    </div>
)

PokemonList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

export default PokemonList