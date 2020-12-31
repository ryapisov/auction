import { DatePicker,  Button } from 'antd'
import ReactPlayer from 'react-player/youtube'

function App() {
  return (
    <div className="test">
      <ReactPlayer 
        className=''
        url='https://www.youtube.com/watch?v=Sl9ac5BJxfs' 
        valume={0}
        muted={true}
        width='100wh'
        height='100vh'
        // light={true}
        onReady={true}
        loop={true}
        playing={true}
      />
      <Button type="primary">PRESS ME</Button>
      <DatePicker />- аукцион
    </div>
  )
}

export default App
