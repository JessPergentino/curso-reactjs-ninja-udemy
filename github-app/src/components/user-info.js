import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars0.githubusercontent.com/u/30954713?v=4' />

        <div className='username'>
            <h1>
                <a href='https://github.com/JessPergentino'> Jessica Pergentino</a>
            </h1>
        </div>
        
        <ul className='repos-info'>
            <li>Repositórios: 122</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 10</li>
        </ul>
    </div>
)

export default UserInfo