import React, { PropTypes } from 'react'

const Search = ({ msgIntro, msgPlaceHolder, handleSearch, isDisable }) => (
    <div className='search'>
        <h1 className="cover-heading">{msgIntro}</h1>
        <input
            className='form-control'
            type='search'
            placeholder={msgPlaceHolder}
            onKeyUp={handleSearch}
            disabled={isDisable}
        />
    </div>
)

Search.propTypes = {
    msgIntro: PropTypes.string.isRequired,
    msgPlaceHolder: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    isDisable: PropTypes.bool.isRequired
}

export default Search