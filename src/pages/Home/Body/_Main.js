import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const MainStyled = styled.div`
  height:100%;
  background-color: #fff;
  color: #333;
`

const _Main = () => {
  return (
    <MainStyled>
      <Row>
        <Col span={12} offset={2} style={{background:'#456'}}>
          col-12 col-offset-6
        </Col>
      </Row>
    </MainStyled>
  )
}

export default _Main