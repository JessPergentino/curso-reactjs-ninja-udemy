import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import 'normalize.css'
import 'milligram'

import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'

const App = () => (
  <Container>
    <Header>
      <h1>ReactFlix</h1>
    </Header>

    <Main>
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer>
      &copy; 2020
    </Footer>
  </Container>
)

const headerHeight = '60px'
const footerHeight = '30px'

injectGlobal`
html, body, div[data-js="app"] {
  height: 100%;
}
`

const Container = styled.div`
height: 100%;
`

const Header = styled.header`
height: ${headerHeight};
background: #333;
`

const Main = styled.main`
min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
height: ${footerHeight};
background: #333;
`
export default App
