import React, { PropTypes } from 'react'

const PokemonList = ({ titulo, list }) => (
    <div>
        <h5>{titulo}</h5>
        <ul className='list-group list-group-horizontal' >
            {list.map((item, index) => (
                <li key={index} className='list-group-item text-white bg-dark flex-fill'>
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
)

PokemonList.propTypes = {
    titulo: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

export default PokemonList

