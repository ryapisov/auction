import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

const Registration = (props) => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="ant-form-auth">
      <Title level={2}>Создание аккаунта</Title>
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
          placeholder="Новый email или телефон" 
        />
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
          placeholder="Придумайте пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          className="login-form-button ant-btn-purple"
        >Создать аккаунт!
        </Button>
        &nbsp;или&nbsp; 
        <span
         className="login-form-new-user"
         onClick={()=>props.onClick('auth')}
        >войти в аккаунт
        </span>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Registration