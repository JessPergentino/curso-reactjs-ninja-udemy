import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import 'normalize.css'
import 'milligram'

import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>ReactFlix</HeaderTitle>
      <RegisterButton>Cadastrar Video</RegisterButton>
    </Header>

    <Main>
      <RegisterVideo />
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
aling-item: center;
background: #333;
display: flex;
height: ${headerHeight};
justify-content: space-between;
padding: 0 10px;
`

const HeaderTitle = styled.h1`
color: #fff;
margin-bottom: 0;
`

const RegisterButton = styled.button`
margin-bottom: 0;
`

const Main = styled.main`
min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
height: ${footerHeight};
background: #333;
`
export default App
