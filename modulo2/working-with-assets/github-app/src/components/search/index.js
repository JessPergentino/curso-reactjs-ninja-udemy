import React, { PropTypes } from 'react'
import './search.css'

const Search = ({ isDisable, handleSearch }) => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuário no GitHub'
            disabled={isDisable}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    isDisable: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default Search