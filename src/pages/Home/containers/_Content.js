import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import _About from '../components/_About'
import _Job from '../components/_Job'
import _Main from '../components/_Main'
const { Content } = Layout

const ContentStyle = styled(Content)`
  height: 50vh;
//  background-color: rgba(247, 93%, 67%, 0.4);
  color:#fff;
  z-index: 10;
`
const _Content = () => {
  return(
    <ContentStyle>
      {/* <_Main /> */}
      {/* <_Job />
      <_About/> */}
    </ContentStyle>
  )
}

export default _Content