import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
const { Footer } = Layout

const FooterStyle = styled(Footer)`
  min-height: 20vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 1.0);
  color: #fff;
  z-index: 1;
`
const _Footer = () => {
  return(
    <FooterStyle>
      Footer
    </FooterStyle>
  )
}

export default _Footer