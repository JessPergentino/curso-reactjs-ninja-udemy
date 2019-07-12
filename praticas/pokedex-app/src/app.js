import React from 'react'
import Search from './components/search'
import Menu from './components/menu'

const App = React.createClass({
    render: function () {
        return (
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
                    />

                    <div className='pokemon-info'>
                        <div className="card text-white bg-dark mb-3 mt-2">
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