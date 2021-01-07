import React from 'react'
import styled from 'styled-components'
import { Layout, Row, Col } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'

const Wrap = styled.div`
  height:20vh;
  min-height:150px;
  background:#fff;
`

const Footer = () => {
  return (
    <Wrap>
      <Row justify="space-around" align="middle">
      <Col span={4}>
        ||||||
      </Col>
      <Col span={4}>
        ||||||
      </Col>
      <Col span={4}>
        ||||||
      </Col>
      <Col span={4}>
        ||||||
      </Col>
    </Row>

    </Wrap>
  )
}

export default Footer
