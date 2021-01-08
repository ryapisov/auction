import React from 'react'
import styled from 'styled-components'
import { Layout, Row, Col, Divider, Avatar, Image } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
import { AntDesignOutlined } from '@ant-design/icons'

const Wrap = styled.div`
  height:20vh;
  min-height:150px;
  background:#FFFeFF;
`

const ColBox = styled(Col)`
  border: 8px solid rgb(113, 97, 174);;
  text-align:center;
  height:100px;
`

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>

const Footer = () => {
  return (
    <Wrap>
    <Divider orientation="left"></Divider>
     <Row justify="space-around" align="middle">
      <ColBox span={4}>
        <DemoBox value={80}>
        <Image width={'70%'} src="https://img.tehnomaks.ru/img/prod/full/1527844988_10.png" />
        </DemoBox>
      </ColBox>
      <ColBox span={4}>
        <Image width={'100px'} src="https://images.ru.prom.st/645385674_w640_h640_huawei.jpg" />
      </ColBox>
      <ColBox span={4}>
        <DemoBox value={80}>
        <Image width={'100%'} src="https://images.ru.prom.st/645385729_w640_h640_samsung.jpg" /> 
        </DemoBox>
      </ColBox>
      <ColBox span={4}>
        <DemoBox value={80}>
          <Image width={'100%'} src="https://img.tehnomaks.ru/img/prod/full/1546091599_5.png" /> 
        </DemoBox>
      </ColBox>
      <ColBox span={4}>
        <DemoBox value={80}>
          <Image width={'40%'} src="https://img2.freepng.ru/20180411/qrq/kisspng-dell-intel-laptop-computer-icons-service-5acdec34876a51.8543695715234447885547.jpg" /> 
        </DemoBox>
      </ColBox>
    </Row>
    </Wrap>
  )
}

export default Footer
