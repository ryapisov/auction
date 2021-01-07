import styled from 'styled-components'
import { Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

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

const Registration = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Title level={2}>
        Создание аккаунта
      </Title>
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
          <Btn htmlType="submit">
            Создать аккаунт!
          </Btn>
          &nbsp;или&nbsp; 
          <Link onClick={()=>props.onClick('auth')}>
            войти в аккаунт
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default Registration