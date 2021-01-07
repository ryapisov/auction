import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styled from 'styled-components'

const FilterBackground = styled.div`
  position: fixed;
  top:0;
  left: 0px;
  right: 0px;
  bottom: 0;
  min-height:100vh;
  background-color: rgba(18, 179, 24, 0.1);
  z-index: -1;
`

const Player = styled(ReactPlayer)`
  position: fixed;
  top:0;
  left: 0px;
  right: 0px;
  bottom: 0;
  z-index: -2;
`

const _Player = () => {
  return(
    <>
      <FilterBackground />
      <Player
        url='https://www.youtube.com/watch?v=UVxyXzaCI34' 
        valume={0}
        muted={true}
        width='90wh'
        height='110vh'
        loop={true}
        playing={true}
      />
    </>
  )
}

export default _Player