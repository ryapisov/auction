import React from 'react'
import styled from 'styled-components'
import { HomeContext } from './HomeContext'
import Auth from './Auth'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const LayoutWrap = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`

const Home = () => {
  const [content, setContent] = React.useState('player')

  const value = {
    header:{
      menu:[
        {name:'Главная', id:'player'},
        {name:'Об аукционе', id:'about'},
        {name:'Карьера', id:'job'},
      ],
      setContent:(name)=>setContent(name)
    },
    body:{
      content
    },
    footer:{

    }
  }

  return(
    <LayoutWrap>
      <Auth/>
      <HomeContext.Provider value={value}>
        <Header/>
        <Body/>
        <Footer/>
      </HomeContext.Provider>
    </LayoutWrap>
  )
}

export default Home