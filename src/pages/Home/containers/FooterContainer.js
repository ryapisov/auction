import React from 'react'
import styled from 'styled-components'
import { Layout, Row, Col } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'

const { Footer } = Layout

const FooterStyle = styled(Footer)`
  min-height: 20vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 1.0);
  color: #fff;
  z-index: 1;
`
const Title = styled.div`
  color: #fff;
 // background:#555;
  margin-left:0.8rem;
  margin-top:12px;
  margin-bottom:1rem;
 // margin-left:0.6rem;
`
const P = styled.p`
  color: #fff;
 // background:#555;
  margin-top:-8px;
  margin-left:1.4rem;
`
const FooterContainer = () => {
  return(
    <FooterStyle>
      <Row justify="space-around">
        <Col span={4}>
          <Title><AppleOutlined />&nbsp;Apple</Title>
          <P>- продукция</P>
        </Col>
        <Col span={4}>
          <Title><AndroidOutlined />&nbsp; Android</Title>
          <P> продукция</P>
        </Col>
        <Col span={4}>
          <Title>Спонсоры</Title>
          <P>Samsung</P>
          <P> Huawei (Honor)</P>
        </Col>
        <Col span={4}>
          <Title>Разработчики</Title>
          <P> продукция</P>
        </Col>
      </Row>
    </FooterStyle>
  )
}

export default FooterContainer