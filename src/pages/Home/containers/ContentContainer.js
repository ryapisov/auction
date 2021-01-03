import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import About from '../components/_About'
import Job from '../components/_Job'
import { PageContext } from '../Context'

const Content = styled(Layout.Content)`
  height: 50vh;
  // background-color: rgba(247, 93%, 67%, 0.4);
  color:#fff;
  z-index: 10;
`

const ContentContainer = () => {
  const { page } = React.useContext(PageContext)

  return(
    <Content>
      { page === 'about' && <About/> }
      { page === 'job' && <Job /> }
    </Content>
  )
}

export default ContentContainer