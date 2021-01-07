import React from 'react'
import styled from 'styled-components'
import Authentication from './_Authentication'
import Registration from './_Registration'
import Forgot from './_Forgot'

const Wrap = styled.div`
  background: rgba(255, 255, 255, .9);
  padding: 40px 33px 20px 33px;
  position: fixed;
  border: 1px solid #333;
  border-radius: 2px;
  right: 8vw;
  top: 15vh;
  z-index: 30;
`

const Auth = () => {
  const [checkForm, setCheckForm] = React.useState('auth')
  const switchHandler = (name) => {
    setCheckForm(name)
  }
  
  return (
    <Wrap>
      {checkForm === 'auth' && <Authentication onClick={switchHandler}/>}
      {checkForm === 'newuser' && <Registration onClick={switchHandler}/>}
      {checkForm === 'forgot' && <Forgot onClick={switchHandler}/>}
    </Wrap>
  )
}

export default Auth
