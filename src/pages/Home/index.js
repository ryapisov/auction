import React from 'react'
import styled from 'styled-components'
import PlayerBackground from './components/_PlayerBackground'
import { Layout } from 'antd'
import Header  from './containers/HeaderContainer'
import Footer  from './containers/FooterContainer'
import Content from './containers/ContentContainer'
import Auth    from './containers/AuthContainer'

const LayoutStyled = styled(Layout)`
  min-height:100vh;
  background: none;
`

const Home = () => {
  return(
    <LayoutStyled>
      <PlayerBackground />
      <Auth />
      <Header />
      <Content />
      <Footer />
    </LayoutStyled>
  )
}

export default Home