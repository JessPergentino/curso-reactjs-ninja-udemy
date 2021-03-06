import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import 'normalize.css'
import 'milligram'

import { headerHeight, footerHeight } from 'utils/constants'

import Header from 'components/header'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import Footer from 'components/footer'

const App = () => (
  <Container>
    <Header />

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />
  </Container>
)

injectGlobal`
html, body, div[data-js="app"] {
  height: 100%;
}
`

const Container = styled.div`
height: 100%;
`

const Main = styled.main`
min-height: calc(100% - ${headerHeight} - ${footerHeight});
`
export default App
