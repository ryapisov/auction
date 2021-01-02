import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button, Checkbox, Typography, Radio } from 'antd'
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

const Wrap = styled.div`
  background: rgba(255, 255, 255, .9);
  padding: 40px 33px 20px 33px;
  position: fixed;
  border: 1px solid #333;
  border-radius: 2px;
  right: 8vw;
  top: 15vh;
  z-index: 2;
`
const Link = styled.span`
  color: rgb(18, 179, 24);
  &:hover{
    color: rgba(18, 179, 24, 0.5);
    cursor: pointer;
  }
`
const Btn = styled(Button)`
  background-color: rgb(113, 97, 174);
  border: 1px solid rgb(145, 142, 217);
  color: rgb(255, 255, 255);
  &:hover{
    background-color: rgb(145, 142, 217);
    border: 1px solid rgb(113, 97, 174);
    color: rgb(255, 255, 255);
  }
` 

const Auth = (props) => {

  const [check, setCheck] = React.useState('email');

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const onChangeHandler = (key) => {
    setCheck(key)
  }

  return (
    <Wrap>
      <Title level={2}>
        Вход в аккаунт
      </Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="" name="">
            <Radio.Group size="small" onChange={(e)=>onChangeHandler(e.target.value)}>
              <Radio.Button value="login">&nbsp;логин&nbsp;</Radio.Button>
              <Radio.Button value="email">&nbsp;email&nbsp;</Radio.Button>
              <Radio.Button value="phone">&nbsp;телефон&nbsp;</Radio.Button>
            </Radio.Group>
          </Form.Item>

        { check === 'login' &&
          <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input 
            size="large" 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Ваш логин" />
        </Form.Item>
        }
        
        {check === 'email' && 
          <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input 
            size="large"
            prefix={<MailOutlined  className="site-form-item-icon" />} 
            placeholder="Введите email" />
        </Form.Item>
        }

        {check === 'phone' &&
          <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input 
            size="large" 
            prefix={<PhoneOutlined className="site-form-item-icon" />} 
            placeholder="+7 телефон" />
        </Form.Item>
        }

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
          <Link
            onClick={()=>props.onClick('forgot')}
          >забыли пароль?
          </Link>
        </Form.Item>

        <Form.Item>
          <Btn htmlType="submit">
            Войти
          </Btn>
          &nbsp;&nbsp;или&nbsp;&nbsp;
          <Link onClick={()=>props.onClick('newuser')}>
            регистрация
          </Link>
        </Form.Item>
      </Form>
    </Wrap>
  )
}

export default Auth