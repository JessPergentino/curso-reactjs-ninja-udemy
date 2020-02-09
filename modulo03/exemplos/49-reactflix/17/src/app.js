import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'

import 'normalize.css'
import 'milligram'

import { headerHeight, footerHeight } from 'utils/constants'

import Header from 'components/header'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import Footer from 'components/footer'

import { fetchVideos } from 'reducers/videos/action-creators'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
    const { isRigisterVideoFormOpened, videoSingleId, videos } = this.props

    return (
      <Container>
        <Header />

        <Main>
          {isRigisterVideoFormOpened && <RegisterVideo />}
          {videoSingleId && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title} />}
          <VideosList />
        </Main>

        <Footer />
      </Container>
    )
  }
}

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

const mapStateToProps = (state) => ({
  isRigisterVideoFormOpened: state.ui.isRigisterVideoFormOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
})

const mapDispatchToProps = { fetchVideos }

export default connect(mapStateToProps, mapDispatchToProps)(App)
