import { DatePicker,  Button, Layout } from 'antd'
import ReactPlayer from 'react-player/youtube'
import Authentication from './containers/Authentication'


function App() {
  const { Header, Footer, Sider, Content } = Layout

  return (
    <div className="test">
      <Header>
        AUCTION
      </Header>
      <Content>
        Контентная часть
      </Content>
      <Footer>
        sdf
      </Footer>
      <Authentication />
      <ReactPlayer 
        className='player'
        url='https://www.youtube.com/watch?v=UVxyXzaCI34' 
        valume={0}
        muted={true}
        width='90wh'
        height='100vh'
        onReady={true}
        loop={true}
        playing={true}
      />
    </div>
  )
}

export default App
