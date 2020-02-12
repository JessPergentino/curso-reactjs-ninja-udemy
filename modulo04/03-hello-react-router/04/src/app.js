import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

import './css/style.css'

const LinkStyled = (props) => (
  <NavLink activeStyle={{ color: 'red' }} {...props} />
)

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><LinkStyled activeClassName='active-LinkStyled' to='/' exact > Home </LinkStyled></li>
            <li><LinkStyled to='/sobre'> Sobre </LinkStyled></li>
            <li><LinkStyled to='/contato'> Contato </LinkStyled></li>
            <li><LinkStyled to='/blog'> Blog </LinkStyled></li>
          </ul>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

const Error404 = () => (
  <h1>Página não encontrada</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const Page = ({ match }) => (
  <div>
    <h2>{match.url}</h2>
  </div>
)

const numberOfPost = 2

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      <li><LinkStyled to='/blog/post-1'>Post 1</LinkStyled></li>
      <li><LinkStyled to='/blog/post-2'>Post 2</LinkStyled></li>
    </ul>

    <Switch>
      <Route exact path='/blog' render={() => <NoPosts numberOfPost={numberOfPost} />} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>

  </div>
)

const Post404 = () => (
  <h2>Este post não existe.</h2>
)

const Post = ({ match }) => (
  <div>
    <h2>{match.params.post}</h2>
  </div>
)

const NoPosts = (numberOfPost) => (
  <p>Selecione um dos {numberOfPost} Post</p>
)

export default App
