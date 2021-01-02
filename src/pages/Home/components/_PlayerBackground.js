/**
 * COMPONENT ReactPlayer
 * 
*/

import ReactPlayer from 'react-player/youtube'
import styled from 'styled-components'

const FilterBackgroundStyled = styled.div`
  position: fixed;
  top:0;
  left: 0px;
  right: 0px;
  bottom: 0;
  min-height:100vh;
  background-color: rgba(18, 179, 24, 0.1);
  z-index: -1;
`

const ReactPlayerStyled = styled(ReactPlayer)`
  position: fixed;
  top:0;
  left: 0px;
  right: 0px;
  bottom: 0;
  z-index: -2;
`

const _PlayerBackground = () => {
  return(
    <>
      <FilterBackgroundStyled />
      <ReactPlayerStyled
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

export default _PlayerBackground