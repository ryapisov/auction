import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
const { Content } = Layout

const ContentStyle = styled(Content)`
  height: 50vh;
 // background-color: hsla(247, 93%, 67%, 0.8);
  color:#fff;
  z-index: 1;
`
const _Content = () => {
  return(
    <ContentStyle>
      content
    </ContentStyle>
  )
}

export default _Content