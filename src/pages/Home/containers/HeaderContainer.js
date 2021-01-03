import React from 'react'
import styled from 'styled-components'
import { Layout, Space, Row, Col, Typography } from 'antd'

const Header= styled(Layout.Header)`
  height: 30vh;
  background-color: hsla(247, 93%, 67%, 1.0);
  color: #fff;
  z-index: 1;
`
const SpaceItem = styled.span`
  display:inline-block;
  text-align: center;
  font-size: 1.1rem;
  font-weight:600;
  margin-right:112px;
  :hover{
    color: #eee;
    cursor:pointer;
  }
`
const Title = styled(Typography)`
  text-align: center;
  margin-top: 15px;
  font-size: 38px;
  font-weight:600;
  color: #fff;
`
const HeaderContainer = () => {
  return(
    <Header>
      <Row style={{height:'15vh'}} justify="center" align="bottom">
        <Col span={8}>
          <Title>Аукцион</Title>
        </Col>
      </Row>

      <Row style={{height:'15vh'}} justify="left" align="bottom">
        <Col span={18} style={{marginBottom:'-10px'}}>
          <Space>
            <SpaceItem onClick={()=>alert(1)}>аукцион</SpaceItem>
            <SpaceItem onClick={()=>alert(2)}>товары</SpaceItem>
            <SpaceItem onClick={()=>alert(3)}>карьера</SpaceItem>
            <SpaceItem onClick={()=>alert(4)}>заработок</SpaceItem>
            <SpaceItem onClick={()=>alert(5)}>демо&nbsp;аккаунт</SpaceItem>
          </Space>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderContainer