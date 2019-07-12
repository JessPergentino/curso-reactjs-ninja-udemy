import React, {PropTypes} from 'react'

const Search = ({msgIntro, msgPlaceHolder}) => (
    <div className='search'>
        <h1 className="cover-heading">{msgIntro}</h1>
        <input className='form-control' type='search' placeholder={msgPlaceHolder} />
    </div>
)

Search.propTypes = {
    msgIntro: PropTypes.string.isRequire,
    msgPlaceHolder: PropTypes.string.isRequire
}

export default Search