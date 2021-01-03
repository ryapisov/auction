import React from 'react'
import styled from 'styled-components'
import PlayerBackground from './components/_PlayerBackground'
import { Layout } from 'antd'
import Header  from './containers/HeaderContainer'
import Footer  from './containers/FooterContainer'
import Content from './containers/ContentContainer'
import Auth    from './containers/AuthContainer'
import { PageContext } from './Context'

const LayoutStyled = styled(Layout)`
  min-height:100vh;
  background: none;
`
const Home = () => {
  const [ currentPage, setCurrentPage ] = React.useState('1')

  const value = {
    menu:[
      {value:'Об аукционе', link:'about'},
      {value:'Бренды', link:'brand'},
      {value:'Товары', link:'products'},
      {value:'Карьера', link:'job'},
      {value:'Заработок', link:'earnings'},
      {value:'Демо аккаунт', link:'/#link'}
    ],
    toPage: (page) => setCurrentPage(page),
    page: currentPage
  }

  console.log(currentPage)

  return(
    <LayoutStyled>
      <PlayerBackground />
      <Auth />
      <PageContext.Provider value={value}>
        <Header />
        <Content />
      </PageContext.Provider>
      <Footer />
    </LayoutStyled>
  )
}

export default Home