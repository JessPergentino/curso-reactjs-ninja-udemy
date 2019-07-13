import React, { PropTypes } from 'react'
import Menu from './menu'
import Search from './search'
import Card from './card'

const AppContent = ({ handleSearch, pokemonInfo }) => (

    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

        <header className="masthead mb-auto">
            <Menu
                img="https://img.icons8.com/color/48/000000/pokedex.png"
                titulo='  Pokédex - App' />
        </header>

        <main role="main" className="inner cover">
            <Search
                msgIntro='Encontre Aqui o seu Pokémon Favorito'
                msgPlaceHolder='Digite o nome do Pokémon'
                handleSearch={handleSearch}
            />

            {!!pokemonInfo && <Card
                imgCard={pokemonInfo.sprites.front_default}
                pokemonInfo={pokemonInfo}
            />}
        </main>

        <footer className="mastfoot mt-auto">
            <div className="inner">
                <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                <p><a href="https://icons8.com/">Icons</a> by Icons8</p>
            </div>
        </footer>
    </div>
)

AppContent.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    pokemonInfo: PropTypes.object
}

export default AppContent