import React from 'react'

const App = React.createClass({
    render: function () {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">

                    <div className="inner">
                        <i>
                            <h3 className="masthead-brand"> <img src="https://img.icons8.com/color/48/000000/pokedex.png"/>  Pokédex - App</h3>
                        </i>

                        <nav className="nav nav-masthead justify-content-center">
                            <a className="nav-link active" href="#">Home</a>
                        </nav>
                    </div>
                </header>

                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Encontre Aqui o seu Pokémon Favorito</h1>
                    <input className='form-control' type='search' placeholder='Digite o nome do Pokémon' />
                    <p className="lead mt-3">
                        Realize a busca por Pokémon pelo nome.
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                        <p><a href="https://icons8.com/">Icons</a> by Icons8</p>
                    </div>
                </footer>
            </div>

        )
    }
})

export default App