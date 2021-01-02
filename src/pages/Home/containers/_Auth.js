import React from 'react'
import Auth from '../components/_Auth'
import Registration from '../components/_Registration'
import Forgot from '../components/_Forgot'

const _Auth = () => {
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

export default _Auth