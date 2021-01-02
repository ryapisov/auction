/**
 * PAGE HOME
 * 
*/

import React from 'react'
import styled from 'styled-components'
import PlayerBackground from './components/_PlayerBackground'
import { Layout } from 'antd'
import _Header  from './containers/_Header'
import _Footer  from './containers/_Footer'
import _Content from './containers/_Content'
import _Auth    from './containers/_Auth'

const LayoutStyled = styled(Layout)`
  min-height:100vh;
  background: none;
`

const Home = () => {
  return(
    <LayoutStyled>
      <PlayerBackground />
      <_Auth />
      <_Header />
      <_Content />
      <_Footer />
    </LayoutStyled>
  )
}

export default Home