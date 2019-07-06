import React from 'react'

const App = () => (

    <div className='app'>
        <div className='search'>
            <input 
            type='search'
            placeholder='Digite o nome do usuário no GitHub'
            />
        </div>

        <div className='user-info'>
            <img src='https://avatars0.githubusercontent.com/u/30954713?v=4' />
            <h2>
                <a href='https://github.com/JessPergentino'> Jessica Pergentino</a>
            </h2>

            <ul className='repos-info'>
                <li>Repositórios: 122</li>
                <li>Seguidores: 10</li>
                <li>Seguindo: 10</li>
            </ul>

            <div className='actions'>
                <button>Ver Repositórios</button>
                <button>Ver favoritos</button>
            </div>

            <div className='repos'>
                <h2>Repositórios</h2>
                <ul >
                    <li><a href='#'>Nome do Repositório</a></li>
                </ul>
            </div>

            <div className='starred'>
                <h2>Favoriotos</h2>
                <ul >
                    <li><a href='#'>Nome do Repositório</a></li>
                </ul>
            </div>
        </div>
    </div>
)

export default App