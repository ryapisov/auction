import React from 'react'
import styled from 'styled-components'
import { HomeContext } from '../HomeContext'
import About from './_About'
import Player from './_Player'
import Job from './_Job'

const Wrap = styled.div`
  height:50vh;
  min-height:150px;
`

const Body = () => {
  const { body } = React.useContext(HomeContext)

  return (
    <Wrap>
      { body.content === 'player' && <Player/> }
      { body.content === 'about' && <About/> }
      { body.content === 'job' && <Job /> }
    </Wrap>
  )
}

export default Body