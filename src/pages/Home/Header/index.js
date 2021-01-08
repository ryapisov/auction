import React from 'react'
import styled from 'styled-components'
import { HomeContext } from '../HomeContext'
import { Row, Col, Descriptions } from 'antd'

const Wrap = styled.div`
  height:30vh;
  min-height:150px;
  background:#6f5df9;
`

const Title = () => {
  return (
    <Row justify="center" align="bottom" style={{color:'#fff', height:'40%'}}>
      <Col span={8}>
        <div style={{textAlign:'center', height:'30px', fontSize:'2.5rem', fontWeight:600}}>
          Аукцион
        </div>
      </Col>
    </Row>
  )
}

const Menu = ({header}) => {
  const style = {
    fontSize:'1.2rem',
    fontWeight:600
  }

  return(
    <Row justify="start" align="bottom" style={{color:'#fff', height:'60%', marginLeft:'40px'}}>
      {header.menu.map((item, i)=> 
        <Col key={i} span={3} style={style} onClick={()=>header.setContent(item.id)}>{item.name}</Col> 
      )}
    </Row>
  )
}

const Header = () => {
  const { header } = React.useContext(HomeContext)
  return(
    <Wrap>
      <Title/>
      <Menu header={header}/>
    </Wrap>
  )
}

export default Header