import React, { PropTypes } from 'react'

const Search = ({ msgIntro, msgPlaceHolder, handleSearch }) => (
    <div className='search'>
        <h1 className="cover-heading">{msgIntro}</h1>
        <input
            className='form-control'
            type='search'
            placeholder={msgPlaceHolder}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    msgIntro: PropTypes.string.isRequire,
    msgPlaceHolder: PropTypes.string.isRequire,
    handleSearch: PropTypes.func.isRequire
}

export default Search