import React, {PropTypes} from 'react'

const Menu = ({img, titulo}) => (
    <div className="inner">
        <i>
            <h3 className="masthead-brand"> <img src={img} />  {titulo}</h3>
        </i>

        <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
        </nav>
    </div>
)

Menu.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
}

export default Menu