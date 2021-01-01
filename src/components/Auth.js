import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

const Auth = (props) => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
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
          placeholder="Username" />
      </Form.Item>
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
          placeholder="Password"
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
        >Регистрация
        </span>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Auth