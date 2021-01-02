/**
 * PAGE HOME
 * 
*/

import React from 'react'
import styled from 'styled-components'
import PlayerBackground from '../../components/PlayerBackground'
import { Layout } from 'antd'
import _Header  from '../../pages/Home/_Header'
import _Footer  from '../../pages/Home/_Footer'
import _Content from '../../pages/Home/_Content'

const LayoutStyled = styled(Layout)`
  min-height:100vh;
  background: none;
`

const Home = () => {
  return(
    <LayoutStyled>
      <PlayerBackground />
      <_Header />
      <_Content />
      <_Footer />
    </LayoutStyled>
  )
}

export default Home