import React from 'react'
import Auth from '../components/Auth'
import Registration from '../components/Registration'
import Forgot from '../components/Forgot'

const Authentication = () => {
  const [check, setCheck] = React.useState('auth')

  const switchHandler = (key) => {
    setCheck(key)
  }

  return (
    <>
      {check === 'auth' && <Auth onClick={switchHandler}/>}
      {check === 'newuser' && <Registration onClick={switchHandler}/>}
      {check === 'forgot' && <Forgot onClick={switchHandler}/>}
    </>
  )
}

export default Authentication