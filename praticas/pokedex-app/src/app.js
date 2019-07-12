import React from 'react'

const App = React.createClass({
    render: function () {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">

                    <div className="inner">
                        <i>
                            <h3 className="masthead-brand"> <img src="https://img.icons8.com/color/48/000000/pokedex.png" />  Pokédex - App</h3>
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

                    <div>
                        <div className="card text-white bg-dark mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">Ditto</h4>

                                        <h6>Peso: 4.0 kg</h6>
                                        <h6>Altura: 0.3 m</h6>

                                        <div>
                                            <h5>Habilidades</h5>
                                            <ul className="list-group list-group-horizontal">
                                                <li className="list-group-item text-white bg-dark flex-fill">
                                                    imposter
                                                    </li>
                                                <li className="list-group-item text-white bg-dark flex-fill">
                                                    limber
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5>Movimentos</h5>
                                            <ul className="list-group list-group-horizontal">
                                                <li className="list-group-item text-white bg-dark flex-fill">
                                                    transform
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5>Tipo</h5>
                                            <ul className="list-group list-group-horizontal">
                                                <li className="list-group-item text-white bg-dark flex-fill">
                                                    <span className="badge badge-secondary">
                                                        normal
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

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