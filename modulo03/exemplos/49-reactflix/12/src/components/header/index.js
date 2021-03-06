import React from 'react'
import styled from 'styled-components'

import { headerHeight } from 'utils/constants'

const MainHeader = () => (
  <Header>
    <HeaderTitle>ReactFlix</HeaderTitle>
    <RegisterButton>Cadastrar Video</RegisterButton>
  </Header>
)

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

export default MainHeader
