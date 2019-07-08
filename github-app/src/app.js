import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: {
                username: 'Jessica Pergentino',
                photo: 'https://avatars0.githubusercontent.com/u/30954713?v=4',
                login: 'JessPergentino',
                repos: 10,
                followers: 10,
                following: 10
            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]

        }
    }

    render() {
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
        />

    }
}

export default App