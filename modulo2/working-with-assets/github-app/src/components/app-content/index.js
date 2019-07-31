import React, { PropTypes } from 'react'
import Search from '../search'
import UserInfo from '../user-info'
import Actions from '../actions'
import Repos from '../repos'
import './app.css'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, onClickRepo, onClickStarred, handlePagination }) => (
  <div className='app'>
    <Search isDisable={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions onClickRepo={onClickRepo} onClickStarred={onClickStarred} />}

    <div className='repos-container'>
      {!!repos.length &&
        <Repos
          className='repos'
          title='Repositórios:'
          repos={repos}
          handlePagination={(clicked) => handlePagination('repos', clicked)}
        />
      }

      {!!starred.length &&
        <Repos
          className='starred'
          title='Favoritos:'
          repos={starred}
          handlePagination={(clicked) => handlePagination('starred', clicked)}
        />
      }
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  onClickRepo: PropTypes.func.isRequired,
  onClickStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired
}

export default AppContent
