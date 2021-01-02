import React from 'react'
import { Form, Input, Button, Checkbox, Typography, Radio } from 'antd'
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

const Auth = (props) => {

  const [check, setCheck] = React.useState('email');

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const onChangeHandler = (key) => {
    setCheck(key)
  }

  return (
    <div className="ant-form-auth">
      <Title level={2}>Вход в аккаунт</Title>
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
        <span 
          className="login-form-forgot" 
          onClick={()=>props.onClick('forgot')}
        >забыли пароль?
        </span>
      </Form.Item>

      <Form.Item>
        <Button  htmlType="submit" className="login-form-button ant-btn-purple">
          Войти
        </Button>
        &nbsp;&nbsp;или&nbsp;&nbsp;
        <span 
          className="login-form-new-user"
          onClick={()=>props.onClick('newuser')}
        >регистрация
        </span>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Auth