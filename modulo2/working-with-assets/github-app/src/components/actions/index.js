import React, { PropTypes } from 'react'
import './actions.css'

const Actions = ({ onClickRepo, onClickStarred }) => (
    <div className='actions'>
        <button onClick={onClickRepo}>Ver Repositórios</button>
        <button onClick={onClickStarred}>Ver favoritos</button>
    </div>
)

Actions.propTypes = {
    onClickRepo: PropTypes.func.isRequired,
    onClickStarred: PropTypes.func.isRequired
}

export default Actions