import React from 'react'
import styled from 'styled-components'
import { Layout, Space, Row, Col, Divider, Typography } from 'antd'
const { Header } = Layout
const { Title } = Typography

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>

const HeaderStyle = styled(Header)`
  height: 30vh;
  background-color: hsla(247, 93%, 67%, 1.0);
  color: #fff;
  z-index: 1;
`

const HeaderContainer = () => {
  return(
    <HeaderStyle>
      <Row style={{height:'15vh'}} justify="center" align="bottom">
        <Col span={8}>
          <Title level={2} style={{textAlign:'center', marginTop:'15px', color:'#fff'}}>
            Аукцион
          </Title>
        </Col>
      </Row>
      <Row style={{height:'15vh'}} justify="left" align="bottom">
        <Col span={18} style={{background:'', marginBottom:'-12px'}}>
          <Space style={{background:'', padding:'0'}}>
            <Title level={5} style={{textAlign:'center', marginLeft:'60px', marginTop:'0px', color:'#fff'}}> Link </Title>
            <Title level={5} style={{textAlign:'center', marginLeft:'80px', marginTop:'0px', color:'#fff'}}> Link </Title>
            <Title level={5} style={{textAlign:'center', marginLeft:'80px', marginTop:'0px', color:'#fff'}}> Демо аккаунт </Title>
          </Space>
        </Col>
      </Row>
    </HeaderStyle>
  )
}

export default HeaderContainer