/**
 * PAGE HOME
 * 
*/

import React from 'react'
import styled from 'styled-components'
import PlayerBackground from './components/_PlayerBackground'
import { Layout } from 'antd'
import Header  from './containers/_Header'
import Footer  from './containers/_Footer'
import Content from './containers/_Content'
import Auth    from './containers/_Auth'

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