// import { DatePicker, Row, Col, Button, Layout, Divider, Space, Typography, Menu} from 'antd'
// import ReactPlayer from 'react-player/youtube'
// import Authentication from './containers/Authentication'
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// const { Title } = Typography
// const { SubMenu } = Menu

// const DemoBox = props => <Col 
//     span={4}
//     className={`height-${props.value}`} 
//     style={{background:'#333', borderRadius:'8px'}}>
//     {props.children}  
//   </Col>

import Home from './pages/Home'
import Account from './pages/Account'

function App() {
  return (
    <>
     <Home/>
     {/* <Account/> */}
    </>

    // <div className="test">
    //   <Header>
    //   <Row>
    //   <Col span={12} offset={12}>
    //     AUCTION
    //   </Col>
    //   </Row>

    //   <Row justify="space-between">
    //   <Col span={4}>
    //     <Title level={5} style={{color:'#fff'}}>Каталог товаров</Title>
    //   </Col>
    //   <Col span={4}>
    //     <Title level={5} style={{color:'#fff'}}>Магазины</Title>
    //   </Col>
    //   <Col span={4}>
    //     <Title level={4} style={{color:'#fff'}}>||||||||||||</Title>
    //   </Col>
    //   <Col span={4}>
    //     <Title level={4} style={{color:'#fff'}}>||||||||||||</Title>
    //   </Col>
    //   <Col span={4}>
    //    <Title level={5} style={{color:'#fff'}}>Демо версия</Title>
    //   </Col>
    //   <Col span={4}>
    //     iiiii
    //   </Col>
    //   </Row>
        

   






    //   </Header>
    //   <Content>
    //     Контентная часть
    //   </Content>
    //   <Footer>
    //     <Divider orientation="left" style={{color:'#fff'}}>
    //        |||||||||||||||||||||||||||||||||||||
    //     </Divider>
    //     <Row justify="space-between">
    //       <DemoBox value={100}>руководство <br/>мой круг<br/>достижения</DemoBox>
    //       <DemoBox value={100}>руководство <br/>мой круг<br/>достижения<br/> руководство <br/>мой круг<br/>достижения </DemoBox>
    //       <DemoBox value={100}>руководство <br/>мой круг<br/>достижения</DemoBox>
    //       <DemoBox value={100}>руководство <br/>мой круг<br/>достижения</DemoBox>
    //     </Row>
    //   </Footer>
    //   <Authentication />
    //   <ReactPlayer 
    //     className='player'
    //     url='https://www.youtube.com/watch?v=UVxyXzaCI34' 
    //     valume={0}
    //     muted={true}
    //     width='90wh'
    //     height='100vh'
    //     onReady={true}
    //     loop={true}
    //     playing={true}
    //   />
    // </div>

  )
}

export default App
