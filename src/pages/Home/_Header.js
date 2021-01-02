import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
const { Header } = Layout

const HeaderStyle = styled(Header)`
  height: 30vh;
  background-color: hsla(247, 93%, 67%, 1);
  color: #fff;
  z-index: 1;
`
const _Header = () => {
  return(
    <HeaderStyle>
        HEADER top
    </HeaderStyle>
  )
}

export default _Header